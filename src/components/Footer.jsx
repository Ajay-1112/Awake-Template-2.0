import React from 'react';
import { Twitter, Linkedin, Dribbble, Instagram } from 'lucide-react';

export default function Footer() {
  // Footer data configuration
  const footerData = {
    company: {
      description: "Empowering businesses with innovative solutions. Let's create something amazing together."
    },
    socialMedia: [
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Dribbble", icon: Dribbble, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" }
    ],
    navigation: [
      {
        title: "Sitemap",
        links: [
          { name: "Contact us", href: "#" },
          { name: "About us", href: "#" },
          { name: "Work", href: "#" },
          { name: "Services", href: "#" },
          { name: "Pricing", href: "#" }
        ]
      },
      {
        title: "Other Pages",
        links: [
          { name: "Error 404", href: "#" },
          { name: "Terms & Conditions", href: "#" },
          { name: "Privacy Policy", href: "#" }
        ]
      }
    ],
    contact: {
      title: "Contact Details",
      details: [
        { type: "address", content: "81 Rivington Street London EC2A 3AY" },
        { type: "email", content: "hello@awake.agency", href: "mailto:hello@awake.agency" },
        { type: "phone", content: "0105 192 3556", href: "tel:01051923556" }
      ]
    }
  };

  return (
    <footer className=" text-primary bg-gray-50 py-10 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 h-20">
              <img src="/images/logo options -01.png" alt="" className="h-40 w-auto -ml-10 " />
            </div>
            <p className="text-secondary-text text-md leading-relaxed">
              {footerData.company.description}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              {footerData.socialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-secondary-text hover:text-primary-text transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerData.navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-primary-text font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-text hover:text-primary-text transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div>
            <h3 className="text-primary-text font-semibold mb-4">{footerData.contact.title}</h3>
            <div className="space-y-3">
              {footerData.contact.details.map((detail, index) => (
                <div key={index}>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-secondary-text hover:text-primary-text transition-colors text-sm block"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-secondary-text hover:text-primary-text text-sm">
                      {detail.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}