import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-white mb-4">
              Center of Excellence in Multimodal Logistics
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A research and innovation hub under IIM Mumbai, dedicated to advancing
              multimodal logistics through research, policy support, and industry collaboration.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Indian Institute of Management Mumbai<br />
                  Vihar Lake, Powai, Mumbai - 400076<br />
                  Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:coe.logistics@iimmumbai.ac.in" className="text-gray-300 hover:text-white">
                  coe.logistics@iimmumbai.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-300">+91 22 6157 6000</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} IIM Mumbai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
