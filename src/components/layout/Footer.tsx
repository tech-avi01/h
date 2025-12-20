import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted">
       <div className="container flex h-14 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Lifeline Alert. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
