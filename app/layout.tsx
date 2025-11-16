import "./global.css";
import { BoxIcon } from "lucide-react";
import { Navbar } from "@/components/geistdocs/navbar";
import { GeistdocsProvider } from "@/components/geistdocs/provider";
import { mono, sans } from "@/lib/geistdocs/fonts";
import { cn } from "@/lib/utils";

const Logo = () => (
  <>
    <span className="hidden font-semibold text-xl tracking-tight sm:block">
      components.build
    </span>
    <span className="font-semibold text-xl tracking-tight sm:hidden">
      <BoxIcon className="size-5" />
    </span>
  </>
);

const links: { label: string; href: string }[] = [];

const suggestions = [
  "What is composability?",
  "How do I make a component accessible?",
  "What is the `asChild` prop?",
  "Explain polymorphism.",
];

const Layout = ({ children }: LayoutProps<"/">) => (
  <html
    className={cn(sans.variable, mono.variable, "scroll-smooth antialiased")}
    lang="en"
    suppressHydrationWarning
  >
    <body>
      <GeistdocsProvider>
        <Navbar items={links} suggestions={suggestions}>
          <Logo />
        </Navbar>
        {children}
      </GeistdocsProvider>
    </body>
  </html>
);

export default Layout;
