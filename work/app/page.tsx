import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { FeatureCards } from "@/components/feature-cards";
import { MotionSection } from "@/components/motion-section";
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker";
import { ScrollStrip } from "@/components/scroll-strip";
import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    title: "Power that disappears",
    text: "Backup systems and operational discipline designed so work does not stop when the grid does."
  },
  {
    title: "Internet built for teams",
    text: "Enterprise-grade connectivity for founders, remote operators, creatives, and service businesses."
  },
  {
    title: "A serious community",
    text: "A curated workspace for people building outcomes, not just looking for a desk."
  }
];

const benefits = [
  "Work from a credible business address",
  "Meet operators, founders, and creative professionals",
  "Get first access to founding-member pricing",
  "Choose flexible plans as your work changes"
];

const pricing = [
  {
    name: "Hot Desk",
    description: "Flexible daily and monthly access for independent professionals.",
    price: "Early access"
  },
  {
    name: "Dedicated Desk",
    description: "A reliable base for focused work, client calls, and consistent routines.",
    price: "Waitlist first"
  },
  {
    name: "Private Office",
    description: "A polished, secure workspace for teams that need room to grow.",
    price: "Limited slots"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-verdant-100">
      <ScrollDepthTracker />
      <header className="sticky top-0 z-40 border-b border-verdant-800/10 bg-verdant-100/90 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a className="font-serif text-2xl font-semibold text-verdant-700" href="#hero">
            VERDUX
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-verdant-950 md:flex">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <CtaButton className="min-h-10 px-5" eventLabel="nav_join_waitlist">
            Join Waitlist
          </CtaButton>
        </nav>
      </header>

      <MotionSection
        className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 lg:pb-24"
        id="hero"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
              Premium coworking in Port Harcourt
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] text-verdant-700 sm:text-6xl lg:text-7xl">
              VERDUX
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-verdant-950/80">
              A premium coworking space and startup hub built around reliable
              power, enterprise internet, and a serious community of founders,
              operators, and creatives.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton eventLabel="hero_join_waitlist">Get Early Access</CtaButton>
              <CtaButton eventLabel="hero_reserve_spot" variant="light">
                Reserve Spot
              </CtaButton>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-[28px] bg-verdant-950 shadow-premium">
            <img
              alt="Modern coworking lounge with desks, plants, and warm light"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-verdant-950 via-verdant-950/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="max-w-sm font-serif text-3xl leading-tight">
                Infrastructure you can stop thinking about.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
                <span>Power</span>
                <span>Internet</span>
                <span>Community</span>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <ScrollStrip />

      <MotionSection className="px-5 py-16 sm:px-8 lg:py-24" id="features">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
              Built for serious work
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-verdant-700 sm:text-5xl">
              The essentials, engineered properly.
            </h2>
          </div>
          <FeatureCards features={features} />
        </div>
      </MotionSection>

      <MotionSection className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
              Why join early
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-verdant-700 sm:text-5xl">
              Be first into the room before it opens.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                className="rounded-[20px] border border-line bg-verdant-50 p-5 text-sm font-semibold leading-6 text-verdant-950 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                key={benefit}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-16 sm:px-8 lg:py-24" id="pricing">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
                Memberships
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-verdant-700 sm:text-5xl">
                Flexible plans for focused people.
              </h2>
            </div>
            <CtaButton eventLabel="pricing_start_now">Start Now</CtaButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricing.map((plan) => (
              <article
                className="rounded-[20px] border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                key={plan.name}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
                  {plan.price}
                </p>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-verdant-950">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {plan.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
              Waitlist
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-verdant-700 sm:text-5xl">
              Tell us where to send your invite.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-600">
              It takes under a minute. Waitlist members will receive launch
              dates, early-access invites, and founding-member pricing first.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-16 sm:px-8 lg:py-24" id="faq">
        <FaqAccordion />
      </MotionSection>

      <footer className="border-t border-verdant-800/15 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a
            className="font-serif text-3xl font-semibold text-verdant-700"
            href="#hero"
            aria-label="Scroll back to VERDUX hero section"
          >
            VERDUX
          </a>
          <p className="max-w-md text-sm leading-6 text-neutral-600">
            Premium coworking, reliable infrastructure, and a community for
            serious builders in Port Harcourt.
          </p>
        </div>
      </footer>
    </main>
  );
}
