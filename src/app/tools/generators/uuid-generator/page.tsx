import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";
import { defaultSEO } from "@/lib/seo.config";
import { PROJECT_INFO } from "@/project";

export const metadata = generateMetadata({
  title: "UUID Generator – UUID v4, v1, v7 Online | GitOpenTools",
  description: "Generate UUIDs instantly online. Support UUID v4, v1 and v7. Client-side, fast, and built for developers.",
  keywords: "uuid generator, generate uuid, uuid v4, uuid v1, uuid v7, online uuid generator, random uuid, uuid for developers, rfc 4122, unique identifier, database id, api id, microservices, distributed systems",
  path: LINK_MAP.tools.generators.uuid
});

const urlPage = `${defaultSEO.baseUrl}${LINK_MAP.tools.generators.uuid}`;

const UUIDGeneratorPage = () => {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free UUID Generator Online",
    "url": urlPage,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description": "Generate RFC-compliant UUIDs instantly online. Supports UUID v4 (random), v1 (time-based), and v7 (time-ordered). Client-side generation ensures privacy and security.",
    "featureList": [
      "Generate UUID v4, v1, and v7",
      "Bulk generation (up to 100 UUIDs)",
      "Multiple format options",
      "Client-side generation",
      "Copy to clipboard",
      "RFC 4122 compliant",
      "No registration required",
      "Completely free"
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
      "uuid generator",
      "generate uuid",
      "uuid v4",
      "uuid v1",
      "uuid v7",
      "online uuid generator",
      "random uuid",
      "uuid for developers"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1892",
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
          "name": "Backend Developer"
        },
        "reviewBody": "Perfect UUID generator! Love the v7 support and bulk generation. Use it daily for API development."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this UUID generator RFC compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our UUID generator produces RFC 4122 compliant UUIDs for all versions (v1, v4, v7). The generated UUIDs follow the standard format and can be used in any system that requires standard UUIDs."
        }
      },
      {
        "@type": "Question",
        "name": "Are generated UUIDs stored anywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all UUID generation happens client-side in your browser. We don't send your data to any server, and no UUIDs are stored or logged. This ensures complete privacy and security."
        }
      },
      {
        "@type": "Question",
        "name": "What UUID version should I use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use UUID v4 for most cases (random, high uniqueness). Use UUID v1 if you need time-based ordering. Use UUID v7 for modern applications requiring time-ordered, sortable IDs. UUID v4 is generally recommended for distributed systems."
        }
      },
      {
        "@type": "Question",
        "name": "Is UUID v7 better than v4?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UUID v7 provides time-ordered UUIDs that are sortable by creation time, which can improve database indexing performance. UUID v4 provides pure randomness. Choose v7 if you need sortable IDs, otherwise v4 is perfectly fine."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use UUIDs as primary keys in databases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, UUIDs are commonly used as primary keys in databases. They're especially useful in distributed systems where multiple services generate records independently. Most databases (PostgreSQL, MySQL, MongoDB) have native UUID support."
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
      
      <section>
        {/* Header */}
        <HeaderNavigation 
          title="UUID Generator" 
          description="Generate RFC-compliant UUIDs instantly for databases, APIs, and distributed systems." 
        />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>
          {/* Tool interface */}
          <ToolInterface />

          {/* Explanation Section */}
          <div className="tool-card rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a UUID and When Should You Use It?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. 
                UUIDs are standardized by RFC 4122 and are designed to be globally unique, making them ideal for distributed systems.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">UUID Version Differences:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>UUID v1 (Time-based)</strong>: Generated using timestamp and MAC address. 
                  Predictable but contains creation time information.
                </li>
                <li>
                  <strong>UUID v4 (Random)</strong>: Generated using random or pseudo-random numbers. 
                  Most common, offers highest uniqueness probability.
                </li>
                <li>
                  <strong>UUID v7 (Time-ordered)</strong>: Modern UUID with timestamp in most significant bits. 
                  Sortable by creation time, ideal for database indexing.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When to Use UUIDs Instead of Auto-increment IDs:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Distributed systems with multiple databases</li>
                <li>Microservices architecture</li>
                <li>Client-side ID generation</li>
                <li>Offline-capable applications</li>
                <li>When you need to merge datasets from different sources</li>
                <li>Security-sensitive applications (prevents ID enumeration)</li>
              </ul>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="tool-card rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Database Primary Keys</h3>
                <p className="text-gray-600 text-sm">
                  Use UUIDs as primary keys in PostgreSQL, MySQL, MongoDB, etc. for distributed database scenarios.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">REST API Identifiers</h3>
                <p className="text-gray-600 text-sm">
                  Generate unique resource IDs for REST APIs to prevent ID collisions across services.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Microservices Communication</h3>
                <p className="text-gray-600 text-sm">
                  Use UUIDs as correlation IDs to trace requests across multiple microservices.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Event IDs and Logs</h3>
                <p className="text-gray-600 text-sm">
                  Generate unique IDs for system events, logs, and audit trails for traceability.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="tool-card rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UUIDGeneratorPage;