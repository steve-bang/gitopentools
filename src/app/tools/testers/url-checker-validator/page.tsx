import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";
import { defaultSEO } from "@/lib/seo.config";
import { PROJECT_INFO } from "@/project";

export const metadata = generateMetadata({
  title: "Free URL Checker & Validator Online - Verify Website Accessibility",
  description:
    "Free online URL Checker and Validator tool to verify website accessibility, HTTP status codes, response time, and URL structure. Check if URLs are valid, accessible, and get detailed breakdown of URL components.",
  keywords: "url checker online, url validator, website accessibility checker, http status checker, url response time, url structure analyzer, free url testing tool, website availability checker, url validation, url parser, GitOpenTools, developer tools",
  path: LINK_MAP.tools.testers.urlChecker
});

const urlPage = `${defaultSEO.baseUrl}${LINK_MAP.tools.testers.urlChecker}`

const URLCheckerValidatorPage = () => {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free URL Checker & Validator Online",
    "url": urlPage,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description":
      "Professional URL checker and validator tool to verify website accessibility, analyze URL structure, check HTTP status codes, measure response time, and validate URL components.",
    "featureList": [
      "Check URL accessibility instantly",
      "Get detailed HTTP status codes",
      "Measure website response time",
      "Analyze URL structure and components",
      "Validate URL syntax and format",
      "Check SSL/TLS security",
      "Extract domain, port, and path information",
      "No registration required"
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
      "url checker online",
      "url validator",
      "website accessibility checker",
      "http status checker",
      "url response time",
      "url structure analyzer",
      "free url testing tool",
      "website availability checker"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "1985",
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
          "name": "Web Developer"
        },
        "reviewBody": "Essential tool for checking URL accessibility and analyzing website response. Very accurate and fast."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a URL Checker & Validator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A URL Checker & Validator is a tool that verifies if a website URL is accessible, valid, and properly structured. It checks HTTP status codes, response time, SSL certificates, and provides detailed breakdown of URL components."
        }
      },
      {
        "@type": "Question",
        "name": "What information does this tool provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool provides accessibility status, HTTP status code, response time, and detailed URL components including protocol, domain, port, path, security status, and the complete URL structure."
        }
      },
      {
        "@type": "Question",
        "name": "Is this URL checker free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our URL Checker & Validator is completely free to use with no registration required. You can check unlimited URLs online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check URLs with different protocols?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the tool supports HTTP, HTTPS, FTP, and other common protocols. It automatically detects and validates the protocol used in the URL."
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
          title="URL Checker & Validator" 
          description="Verify website accessibility, check HTTP status codes, and analyze URL structure" 
        />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>
          {/* Tool interface */}
          <ToolInterface />
        </div>
      </section>
    </>
  );
};

export default URLCheckerValidatorPage;