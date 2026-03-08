import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

export default function ThemeExample() {
  return (
    <main className="min-h-screen bg-neutral-10 p-xl">
      <div className="max-w-6xl mx-auto space-y-3xl">
        {/* Typography Section */}
        <section className="space-y-lg">
          <h1 className="text-h1 font-heading text-neutral-100">QuickHire Theme</h1>
          <h2 className="text-h2 font-heading text-neutral-100">
            Getting Started with the Design System
          </h2>
          <p className="text-body-lg font-body text-neutral-80 max-w-2xl">
            This is your comprehensive design system for the QuickHire job platform. Use these
            components and utilities to build a consistent and beautiful UI.
          </p>
        </section>

        {/* Colors Section */}
        <section className="space-y-lg">
          <h3 className="text-h3 font-heading text-neutral-100">Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            <div className="space-y-sm">
              <div className="h-24 rounded-md bg-primary shadow-lg"></div>
              <p className="text-sm font-ui text-neutral-80">Primary</p>
              <p className="text-xs font-ui text-neutral-60">#4640DE</p>
            </div>
            <div className="space-y-sm">
              <div className="h-24 rounded-md bg-accent-green shadow-lg"></div>
              <p className="text-sm font-ui text-neutral-80">Success</p>
              <p className="text-xs font-ui text-neutral-60">#56CDAD</p>
            </div>
            <div className="space-y-sm">
              <div className="h-24 rounded-md bg-accent-yellow shadow-lg"></div>
              <p className="text-sm font-ui text-neutral-80">Warning</p>
              <p className="text-xs font-ui text-neutral-60">#FFB836</p>
            </div>
            <div className="space-y-sm">
              <div className="h-24 rounded-md bg-accent-red shadow-lg"></div>
              <p className="text-sm font-ui text-neutral-80">Error</p>
              <p className="text-xs font-ui text-neutral-60">#FF6550</p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-lg">
          <h3 className="text-h3 font-heading text-neutral-100">Buttons</h3>
          <Card>
            <div className="space-y-lg">
              <div className="space-y-md">
                <p className="text-body font-body text-neutral-80">Primary Buttons</p>
                <div className="flex flex-wrap gap-md">
                  <Button variant="primary" size="small">
                    Small
                  </Button>
                  <Button variant="primary" size="medium">
                    Medium
                  </Button>
                  <Button variant="primary" size="large">
                    Large
                  </Button>
                </div>
              </div>

              <div className="space-y-md">
                <p className="text-body font-body text-neutral-80">Secondary Buttons</p>
                <div className="flex flex-wrap gap-md">
                  <Button variant="secondary" size="small">
                    Small
                  </Button>
                  <Button variant="secondary" size="medium">
                    Medium
                  </Button>
                  <Button variant="secondary" size="large">
                    Large
                  </Button>
                </div>
              </div>

              <div className="space-y-md">
                <p className="text-body font-body text-neutral-80">Text Buttons</p>
                <div className="flex flex-wrap gap-md">
                  <Button variant="text" size="small">
                    Small
                  </Button>
                  <Button variant="text" size="medium">
                    Medium
                  </Button>
                  <Button variant="text" size="large">
                    Large
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="space-y-lg">
          <h3 className="text-h3 font-heading text-neutral-100">Badges</h3>
          <Card>
            <div className="space-y-lg">
              <div className="space-y-md">
                <p className="text-body font-body text-neutral-80">Filled Variants</p>
                <div className="flex flex-wrap gap-md">
                  <Badge color="green">Full-Time</Badge>
                  <Badge color="yellow">Part-Time</Badge>
                  <Badge color="red">Urgent</Badge>
                  <Badge color="blue">Remote</Badge>
                  <Badge color="purple">Design</Badge>
                </div>
              </div>

              <div className="space-y-md">
                <p className="text-body font-body text-neutral-80">Outline Variants</p>
                <div className="flex flex-wrap gap-md">
                  <Badge color="green" variant="outline">
                    Full-Time
                  </Badge>
                  <Badge color="yellow" variant="outline">
                    Part-Time
                  </Badge>
                  <Badge color="red" variant="outline">
                    Urgent
                  </Badge>
                  <Badge color="blue" variant="outline">
                    Remote
                  </Badge>
                  <Badge color="purple" variant="outline">
                    Design
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="space-y-lg">
          <h3 className="text-h3 font-heading text-neutral-100">Cards</h3>
          <div className="grid md:grid-cols-2 gap-lg">
            <Card hover>
              <div className="space-y-md">
                <h4 className="text-h5 font-heading text-neutral-100">Job Card</h4>
                <p className="text-body font-body text-neutral-80">UI/UX Designer</p>
                <p className="text-body-sm font-body text-neutral-60">
                  Acme Corp • San Francisco, CA
                </p>
                <div className="flex gap-sm pt-md">
                  <Badge color="green">Full-Time</Badge>
                  <Badge color="purple" variant="outline">
                    Design
                  </Badge>
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="space-y-md">
                <h4 className="text-h5 font-heading text-neutral-100">Company Card</h4>
                <p className="text-body font-body text-neutral-80">Tech Startup</p>
                <p className="text-body-sm font-body text-neutral-60">
                  150+ job openings • Growing fast
                </p>
                <div className="pt-md">
                  <Button variant="primary" size="medium" className="w-full">
                    View Company
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="space-y-lg">
          <h3 className="text-h3 font-heading text-neutral-100">Spacing System</h3>
          <Card>
            <div className="space-y-lg">
              <div className="flex items-center gap-md">
                <div className="w-xs h-xs bg-primary rounded"></div>
                <p className="text-body font-ui text-neutral-80">XS (4px)</p>
              </div>
              <div className="flex items-center gap-md">
                <div className="w-sm h-sm bg-primary rounded"></div>
                <p className="text-body font-ui text-neutral-80">SM (8px)</p>
              </div>
              <div className="flex items-center gap-md">
                <div className="w-md h-md bg-primary rounded"></div>
                <p className="text-body font-ui text-neutral-80">MD (16px)</p>
              </div>
              <div className="flex items-center gap-md">
                <div className="w-lg h-lg bg-primary rounded"></div>
                <p className="text-body font-ui text-neutral-80">LG (24px)</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
