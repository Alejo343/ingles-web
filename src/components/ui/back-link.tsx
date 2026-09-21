import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackLink({
  href,
  children = "Volver",
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      nativeButton={false}
      render={
        <Link href={href} className="gap-1.5">
          <ArrowLeft className="size-4" />
          {children}
        </Link>
      }
    />
  );
}
