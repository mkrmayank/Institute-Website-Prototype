import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { EventsPage } from "./components/pages/EventsPage";
import { TeamPage } from "./components/pages/TeamPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "projects":
        return <ProjectsPage />;
      case "events":
        return <EventsPage />;
      case "team":
        return <TeamPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
