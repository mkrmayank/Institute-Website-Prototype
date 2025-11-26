import { Calendar, FileText, BookOpen, FileBarChart, ScrollText, Scale } from "lucide-react";

const events = [
  {
    date: "March 15-16, 2025",
    title: "National Conference on Multimodal Logistics",
    type: "Conference",
    description: "Annual conference bringing together industry leaders, policymakers, and researchers to discuss the future of multimodal logistics in India.",
  },
  {
    date: "April 22, 2025",
    title: "Executive Workshop: Supply Chain Digitization",
    type: "Workshop",
    description: "Hands-on workshop for senior executives on implementing digital technologies in supply chain operations.",
  },
  {
    date: "May 10-12, 2025",
    title: "Training Program: Freight Analytics & Data Science",
    type: "Training",
    description: "Intensive 3-day training program covering advanced analytics techniques for freight optimization and demand forecasting.",
  },
  {
    date: "June 8, 2025",
    title: "Webinar: Sustainable Logistics Practices",
    type: "Webinar",
    description: "Expert panel discussion on implementing green logistics practices and measuring environmental impact.",
  },
  {
    date: "July 20, 2025",
    title: "Industry Roundtable: Port Modernization",
    type: "Roundtable",
    description: "Collaborative discussion with port authorities and operators on modernization strategies and best practices.",
  },
];

const researchOutputs = [
  {
    icon: FileText,
    category: "Publications",
    items: [
      "Impact of Dedicated Freight Corridors on Logistics Efficiency (Journal of Transport Economics, 2024)",
      "Blockchain Applications in Maritime Supply Chains (International Journal of Logistics Management, 2024)",
      "Carbon Footprint Reduction in Last-Mile Delivery (Sustainability Journal, 2023)",
    ],
  },
  {
    icon: BookOpen,
    category: "Case Studies",
    items: [
      "Digital Transformation at JNPT: A Case Study in Port Modernization",
      "Cold Chain Optimization for Pharmaceutical Distribution in Rural India",
      "Integration of Road-Rail Freight Corridors: Lessons from the Western DFC",
    ],
  },
  {
    icon: FileBarChart,
    category: "Reports",
    items: [
      "State of Multimodal Logistics in India 2024 - Annual Report",
      "Assessment of Logistics Infrastructure Gaps in Tier-2 Cities",
      "Technology Readiness in Indian Logistics Sector: Survey Report",
    ],
  },
  {
    icon: Scale,
    category: "Policy Papers",
    items: [
      "Regulatory Framework for Autonomous Freight Vehicles in India",
      "Policy Recommendations for Integrated Logistics Parks",
      "Trade Facilitation and Logistics Performance: Policy Brief",
    ],
  },
  {
    icon: ScrollText,
    category: "Working Papers",
    items: [
      "Machine Learning Models for Port Congestion Prediction (WP-2024-15)",
      "Economic Viability of Inland Waterway Freight Transport (WP-2024-12)",
      "Optimization Models for Hub-and-Spoke Networks in Logistics (WP-2024-08)",
    ],
  },
];

export function EventsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Events Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-[#003366] mb-4">Events</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Upcoming conferences, workshops, training programs, and webinars
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 text-[#003366]">
                      <Calendar className="h-5 w-5" />
                      <span className="whitespace-nowrap">{event.date}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-[#003366]">{event.title}</h3>
                      <span className="px-3 py-1 bg-[#e7e9ec] text-[#003366] rounded text-sm whitespace-nowrap">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Outputs Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-[#003366] mb-4">Research Outputs</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Publications, case studies, reports, and policy papers from our research initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchOutputs.map((output, index) => {
              const Icon = output.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-[#003366]">{output.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {output.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#003366] rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}