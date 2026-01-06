import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://familyclinic.clinic";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insurance-and-billing`,
      lastModified: new Date(),
    },

    // SERVICES (dynamic)
    {
      url: `${baseUrl}/services/annual-physicals`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/chronic-care-management`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/laboratory-testing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/wellness-programs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/telemedicine`,
      lastModified: new Date(),
    },
  ];
}
