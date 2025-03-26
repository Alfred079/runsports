import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface SocialButtonProps {
  href: string;
  platform: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  content="info@premierleague.com"
                />
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  content="(555) 123-4567"
                />
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Address"
                  content="123 Soccer St, Field City, ST 12345"
                />
                <ContactInfo
                  icon={<Clock className="w-6 h-6" />}
                  title="Office Hours"
                  content="Monday - Friday: 9:00 AM - 5:00 PM"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <SocialButton href="#" platform="Facebook" />
                <SocialButton href="#" platform="Twitter" />
                <SocialButton href="#" platform="Instagram" />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <FAQItem
                  question="How can I join the league?"
                  answer="Contact us through the form or email for information about team registration and requirements."
                />
                <FAQItem
                  question="When is the next season starting?"
                  answer="The season typically starts in March and runs through November."
                />
                <FAQItem
                  question="How can I become a sponsor?"
                  answer="We offer various sponsorship packages. Contact us for more details."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="text-orange-600 mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function SocialButton({ href, platform }: SocialButtonProps) {
  return (
    <a
      href={href}
      className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
    >
      {platform}
    </a>
  );
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}