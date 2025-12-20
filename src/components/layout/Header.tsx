import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Siren } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Siren className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg inline-block">Lifeline Alert</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/admin"
          >
            Admin
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild>
              <Link href="/login">Login / Sign Up</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
