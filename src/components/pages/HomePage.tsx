import { Truck, Database, Ship, Scale, BarChart3, Leaf } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const focusAreas = [
  {
    icon: Truck,
    title: "Multimodal Transport Systems",
    description: "Integrated transport solutions across road, rail, sea, and air networks.",
  },
  {
    icon: Database,
    title: "Supply Chain Digitization",
    description: "Digital transformation and automation of supply chain operations.",
  },
  {
    icon: Ship,
    title: "Port & Terminal Optimization",
    description: "Enhancing efficiency and capacity of port and terminal operations.",
  },
  {
    icon: Scale,
    title: "Logistics Policy & Governance",
    description: "Research and advisory on logistics policy frameworks and regulations.",
  },
  {
    icon: BarChart3,
    title: "Freight Analytics & Data Science",
    description: "Advanced analytics and data-driven insights for freight optimization.",
  },
  {
    icon: Leaf,
    title: "Sustainability in Logistics",
    description: "Green logistics practices and environmental impact reduction.",
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1713729894633-19ecfea5a16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cmFuc3BvcnRhdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzY0MTM1NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Logistics Network"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Center of Excellence in Multimodal Logistics
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              This website is inspired by IIM Mumbai official website
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#003366] mb-6">Our Mission</h2>
            <p className="text-lg">
              The Center of Excellence in Multimodal Logistics is committed to promoting
              innovation, operational efficiency, and sustainability in the logistics sector.
              Through cutting-edge research, industry collaboration, and technology-driven
              interventions, we aim to transform India's multimodal logistics landscape and
              develop solutions that enhance supply chain resilience, reduce costs, and
              minimize environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#e7e9ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#003366] mb-6">Our Vision</h2>
            <p className="text-lg">
              To establish ourselves as a nationally recognized hub for multimodal logistics
              research, policy support, and academic excellence. We envision becoming the
              preferred knowledge partner for government bodies, industry leaders, and
              international organizations seeking evidence-based solutions for complex logistics
              challenges. Our goal is to bridge academia and industry through impactful research,
              executive education, and technology interventions that shape the future of logistics
              in India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#003366] mb-4">Focus Areas</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our research and interventions span across critical domains of multimodal logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#003366] rounded-lg flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-[#003366] mb-3">{area.title}</h3>
                  <p className="text-sm">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
