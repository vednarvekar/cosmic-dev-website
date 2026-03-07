import { Hammer, Rocket } from "lucide-react";

type UnderDevelopmentPageProps = {
  projectName?: string;
};

const UnderDevelopmentPage = ({
  projectName = "This project",
}: UnderDevelopmentPageProps) => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
          <p className="ml-4 text-sm text-muted-foreground font-mono truncate">
            ~/projects/{projectName.toLowerCase().replace(/\s+/g, "-")}
          </p>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-full bg-syntax-orange/20 border border-syntax-orange/40 flex items-center justify-center">
              <Hammer className="h-5 w-5 text-syntax-orange" />
            </div>
            <h1 className="font-mono text-2xl md:text-3xl font-bold">
              Under Development
            </h1>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            <span className="font-semibold text-foreground">{projectName}</span>{" "}
            is currently in progress.
          </p>

          <div className="rounded-lg border border-terminal-border bg-secondary/40 p-4 md:p-5">
            <p className="font-mono text-sm md:text-base text-syntax-comment">
              // Visit when completed.
            </p>
          </div>

          <div className="mt-7 flex items-center gap-2 text-syntax-green font-mono text-sm">
            <Rocket className="h-4 w-4" />
            <span>Work in progress. New updates coming soon.</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UnderDevelopmentPage;
