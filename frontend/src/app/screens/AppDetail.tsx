import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { App, fetchApps } from "../data/api";
import AppCard from "../components/AppCard";

export default function AppDetail() {
  const { id } = useParams<{ id: string }>();
  const [app, setApp] = useState<App | null>(null);
  const [relatedApps, setRelatedApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      const apps = await fetchApps();
      const foundApp = apps.find(a => a.id === id) || null;
      setApp(foundApp);

      if (foundApp) {
        const related = apps
          .filter(a => a.category === foundApp.category && a.id !== foundApp.id)
          .slice(0, 3);
        setRelatedApps(related);
      }
      setLoading(false);
    };
    loadApp();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-6xl mb-4">❌</div>
        <h2 className="mb-2">App Not Found</h2>
        <Link to="/" className="text-primary hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center gap-3 p-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ←
          </Link>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* App Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-7xl">{app.icon}</div>
          <div>
            <h1 className="mb-2">{app.name}</h1>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
              {app.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 rounded-xl bg-card">
          <h3 className="mb-2">About</h3>
          <p className="text-muted-foreground leading-relaxed">
            {app.fullDescription || app.description}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Open in Pi Browser
          </button>
          <button className="w-full px-6 py-3 rounded-xl bg-card hover:bg-secondary transition-colors border border-border">
            🔖 Bookmark
          </button>
        </div>

        {/* Related Apps */}
        {relatedApps.length > 0 && (
          <section>
            <h2 className="mb-3">Related Apps</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {relatedApps.map(relatedApp => (
                <div key={relatedApp.id} className="min-w-[160px]">
                  <AppCard app={relatedApp} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
