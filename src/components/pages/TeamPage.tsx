import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

const leadership = [
  {
    name: "Prof. Rajesh Kumar",
    designation: "Director, CoE in Multimodal Logistics",
    image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQxMDY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Professor Rajesh Kumar is a distinguished expert in supply chain management and logistics with over 25 years of experience in research and consulting. His work focuses on multimodal transport optimization and sustainable logistics practices.",
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Chairperson & Senior Faculty",
    image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTAwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Dr. Priya Sharma specializes in logistics policy and governance. She has advised multiple government bodies on trade facilitation and has published extensively on regulatory frameworks for multimodal transport.",
  },
  {
    name: "Prof. Anil Mehta",
    designation: "Faculty Lead - Research & Analytics",
    image: "https://images.unsplash.com/photo-1666830025232-e501f0fbac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQxNjU2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Professor Anil Mehta brings expertise in operations research and data analytics. His research focuses on applying AI and machine learning to freight optimization and predictive logistics modeling.",
  },
];

const researchTeam = [
  {
    name: "Dr. Kavita Desai",
    title: "Senior Research Fellow",
    expertise: ["Port Operations", "Terminal Optimization", "Maritime Logistics"],
    image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQxMDY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Mr. Rohit Verma",
    title: "Research Analyst",
    expertise: ["Supply Chain Digitization", "Blockchain", "IoT"],
    image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTAwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Ms. Sneha Patel",
    title: "Research Fellow",
    expertise: ["Sustainability", "Green Logistics", "Carbon Analytics"],
    image: "https://images.unsplash.com/photo-1666830025232-e501f0fbac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQxNjU2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Mr. Arjun Singh",
    title: "Data Scientist",
    expertise: ["Machine Learning", "Predictive Analytics", "Big Data"],
    image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQxMDY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Dr. Neha Gupta",
    title: "Post-Doctoral Fellow",
    expertise: ["Transport Economics", "Policy Analysis", "Infrastructure"],
    image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTAwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Mr. Vikram Joshi",
    title: "Research Associate",
    expertise: ["Last-Mile Delivery", "Urban Logistics", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1666830025232-e501f0fbac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQxNjU2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const partners = [
  { name: "Ministry of Shipping", type: "Government" },
  { name: "National Highways Authority of India", type: "Government" },
  { name: "Indian Railways", type: "Government" },
  { name: "JNPT - Jawaharlal Nehru Port Trust", type: "Port Authority" },
  { name: "Container Corporation of India", type: "Industry" },
  { name: "Maersk India", type: "Industry" },
  { name: "DHL Supply Chain", type: "Industry" },
  { name: "Amazon Logistics", type: "Industry" },
  { name: "Blue Dart Express", type: "Industry" },
  { name: "World Bank", type: "International" },
  { name: "Asian Development Bank", type: "International" },
  { name: "UNESCAP", type: "International" },
];

export function TeamPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-[#003366] mb-4">Our Team</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Meet the experts driving research and innovation in multimodal logistics
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-[#003366] mb-8 text-center">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gray-200">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#003366] mb-1">{leader.name}</h3>
                    <p className="text-sm text-[#003366] mb-3">{leader.designation}</p>
                    <p className="text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Team Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-[#003366] text-center">Research Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-[#003366] mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{member.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-[#e7e9ec] text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaborators & Partners */}
        <section>
          <div className="mb-8">
            <h2 className="text-[#003366] text-center mb-4">
              Collaborators & Industry Partners
            </h2>
            <p className="text-center max-w-3xl mx-auto">
              We collaborate with leading government bodies, industry partners, and international
              organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#e7e9ec] rounded-full mb-3 flex items-center justify-center">
                  <span className="text-2xl text-[#003366]">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-sm text-[#003366] mb-2">{partner.name}</h4>
                <Badge variant="outline" className="text-xs">
                  {partner.type}
                </Badge>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
