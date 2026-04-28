interface CategoryChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryChip({ label, active, onClick }: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-card text-foreground hover:bg-secondary"
      }`}
    >
      {label}
    </button>
  );
}
