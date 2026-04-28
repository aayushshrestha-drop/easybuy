import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router";
import { App, categories, fetchApps } from "../data/api";
import AppCard from "../components/AppCard";
import CategoryChip from "../components/CategoryChip";

export default function Search() {
  const [apps, setApps] = useState<App[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"trending" | "name">("trending");

  useEffect(() => {
    const loadApps = async () => {
      const data = await fetchApps();
      setApps(data);
    };
    loadApps();
  }, []);

  const filteredApps = useMemo(() => {
    let filtered = apps.filter(app =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter(app => app.category === selectedCategory);
    }

    if (sortBy === "trending") {
      filtered = [...filtered].sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    } else {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, apps]);

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              ←
            </Link>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps..."
              className="flex-1 px-4 py-2 rounded-xl bg-input-background border border-border focus:border-primary outline-none"
              autoFocus
            />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map(category => (
              <CategoryChip
                key={category}
                label={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {filteredApps.length} results
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "trending" | "name")}
              className="px-3 py-1 rounded-lg bg-card border border-border text-sm outline-none focus:border-primary"
            >
              <option value="trending">Trending</option>
              <option value="name">A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="p-4 space-y-2">
        {filteredApps.length > 0 ? (
          filteredApps.map(app => (
            <AppCard key={app.id} app={app} variant="row" />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <div className="text-4xl mb-2">🔍</div>
            <p>No apps found</p>
          </div>
        )}
      </div>
    </div>
  );
}
