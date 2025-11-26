import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-[#003366] mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Get in touch with us for collaborations, inquiries, or more information about our
            research initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-10">
              <h2 className="text-[#003366] mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#003366] mb-1">Address</h4>
                    <p className="text-sm">
                      Center of Excellence in Multimodal Logistics
                      <br />
                      Indian Institute of Management Mumbai
                      <br />
                      Vihar Lake, Powai
                      <br />
                      Mumbai - 400076, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#003366] mb-1">Email</h4>
                    <a
                      href="mailto:coe.logistics@iimmumbai.ac.in"
                      className="text-sm hover:underline"
                    >
                      coe.logistics@iimmumbai.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#003366] mb-1">Phone</h4>
                    <p className="text-sm">+91 22 6157 6000</p>
                    <p className="text-sm text-gray-600">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>IIM Mumbai, Powai Campus</p>
                  <p className="text-sm">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-[#003366] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief subject of your message"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  className="mt-1.5"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#003366] hover:bg-[#002244]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Collaboration CTA */}
        <div className="mt-16 bg-[#e7e9ec] rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-[#003366] mb-4">Work With Us</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            We welcome collaborations with industry partners, government bodies, research
            institutions, and international organizations. Whether you're interested in joint
            research projects, consulting services, or knowledge partnerships, we'd love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
              Partnership Opportunities
            </Button>
            <Button size="lg" className="bg-[#003366] hover:bg-[#002244]">
              Research Collaboration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
