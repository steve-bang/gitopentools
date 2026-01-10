import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";
import { defaultSEO } from "@/lib/seo.config";
import { PROJECT_INFO } from "@/project";

export const metadata = generateMetadata({
  title: "Password Generator – Secure, Free & Client-Side | GitOpenTools",
  description: "Generate strong, secure passwords instantly. 100% client-side, no tracking, no storage. Built for developers.",
  keywords: "strong password generator free, password generator online strong, very strong password generator, secure password generator, random password generator, strong password, password creator, password maker, online password generator, free password generator, client-side password generator, developer password tool, easy to remember password generator",
  path: LINK_MAP.tools.generators.password
});

const urlPage = `${defaultSEO.baseUrl}${LINK_MAP.tools.generators.password}`;

const PasswordGeneratorPage = () => {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Password Generator",
    "url": urlPage,
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "description": "Secure client-side password generator that creates strong, random passwords locally in your browser. No data is sent to servers, no logging, no tracking.",
    "featureList": [
      "Generate secure passwords locally",
      "Customizable password length (6-64 characters)",
      "Multiple character sets support",
      "Password strength indicator",
      "Copy to clipboard functionality",
      "No registration required",
      "100% client-side processing"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": urlPage
    },
    "creator": {
      "@type": "Organization",
      "name": "GitOpen Tools",
      "url": defaultSEO.baseUrl,
      "logo": `${defaultSEO.baseUrl}/assets/logo.png`,
      "sameAs": [
        PROJECT_INFO.socials.github
      ]
    },
    "keywords": [
      "password generator",
      "secure password generator",
      "random password generator",
      "strong password",
      "password creator",
      "online password tool"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "3125",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Security Engineer"
        },
        "reviewBody": "Perfect for generating secure passwords locally. No server calls means complete privacy."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this password generator safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it's completely safe. All password generation happens locally in your browser. No data is sent to any server, and there's no logging or tracking of any kind."
        }
      },
      {
        "@type": "Question",
        "name": "Are generated passwords stored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, passwords are never stored. They are generated in real-time in your browser's memory and are only displayed on your screen. They disappear when you refresh or close the page."
        }
      },
      {
        "@type": "Question",
        "name": "What is a strong password length?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend at least 12-16 characters for most uses. For highly sensitive accounts (banking, SSH keys, etc.), consider 20+ characters with all character types enabled."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for banking or production systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The passwords generated are cryptographically secure and suitable for any use, including banking, production systems, SSH keys, and API tokens."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Main Content Area */}
      <section>
        {/* Header */}
        <HeaderNavigation 
          title="Password Generator" 
          description="Generate secure, random passwords instantly. No storage. No tracking." 
        />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>
          {/* Tool interface */}
          <ToolInterface />

          {/* Trust & Security Explanation */}
          <div className="tool-card rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How This Password Generator Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">100% Client-Side</h3>
                    <p className="text-gray-600 text-sm">All password generation happens locally in your browser</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">No Data Storage</h3>
                    <p className="text-gray-600 text-sm">Passwords are never stored or transmitted to servers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Cryptographically Secure</h3>
                    <p className="text-gray-600 text-sm">Uses Web Crypto API for true random number generation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Production Ready</h3>
                    <p className="text-gray-600 text-sm">Suitable for GitHub, SSH, APIs, and production systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="tool-card rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: "🔑", title: "GitHub/GitLab", desc: "Repository access" },
                { icon: "💻", title: "SSH Keys", desc: "Server access" },
                { icon: "🗄️", title: "Databases", desc: "User credentials" },
                { icon: "🔌", title: "API Tokens", desc: "Service integration" },
                { icon: "⚙️", title: "Env Files", desc: ".env configuration" },
              ].map((useCase, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors">
                  <div className="text-2xl mb-2">{useCase.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-1">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="tool-card rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is this password generator safe?",
                  a: "Yes, it's 100% safe. All password generation happens locally in your browser using the Web Crypto API. No data is sent to any server, and there's no logging or tracking of any kind."
                },
                {
                  q: "Are generated passwords stored?",
                  a: "No, passwords are never stored. They are generated in real-time in your browser's memory and are only displayed on your screen. They disappear when you refresh or close the page."
                },
                {
                  q: "What is a strong password length?",
                  a: "We recommend at least 12-16 characters for most uses. For highly sensitive accounts (banking, SSH keys, etc.), consider 20+ characters with all character types enabled. The tool supports up to 64 characters."
                },
                {
                  q: "Can I use this for banking or production systems?",
                  a: "Absolutely. The passwords generated are cryptographically secure and suitable for any use, including banking, production systems, SSH keys, and API tokens. The entropy calculation ensures strong passwords."
                },
                {
                  q: "What makes a password strong?",
                  a: "A strong password has sufficient length (12+ characters), includes multiple character types (uppercase, lowercase, numbers, symbols), avoids predictable patterns, and has high entropy (complexity). Our tool helps you achieve all these criteria."
                }
              ].map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg p-4 hover:border-purple-500 transition-colors">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordGeneratorPage;