
import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "Free SQL Formatter Online",
  description:
    "Free online JSON Formatter to beautify, validate, and minify JSON instantly. Make JSON readable, error-free, and easy to share with GitOpen Tools developer tools.",
  keywords: "json formatter online, json beautifier, json validator, pretty print json, minify json, format json online, developer tools, GitOpenTools, free json tool, online json editor",
  path: LINK_MAP.tools.formatters.sql,
});

const JsonFormatterPage = () => {


  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free JSON Formatter Online",
    "url": "https://www.gitopentools.com/tools/formatters/json-formatter",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description":
      "Format, validate, and beautify JSON online instantly. Free JSON Formatter to beautify, minify, and validate JSON. Perfect for developers to make JSON readable and error-free.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": "https://www.gitopentools.com/tools/formatters/json-formatter"
    },
    "creator": {
      "@type": "Organization",
      "name": "GitOpenTools",
      "url": "https://www.gitopentools.com",
      "logo": "https://www.gitopentools.com/assets/logo.png"
    },
    "keywords": [
      "json formatter online",
      "json beautifier",
      "json validator",
      "pretty print json",
      "minify json",
      "format json online",
      "free json tool"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
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

export default JsonFormatterPage;
