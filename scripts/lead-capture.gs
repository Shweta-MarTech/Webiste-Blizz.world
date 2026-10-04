/**
 * Blizz website lead capture — Google Apps Script
 *
 * Receives "Get a Demo" form submissions from blizz.world, adds each one as a
 * row in this Google Sheet, and emails the team.
 *
 * Setup (one time):
 * 1. Create a Google Sheet named "Blizz Leads".
 * 2. Extensions → Apps Script. Delete the sample code and paste this file.
 * 3. Optionally set NOTIFY_EMAIL below (defaults to your own address), then Save.
 * 4. Deploy → New deployment → type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy and approve the permissions.
 * 5. Copy the Web app URL (ends in /exec) into LEADS_ENDPOINT in
 *    src/components/DemoForm.tsx.
 *
 * After editing this script, redeploy via Deploy → Manage deployments →
 * Edit → Version: New version, so the URL stays the same.
 */

// Leave empty to email the Google account that owns this script
const NOTIFY_EMAIL = "";
const SHEET_NAME = "Leads";

const COLUMNS = [
  "Received (IST)",
  "Name",
  "Email",
  "WhatsApp",
  "Business type",
  "Source",
  "Medium",
  "Campaign",
  "Term",
  "Content",
  "Landing page",
  "Form page",
  "Referrer",
  "Status",
];

function doPost(e) {
  const p = (e && e.parameter) || {};
  const sheet = getSheet_();

  const received = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm");
  const row = [
    received,
    clean_(p.name),
    clean_(p.email),
    clean_(p.whatsapp),
    clean_(p.business_type),
    clean_(p.utm_source) || sourceFromReferrer_(p.referrer),
    clean_(p.utm_medium),
    clean_(p.utm_campaign),
    clean_(p.utm_term),
    clean_(p.utm_content),
    clean_(p.landing_page),
    clean_(p.page),
    clean_(p.referrer),
    "New",
  ];
  sheet.appendRow(row);

  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL || Session.getEffectiveUser().getEmail(),
      subject: "New Blizz demo request: " + row[1] + " (" + row[4] + ")",
      body: COLUMNS.slice(0, 13)
        .map(function (label, i) { return label + ": " + (row[i] || "-"); })
        .join("\n") +
        "\n\nWhatsApp them: https://wa.me/" + waNumber_(row[3]) +
        "\nAll leads: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    });
  } catch (err) {
    // Row is already saved; don't fail the submission over the email
    console.error(err);
  }

  return ContentService.createTextOutput("ok");
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
  }
  return sheet;
}

// Prevent formula injection (values starting with = + - @ run as formulas in Sheets)
function clean_(value) {
  const s = String(value || "").trim().slice(0, 300);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function sourceFromReferrer_(referrer) {
  if (!referrer) return "direct";
  const host = String(referrer).replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "");
  return host.indexOf("blizz.world") === 0 ? "direct" : host;
}

// "98765 43210" or "+91 98765-43210" → "919876543210"
function waNumber_(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length === 10 ? "91" + digits : digits;
}

// Run this once from the editor to check the sheet and email work
function testDoPost() {
  doPost({
    parameter: {
      name: "Test Lead",
      email: "test@example.com",
      whatsapp: "9876543210",
      business_type: "Travel agency",
      utm_source: "test",
      page: "/",
    },
  });
}
