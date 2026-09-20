import { Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function StreakBadge({ streak }: { streak: number }) {
  return (
    <Badge variant="secondary" className="gap-1">
      <Flame className="size-3.5 text-orange-500" />
      {streak} {streak === 1 ? "día" : "días"}
    </Badge>
  );
}
