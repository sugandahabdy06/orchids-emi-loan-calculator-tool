import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calctoolsfinance.com";
  const now = new Date();

  return [
    // ===== MAIN PAGES =====
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-emi-works`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ===== CALCULATORS =====
    {
      url: `${baseUrl}/calculators/emi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/personal-loan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/calculators/home-loan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // ===== LEGAL PAGES (ADSENSE REQUIRED) =====
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
