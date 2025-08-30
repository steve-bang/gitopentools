
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: "Escape & Unescape Text Online",
  description:
    "Powerful free escape & unescape text tool for developers. Safely convert strings in JSON, HTML, XML, SQL, JavaScript, C#, Java, CSV, and URLs.",
  keywords: "escape text online, unescape text online, string escaper tool, json escape tool, html escape tool, xml escape tool, sql escape tool, url encode decode, javascript escape unescape, csharp escape unescape, java escape unescape, csv escape unescape, developer text tools, free text converter online",
  path: "/tools/text/escape",
});

const TextEscapePage = () => {


  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Text Escape Tool",
    "url": "https://www.gitopentools.com/tools/text/escape",
    "applicationCategory": "Utility",
    "description": "Powerful free escape & unescape text tool for developers."
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(toolSchema)}
      </script>
      {/* Main Content Area */}
      <section>
        {/* Header */}
        <HeaderNavigation title="Text Escape Tool" description="Escape and unescape text for various programming languages" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

        </div>
      </section>

    </>
  );
};

export default TextEscapePage;
