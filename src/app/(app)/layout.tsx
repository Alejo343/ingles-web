import Link from "next/link";
import { BookOpen, LayoutDashboard, LibraryBig, RotateCcw } from "lucide-react";
import { requireCurrentUser } from "@/lib/auth/current-user";
import { StreakBadge } from "@/components/progress/streak-badge";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Inicio", icon: LayoutDashboard },
  { href: "/levels", label: "Niveles", icon: LibraryBig },
  { href: "/review", label: "Repaso", icon: RotateCcw },
  { href: "/progress", label: "Progreso", icon: BookOpen },
];

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireCurrentUser();

  return (
    <div className="min-h-svh bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3">
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
              <Button
                key={href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={
                  <Link href={href} className="gap-1.5">
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </Link>
                }
              />
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <StreakBadge streak={user.currentStreak} />
            <form action="/api/auth/logout" method="post">
              <Button variant="outline" size="sm" type="submit">
                Salir
              </Button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
    </div>
  );
}
