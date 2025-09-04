import { Metadata } from "next";
import { defaultSEO } from "./seo.config";

export function generateMetadata({
    title,
    description,
    keywords,
    path,
}: {
    title: string;
    description: string;
    keywords: string;
    path: string;
}): Metadata {
    const url = `${defaultSEO.baseUrl}${path}`;
    return {
        title: title,
        description: description,
        keywords: keywords,
        alternates: { canonical: url },
        openGraph: {
            title: title,
            description: description,
            url: url,
            siteName: defaultSEO.siteName,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        icons: {
            icon: "/favicon/favicon.ico",
            shortcut: "/favicon/apple-touch-icon.png",
            apple: "/favicon/apple-touch-icon.png",
        },
        manifest: "/favicon/site.webmanifest",
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
        },
    };
}
