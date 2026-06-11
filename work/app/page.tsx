import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { MotionSection } from "@/components/motion-section";
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker";
import { ScrollStrip } from "@/components/scroll-strip";
import { WaitlistForm } from "@/components/waitlist-form";

const missionPillars = [
  ["Reliable Power", "24/7 backup-ready infrastructure"],
  ["Fast Internet", "Enterprise-grade connectivity"],
  ["Pro Workspace", "Designed for focused output"],
  ["Growth Community", "Builders, operators, and creatives"]
];

const problems = [
  [
    "01",
    "Power that quits at the worst moment",
    "Generators, fuel runs, a dead laptop on the day that matters most."
  ],
  [
    "02",
    "Internet you can't trust on a call",
    "Buffering pitches. Dropped clients. Lost revenue you can't get back."
  ],
  [
    "03",
    "Working alone, by default",
    "No peers, no momentum, no one to bounce the hard decisions off."
  ],
  [
    "04",
    "A home address on your invoices",
    "Credibility leaks the moment a serious client asks where you work."
  ],
  [
    "cta",
    "Join the Waitlist",
    "Get early access to a workspace built for serious builders."
  ],
  [
    "05",
    "No access to people who've done it",
    "Mentors, capital, and community exist, just not where you can reach them."
  ]
];

const solutionItems = [
  "Reliable Backup Power",
  "High-Speed Internet",
  "Premium Desks",
  "Meeting Rooms",
  "Community Events",
  "Business Credibility",
  "Founder Network",
  "Flexible Access"
];

const workspaceCards = [
  [
    "Hot Desk",
    "Drop in, plug in, and work from a professional environment without carrying the overhead."
  ],
  [
    "Dedicated Desk",
    "Keep your rhythm with a consistent desk, reliable infrastructure, and a serious work atmosphere."
  ],
  [
    "Private Office",
    "A polished base for teams that need focus, privacy, client confidence, and room to grow."
  ]
];

const communityCards = [
  "Founder breakfasts and operator meetups",
  "Private launch mixers for waitlist members",
  "Access to mentors, partners, and useful introductions",
  "A credible base for digital and service businesses"
];

const waitlistBenefits = [
  "Priority desk selection",
  "Discounted founding rates",
  "Invites to private founder events",
  "Invites to pre-launch mixers"
];

function SectionHeader({
  eyebrow,
  title,
  body,
  centered = true,
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-[902px] text-center" : "max-w-[760px]"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          isDark ? "text-verdant-300" : "text-verdant-800"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-[38px] font-semibold leading-[1.12] sm:text-5xl ${
          isDark ? "text-white" : "text-verdant-700"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-6 text-base leading-7 sm:text-lg ${
            isDark ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

function MiniIcon() {
  return (
    <span className="grid h-[73px] w-[73px] place-items-center rounded-full bg-verdant-100 text-2xl text-verdant-700 ring-1 ring-verdant-800/10">
      +
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-verdant-950">
      <ScrollDepthTracker />
      <header className="sticky top-0 z-40 h-[88px] border-b border-verdant-800/10 bg-white/90 backdrop-blur-xl lg:h-[108px]">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 lg:px-8"
        >
          <a
            className="font-serif text-[28px] font-semibold leading-none text-verdant-700"
            href="#hero"
          >
            VERDUX
          </a>
          <div className="hidden items-center gap-10 text-sm font-medium text-neutral-600 lg:flex">
            <a href="#mission">Mission</a>
            <a href="#workspace">Workspace</a>
            <a href="#community">Community</a>
            <a href="#pricing">Pricing</a>
          </div>
          <CtaButton className="min-h-12 px-7" eventLabel="nav_join_waitlist">
            Join Waitlist
          </CtaButton>
        </nav>
      </header>

      <MotionSection className="px-5 py-14 lg:px-8 lg:py-24" id="hero">
        <div className="mx-auto grid max-w-[1232px] items-center gap-12 lg:grid-cols-[592px_552px] lg:gap-20">
          <div>
            <div className="inline-flex min-h-10 items-center gap-3 rounded-full border border-verdant-800/10 bg-verdant-100 px-5 text-sm text-verdant-800">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-verdant-700 text-[11px] text-white">
                +
              </span>
              Be among the first to access Port Harcourt's next workspace.
            </div>
            <h1 className="mt-6 font-serif text-[54px] font-semibold leading-[0.98] text-verdant-700 sm:text-[72px] lg:text-[92px]">
              Productivity infrastructure for ambitious builders
            </h1>
            <p className="mt-7 max-w-[592px] text-lg leading-8 text-neutral-600">
              More than just an office space. VERDUX is a premium coworking
              space and startup hub built around reliable power, enterprise
              internet, and a serious community of founders, operators, and
              creatives.
            </p>
            <form className="mt-12 flex max-w-[568px] flex-col overflow-hidden rounded-full border border-line bg-white shadow-premium sm:flex-row">
              <label className="sr-only" htmlFor="hero-email">
                Email address
              </label>
              <input
                className="min-h-[62px] flex-1 px-6 text-sm outline-none"
                id="hero-email"
                placeholder="Enter your email address"
                type="email"
              />
              <CtaButton
                className="min-h-[62px] rounded-none px-8 sm:rounded-l-none sm:rounded-r-full"
                eventLabel="hero_email_join"
              >
                Join the Waitlist
              </CtaButton>
            </form>
          </div>

          <div className="relative h-[560px] overflow-hidden rounded-[32px] bg-verdant-950 shadow-premium lg:h-[714px]">
            <img
              alt="Premium coworking space with warm desks and greenery"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1400&q=85"
            />
            <div className="absolute right-0 top-[180px] rounded-l-[20px] bg-white px-4 py-3 shadow-premium">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-verdant-100 text-verdant-700">
                  Wi
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-verdant-950">
                    99.9% Uptime
                  </p>
                  <p className="text-xs text-neutral-600">Power & Internet</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 rounded-tr-[20px] bg-white px-4 py-3 shadow-premium">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-verdant-100 text-verdant-700">
                  P
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-verdant-950">
                    Power that never fails
                  </p>
                  <p className="text-xs text-neutral-600">Tri-redundant backup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <ScrollStrip />

      <MotionSection className="px-5 py-20 lg:px-8 lg:py-24" id="mission">
        <div className="mx-auto max-w-[1172px]">
          <SectionHeader
            eyebrow="Our mission"
            title="Build without fighting your environment."
            body="VERDUX exists to remove the invisible tax that unstable infrastructure places on ambitious professionals in Port Harcourt."
          />
          <div className="mt-12 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map(([title, subtitle]) => (
              <article
                className="transition duration-300 hover:-translate-y-2"
                key={title}
              >
                <div className="flex justify-center">
                  <MiniIcon />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-verdant-700">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-verdant-100 px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1232px]">
          <SectionHeader
            eyebrow="The problem"
            title="Building in Port Harcourt shouldn't be this hard."
            body="We know the struggle. You lose hours of productivity to unstable power, weak internet, isolation, and workspaces that do not help you look credible."
          />
          <div className="mt-12 grid overflow-hidden rounded-[22px] border border-line bg-white md:grid-cols-2 lg:grid-cols-3">
            {problems.map(([number, title, body]) =>
              number === "cta" ? (
                <div
                  className="grid min-h-[240px] place-items-center border-b border-line p-8 lg:border-r"
                  key={title}
                >
                  <CtaButton className="min-h-[70px] px-10 text-base" eventLabel="problem_join">
                    Join the Waitlist
                  </CtaButton>
                </div>
              ) : (
                <article
                  className="min-h-[240px] border-b border-line p-8 transition duration-300 hover:-translate-y-2 hover:bg-verdant-50 hover:shadow-2xl lg:border-r"
                  key={number}
                >
                  <p className="text-sm font-semibold text-verdant-800">{number}</p>
                  <h3 className="mt-3 font-serif text-[28px] font-semibold leading-tight text-verdant-950">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-6 text-neutral-600">{body}</p>
                </article>
              )
            )}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1232px]">
          <SectionHeader
            eyebrow="The solution"
            title="Everything you need to do your best work, in one place."
            body="VERDUX combines reliable infrastructure, professional space, and a curated community so your energy goes into building."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {solutionItems.map((item) => (
              <div
                className="grid min-h-[167px] place-items-center bg-white p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                key={item}
              >
                <MiniIcon />
                <h3 className="mt-4 font-serif text-xl font-semibold text-verdant-700">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-verdant-950 px-5 py-20 text-white lg:px-8 lg:py-24" id="workspace">
        <div className="mx-auto max-w-[1232px]">
          <SectionHeader
            centered={false}
            tone="dark"
            eyebrow="Workspace"
            title="Choose the space that matches your stage."
            body="From flexible desks to private offices, VERDUX is designed for the day-to-day realities of people building serious businesses."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {workspaceCards.map(([title, body]) => (
              <article
                className="rounded-[22px] border border-white/15 bg-white/[0.08] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12] hover:shadow-2xl"
                key={title}
              >
                <h3 className="font-serif text-3xl font-semibold">{title}</h3>
                <p className="mt-5 text-sm leading-6 text-white/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 lg:px-8 lg:py-24" id="community">
        <div className="mx-auto grid max-w-[1232px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            centered={false}
            eyebrow="Community"
            title="A room full of people moving with intent."
            body="The goal is not attendance. It is momentum, shared standards, and access to people who understand what building actually takes."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {communityCards.map((card) => (
              <div
                className="rounded-[22px] border border-line bg-verdant-100 p-6 font-serif text-2xl leading-tight text-verdant-700 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                key={card}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-verdant-100 px-5 py-20 lg:px-8 lg:py-24" id="pricing">
        <div className="mx-auto max-w-[1232px]">
          <SectionHeader
            eyebrow="Pricing"
            title="Founding-member plans will be shared with the waitlist first."
            body="Join now to get priority access to Hot Desk, Dedicated Desk, and Private Office membership options before public launch."
          />
          <div className="mt-10 flex justify-center">
            <CtaButton className="min-h-[70px] px-10 text-base" eventLabel="pricing_start_now">
              Start Now
            </CtaButton>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1033px] overflow-hidden rounded-[28px] bg-verdant-100 lg:grid-cols-[380px_1fr]">
          <div className="p-8 lg:p-12">
            <h2 className="font-serif text-[38px] font-semibold leading-tight text-verdant-700">
              Be first in line when VERDUX opens.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              Founding members get early updates, priority access, and first
              choice when our desks and offices open.
            </p>
            <ul className="mt-8 space-y-4">
              {waitlistBenefits.map((benefit) => (
                <li className="flex items-start gap-3 text-sm text-verdant-950" key={benefit}>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-verdant-300 text-xs">
                    OK
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-sm text-neutral-600">
              Join 20+ professionals already on the list.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[928px] border-y border-verdant-800/20 py-16 text-center">
          <div className="mx-auto grid h-[73px] w-[73px] place-items-center rounded-full bg-verdant-100 text-2xl text-verdant-700">
            +
          </div>
          <h2 className="mt-8 font-serif text-[36px] font-semibold leading-tight text-verdant-700 sm:text-[52px]">
            "The idea for VERDUX came from experiencing firsthand how much
            talent Port Harcourt loses to unreliable infrastructure."
          </h2>
          <div className="mx-auto mt-9 max-w-[927px] space-y-5 text-lg leading-8 text-neutral-600">
            <p>
              We saw brilliant professionals losing hours of productive work to
              problems that should have been solved for them already.
            </p>
            <p>
              VERDUX isn't just an office space. It's a long-term bet on the
              founders, creatives, and operators building the next economy from
              Port Harcourt.
            </p>
          </div>
          <p className="mt-10 font-serif text-2xl text-verdant-700">
            - The VERDUX Founding Team
          </p>
        </div>
      </MotionSection>

      <MotionSection className="bg-verdant-100 px-5 py-20 lg:px-8 lg:py-24" id="faq">
        <FaqAccordion />
      </MotionSection>

      <MotionSection className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[960px] rounded-[28px] bg-verdant-950 p-8 text-white shadow-premium lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-verdant-300">
                Partners & Investors
              </p>
              <h2 className="mt-4 font-serif text-[36px] font-semibold leading-tight sm:text-[46px]">
                Interested in partnering with VERDUX?
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                We're building productivity infrastructure for the next economy.
                Talk to us about partnerships, community support, or investment.
              </p>
            </div>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-verdant-300 px-7 text-sm font-semibold text-verdant-950 transition duration-300 hover:scale-[1.03] hover:bg-citron"
              href="mailto:hello@verdux.co"
            >
              Contact Us
            </a>
          </div>
        </div>
      </MotionSection>

      <footer className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1232px]">
          <div className="grid gap-12 border-b border-verdant-800/15 pb-14 lg:grid-cols-[600px_1fr_1fr]">
            <div>
              <a
                className="font-serif text-[28px] font-semibold text-verdant-700"
                href="#hero"
                aria-label="Scroll back to VERDUX hero section"
              >
                VERDUX
              </a>
              <p className="mt-7 max-w-[440px] text-lg leading-8 text-neutral-600">
                Productivity infrastructure for Port Harcourt's next generation
                of founders, operators, creatives, and ambitious professionals.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-verdant-700">
                Explore
              </h3>
              <div className="mt-6 grid gap-4 text-neutral-600">
                <a href="#mission">Our Mission</a>
                <a href="#workspace">Workspace</a>
                <a href="#community">Community</a>
                <a href="#pricing">Pricing</a>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-verdant-700">
                Connect
              </h3>
              <div className="mt-6 grid gap-4 text-neutral-600">
                <p>Port Harcourt, Nigeria</p>
                <a href="mailto:hello@verdux.co">hello@verdux.co</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 pt-9 text-sm text-neutral-600 sm:flex-row">
            <p>(c) 2026 VERDUX Workspace. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://x.com">X</a>
              <a href="https://linkedin.com">LinkedIn</a>
              <a href="https://instagram.com">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
