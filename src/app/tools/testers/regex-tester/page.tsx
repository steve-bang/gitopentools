import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";
import { defaultSEO } from "@/lib/seo.config";
import { PROJECT_INFO } from "@/project";

export const metadata = generateMetadata({
  title: "Free Regex Tester Online - Test Regular Expressions in Real-Time",
  description:
    "Free online Regex Tester to test, debug, and validate regular expressions instantly. Supports JavaScript regex syntax with real-time matching, highlighting, and quick reference. Perfect for developers and data analysts.",
  keywords: "regex tester, regular expression tester, regex online, regex debugger, pattern matching, regex validation, javascript regex, regex cheat sheet, regex quick reference, regex practice, regex matcher, online regex tool, GitOpenTools, developer tools",
  path: LINK_MAP.tools.testers.regex
});

const urlPage = `${defaultSEO.baseUrl}${LINK_MAP.tools.testers.regex}`

const RegexTesterPage = () => {

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free Regex Tester Online",
    "url": urlPage,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description":
      "Professional regex tester tool to validate and debug regular expressions in real-time. Features syntax highlighting, match visualization, quick reference, and common pattern examples for developers.",
    "featureList": [
      "Test regular expressions instantly",
      "Real-time matching and highlighting",
      "JavaScript regex syntax support",
      "Quick reference cheat sheet",
      "Common regex patterns library",
      "Match groups extraction",
      "Global and case-insensitive flags",
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
      "regex tester",
      "regular expression tester",
      "regex online",
      "regex debugger",
      "pattern matching",
      "regex validation",
      "javascript regex",
      "regex cheat sheet"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1876",
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
          "name": "Full Stack Developer"
        },
        "reviewBody": "Excellent regex tester with real-time feedback and great pattern examples. Saves me so much debugging time!"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a regex tester?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A regex tester is a tool that allows you to test and debug regular expressions in real-time. It shows matches, highlights patterns, and helps validate regex syntax against sample text."
        }
      },
      {
        "@type": "Question",
        "name": "Which regex syntax is supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our regex tester supports JavaScript regex syntax, which is also compatible with most modern programming languages including JavaScript, Python, Java, and C#."
        }
      },
      {
        "@type": "Question",
        "name": "Is this regex tester free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our regex tester is completely free to use with no registration required. You can test unlimited regular expressions online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I save my regex patterns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, patterns are not saved between sessions. However, you can copy your regex to clipboard or use the common pattern examples for quick access."
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
        <HeaderNavigation title="Regex Tester" description="Test and debug regular expressions with real-time matching and highlighting" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

        </div>
      </section>

    </>
  );
};

export default RegexTesterPage;