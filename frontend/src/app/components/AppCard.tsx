import { Link } from "react-router";
import { App } from "../data/api";

interface AppCardProps {
  app: App;
  variant?: "grid" | "row";
}

export default function AppCard({ app, variant = "grid" }: AppCardProps) {
  if (variant === "row") {
    return (
      <Link
        to={`/app/${app.id}`}
        className="flex items-center gap-3 p-3 rounded-xl bg-card hover:bg-secondary transition-colors"
      >
        <div className="text-3xl">{app.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="truncate">{app.name}</h3>
          <p className="text-muted-foreground truncate text-sm">{app.description}</p>
        </div>
        <div className="text-muted-foreground">→</div>
      </Link>
    );
  }

  return (
    <Link
      to={`/app/${app.id}`}
      className="block p-4 rounded-xl bg-card hover:bg-secondary transition-colors"
    >
      <div className="text-4xl mb-3">{app.icon}</div>
      <h3 className="mb-1 truncate">{app.name}</h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{app.description}</p>
      <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">
        {app.category}
      </span>
    </Link>
  );
}
