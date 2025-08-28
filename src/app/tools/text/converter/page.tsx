
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: "Text Converter Tool",
  description:
    "Free online text converter for developers. Convert text between uppercase, lowercase, snake_case, camelCase, and more with GitOpenTools' free text converter tool.",
  keywords: "text converter online, free text converter tool, json to xml converter, xml to json converter, csv converter online, sql string converter, html text converter, javascript string converter, csharp text converter, java string converter, developer tools online, text utilities for developers",
  path: "/tools/text/converter",
});

const TextConverterPage = () => {


  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Text Converter Tool",
    "url": "https://gitopentools.com/tools/text-converter",
    "applicationCategory": "Utility",
    "description": "Free online text converter for developers. Convert your text to uppercase, lowercase, capitalize, or customize output easily."
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(toolSchema)}
      </script>
      {/* Main Content Area */}
      <section>
        {/* Header */}
        <HeaderNavigation title="Case Converter" description="Transform text between different cases instantly" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

        </div>
      </section>

    </>
  );
};

export default TextConverterPage;
