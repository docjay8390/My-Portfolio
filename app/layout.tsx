import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Bernie Fernando | IT Officer Portfolio";
const description =
  "Professional portfolio for Bernie Fernando, an IT Officer and junior web developer with UI/UX, frontend, support, Photoshop, and video editing skills.";

function getBaseUrl(host: string | null, protocol: string | null) {
  const fallback = "http://localhost:3000";
  if (!host) {
    return fallback;
  }

  const cleanHost = host.split(",")[0]?.trim();
  const cleanProtocol = protocol?.split(",")[0]?.trim() ?? (cleanHost?.startsWith("localhost") ? "http" : "https");

  try {
    return new URL(`${cleanProtocol}://${cleanHost}`).origin;
  } catch {
    return fallback;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const baseUrl = getBaseUrl(
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host"),
    requestHeaders.get("x-forwarded-proto"),
  );
  const imageUrl = `${baseUrl}/og.png`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      images: [
        {
          url: imageUrl,
          width: 1792,
          height: 1024,
          alt: "Bernie Fernando portfolio preview card",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
