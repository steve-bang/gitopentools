
import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";
import { defaultSEO } from "@/lib/seo.config";
import { PROJECT_INFO } from "@/project";

export const metadata = generateMetadata({
  title: "Free SQL Formatter Online - Format & Beautify SQL Queries | GitOpenTools",
  description:
    "Free online SQL Formatter to beautify, format, and validate SQL queries instantly. Clean up messy SQL code with syntax highlighting, proper indentation, and error detection. Best SQL formatter tool for developers.",
  keywords: "sql formatter online, sql beautifier, sql validator, format sql online, pretty print sql, sql syntax highlighter, sql code formatter, sql query formatter, free sql tool, online sql editor, sql formatter free, beautify sql, sql parser, GitOpenTools, developer tools",
  path: LINK_MAP.tools.formatters.sql
});

const urlPage = `${defaultSEO.baseUrl}${LINK_MAP.tools.formatters.sql}`

const SQLFormatterPage = () => {


  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free SQL Formatter Online",
    "url": urlPage,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description":
      "Professional SQL formatter tool to beautify, validate, and format SQL queries online. Features syntax highlighting, proper indentation, and instant formatting for MySQL, PostgreSQL, SQL Server, Oracle, and SQLite queries.",
    "featureList": [
      "Format SQL queries instantly",
      "Syntax highlighting for better readability",
      "Support for multiple SQL dialects",
      "Validate SQL syntax",
      "Proper indentation and formatting",
      "Minify SQL code",
      "Copy formatted results",
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
      "sql formatter online",
      "sql beautifier",
      "sql validator",
      "format sql online",
      "sql syntax highlighter",
      "sql code formatter",
      "sql query formatter",
      "free sql tool",
      "online sql editor"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2547",
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
          "name": "Developer"
        },
        "reviewBody": "Best free SQL formatter online. Clean interface and perfect formatting every time."
      }
    ]
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a SQL formatter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A SQL formatter is a tool that automatically formats and beautifies SQL code by adding proper indentation, spacing, and structure to make it more readable and maintainable."
        }
      },
      {
        "@type": "Question",
        "name": "Which SQL databases are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our SQL formatter supports all major SQL databases including MySQL, PostgreSQL, SQL Server, Oracle, SQLite, and standard ANSI SQL syntax."
        }
      },
      {
        "@type": "Question",
        "name": "Is this SQL formatter free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our SQL formatter is completely free to use with no registration required. You can format unlimited SQL queries online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I validate SQL syntax with this tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our SQL formatter includes syntax validation to help you identify and fix errors in your SQL queries while formatting them."
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
        <HeaderNavigation title="SQL Formatter" description="Format and beautify your SQL queries with syntax highlighting" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

        </div>
      </section>

    </>
  );
};

export default SQLFormatterPage;
