import {
  Target,
  CheckSquare,
  Megaphone,
  Eye,
  FileText,
} from "lucide-react";

const addons = [
  {
    icon: Target,
    title: "LeadIncrease add-on",
    description: "Capture more leads",
    price: "₹499",
  },
  {
    icon: CheckSquare,
    title: "Projects add-on",
    description: "Deliver projects and reach goals faster",
    price: "₹399",
  },
  {
    icon: Megaphone,
    title: "Campaigns add-on",
    description: "Send awesome email marketing campaigns",
    price: "₹299",
  },
  {
    icon: Eye,
    title: "Online Visitors add-on",
    description: "See who's browsing your site",
    price: "₹599",
  },
  {
    icon: FileText,
    title: "Smart Docs add-on",
    description: "Manage all your documents in one place",
    price: "₹499",
  },
];

export function Addons() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-orange-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
          Enrich your plan with more features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20">
                <addon.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {addon.title}
                </h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  {addon.description}
                </p>
                <p className="text-slate-900 text-sm mt-1">
                  Starting from <span className="font-bold">{addon.price}</span>/mo
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
