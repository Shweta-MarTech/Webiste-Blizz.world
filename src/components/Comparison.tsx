import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    feature: "Price (10 users/year)",
    us: "₹59,880",
    zoho: "₹1,40,000",
    hubspot: "₹10,25,000",
  },
  {
    feature: "Setup / Onboarding Fee",
    us: "₹0",
    zoho: "₹0",
    hubspot: "₹1,25,000",
  },
  { feature: "WhatsApp Native", us: true, zoho: false, hubspot: false },
  { feature: "Setup Time", us: "5 min", zoho: "1-2 weeks", hubspot: "2-4 weeks" },
  { feature: "GST Invoicing", us: true, zoho: "partial", hubspot: false },
  { feature: "India & GCC Business Workflows", us: true, zoho: "partial", hubspot: false },
  { feature: "Mobile Responsive", us: true, zoho: true, hubspot: true },
  { feature: "Team Hierarchy & RBAC", us: true, zoho: true, hubspot: "paid" },
  { feature: "Free Tier", us: "2 users", zoho: "3 users", hubspot: "2 users" },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={18} className="text-green-500 mx-auto" />;
  if (value === false) return <X size={18} className="text-red-400 mx-auto" />;
  if (value === "partial" || value === "paid")
    return <Minus size={18} className="text-yellow-500 mx-auto" />;
  return <span>{value}</span>;
}

export function Comparison() {
  return (
    <section id="compare" className="relative py-20 px-4 sm:px-6 bg-orange-50/30">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">Compare</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            See how Blizz stacks up
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Built for Indian and GCC teams. Priced for small businesses.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 font-medium text-slate-400 w-[35%]">
                  Feature
                </th>
                <th className="text-center py-3 px-4 font-semibold text-orange-600">
                  Blizz
                </th>
                <th className="text-center py-3 px-4 font-medium text-slate-400">
                  Zoho CRM
                </th>
                <th className="text-center py-3 px-4 font-medium text-slate-400">
                  HubSpot
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "" : "bg-orange-50/30"}
                >
                  <td className="py-3 px-4 text-slate-700 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-slate-900">
                    <CellValue value={row.us} />
                  </td>
                  <td className="py-3 px-4 text-center text-slate-500">
                    <CellValue value={row.zoho} />
                  </td>
                  <td className="py-3 px-4 text-center text-slate-500">
                    <CellValue value={row.hubspot} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Save over ₹80,000/year compared to Zoho. Over ₹9,60,000/year
            compared to HubSpot.
          </p>
          <a
            href="#cta"
            data-track="cta_click"
            data-track-label="Compare: Switch to Blizz"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all glow-orange-sm"
          >
            Switch to Blizz — Free
          </a>
        </div>
      </div>
    </section>
  );
}
