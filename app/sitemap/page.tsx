import fs from "fs";
import path from "path";

export default function SitemapPage() {
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");

  // Extract URLs manually from <loc> tags
  const urls = sitemapContent.match(/<loc>(.*?)<\/loc>/g)?.map((loc) => loc.replace(/<\/?loc>/g, ""));

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc pl-6">
        {urls?.map((url, index) => (
          <li key={index} className="mb-2">
            <a href={url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        )) || <p>No URLs found in sitemap.</p>}
      </ul>
    </div>
  );
}
