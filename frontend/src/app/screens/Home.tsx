import { useState, useEffect } from "react";
import { Link } from "react-router";
import { App, categories, fetchApps } from "../data/api";
import AppCard from "../components/AppCard";
import CategoryChip from "../components/CategoryChip";

export default function Home() {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const loadApps = async () => {
      const data = await fetchApps();
      setApps(data);
    };
    loadApps();
  }, []);

  const filteredApps = selectedCategory === "All"
    ? apps
    : apps.filter(app => app.category === selectedCategory);

  const trendingApps = apps.filter(app => app.trending);

  return (
    <div className="pb-8">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-primary">EasyBuy - Door to Pi's Ecosystem</h1>
          {/* <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div> */}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <Link to="/search" className="block">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-input-background text-muted-foreground">
            <span>🔍</span>
            <span>Search apps...</span>
          </div>
        </Link>

        {/* AI Prompt Box */}
        {/* <Link to="/chat" className="block">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <span>🤖</span>
            <span>Ask AI: "Find earning apps"</span>
          </div>
        </Link> */}

        {/* Categories */}
        <section>
          <h2 className="mb-3">Categories</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {categories.map(category => (
              <CategoryChip
                key={category}
                label={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </section>

        {/* App Grid */}
        <section>
          <h2 className="mb-3">All Apps</h2>
          <div className="grid grid-cols-2 gap-3">
            {filteredApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <h2 className="mb-3">Trending</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {trendingApps.map(app => (
              <div key={app.id} className="min-w-[160px]">
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
