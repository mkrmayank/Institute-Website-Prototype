import { useState } from "react";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ongoingProjects = [
  {
    title: "National Freight Corridor Optimization Model",
    description: "Development of an AI-driven optimization model for freight movement across national corridors.",
    progress: 65,
    status: "In Progress",
    timeline: "2024-2026",
  },
  {
    title: "Port Congestion Analytics Platform",
    description: "Real-time analytics platform for predicting and mitigating port congestion across major Indian ports.",
    progress: 40,
    status: "In Progress",
    timeline: "2024-2025",
  },
  {
    title: "Green Logistics Assessment Framework",
    description: "Comprehensive framework for assessing and improving environmental sustainability in logistics operations.",
    progress: 75,
    status: "In Progress",
    timeline: "2023-2025",
  },
  {
    title: "Last-Mile Delivery Optimization for E-Commerce",
    description: "Research study on optimizing last-mile delivery networks in urban and semi-urban regions.",
    progress: 50,
    status: "In Progress",
    timeline: "2024-2025",
  },
  {
    title: "Blockchain for Supply Chain Transparency",
    description: "Pilot implementation of blockchain technology for enhancing transparency in pharmaceutical supply chains.",
    progress: 30,
    status: "In Progress",
    timeline: "2024-2026",
  },
];

const upcomingProjects = [
  {
    title: "Multimodal Transport Integration Study",
    description: "Comprehensive study on integrating road, rail, and waterways for efficient freight movement.",
    status: "Planned",
    timeline: "Q1 2025",
  },
  {
    title: "Cold Chain Logistics Infrastructure Assessment",
    description: "Nationwide assessment of cold chain infrastructure gaps and opportunities for agri-logistics.",
    status: "Initiation Stage",
    timeline: "Q2 2025",
  },
  {
    title: "Digital Twin for Terminal Operations",
    description: "Development of digital twin technology for optimizing container terminal operations.",
    status: "Coming Soon",
    timeline: "2025-2027",
  },
  {
    title: "Logistics Policy Impact Analysis",
    description: "Evaluation of recent logistics policies and their impact on trade facilitation and competitiveness.",
    status: "Planned",
    timeline: "Q3 2025",
  },
  {
    title: "Autonomous Vehicle Integration in Freight",
    description: "Research on regulatory and operational frameworks for autonomous vehicles in freight transport.",
    status: "Initiation Stage",
    timeline: "2025-2026",
  },
];

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-[#003366] mb-4">Projects</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Ongoing and upcoming research initiatives driving innovation in multimodal logistics
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-6">
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-[#003366] mb-2">{project.title}</h3>
                    <p className="text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#e7e9ec]">
                        {project.status}
                      </Badge>
                      <Badge variant="outline">{project.timeline}</Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Progress</span>
                    <span className="text-sm">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#003366] h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[#003366] mb-2">{project.title}</h3>
                    <p className="text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className={
                          project.status === "Planned"
                            ? "bg-blue-100 text-blue-700"
                            : project.status === "Initiation Stage"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }
                      >
                        {project.status}
                      </Badge>
                      <Badge variant="outline">{project.timeline}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
