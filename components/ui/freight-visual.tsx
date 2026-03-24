import { useId } from "react";

import { cn } from "@/lib/utils";

type FreightVisualVariant = "hero" | "stack" | "route";

type FreightVisualProps = {
  variant?: FreightVisualVariant;
  className?: string;
  media?: React.ReactNode;
  mediaClassName?: string;
  decorative?: boolean;
};

const content = {
  hero: {
    label: "Operations View",
    title: "Live movement discipline",
    points: ["Route alignment", "Client updates", "Execution first"]
  },
  stack: {
    label: "Service Stack",
    title: "Standards that stay consistent",
    points: ["Preparedness", "Accountability", "Repeatable service"]
  },
  route: {
    label: "Network Focus",
    title: "Structured logistics support",
    points: ["Business routes", "Priority timing", "Trusted coverage"]
  }
} as const;

const palettes = {
  hero: {
    skyTop: "#17110D",
    skyBottom: "#090705",
    bodyStops: ["#CFC7BA", "#6C4A2F", "#0F0B09"],
    cabStops: ["#F3EEE4", "#B89A73", "#2A1A12"],
    glassStops: ["rgba(243,238,228,0.82)", "rgba(108,74,47,0.46)", "rgba(15,11,9,0.92)"],
    trimStart: "#F3EEE4",
    trimEnd: "#B89A73",
    glowColor: "#B89A73"
  },
  stack: {
    skyTop: "#1B140F",
    skyBottom: "#0D0907",
    bodyStops: ["#F3EEE4", "#B89A73", "#2A1A12"],
    cabStops: ["#F3EEE4", "#CFC7BA", "#2A1A12"],
    glassStops: ["rgba(243,238,228,0.8)", "rgba(184,154,115,0.42)", "rgba(15,11,9,0.9)"],
    trimStart: "#F3EEE4",
    trimEnd: "#CFC7BA",
    glowColor: "#F3EEE4"
  },
  route: {
    skyTop: "#14100D",
    skyBottom: "#090705",
    bodyStops: ["#B89A73", "#6C4A2F", "#0F0B09"],
    cabStops: ["#CFC7BA", "#B89A73", "#2A1A12"],
    glassStops: ["rgba(243,238,228,0.74)", "rgba(108,74,47,0.4)", "rgba(15,11,9,0.9)"],
    trimStart: "#CFC7BA",
    trimEnd: "#B89A73",
    glowColor: "#B89A73"
  }
} as const satisfies Record<FreightVisualVariant, {
  skyTop: string;
  skyBottom: string;
  bodyStops: [string, string, string];
  cabStops: [string, string, string];
  glassStops: [string, string, string];
  trimStart: string;
  trimEnd: string;
  glowColor: string;
}>;

function DefaultFreightScene({ variant = "hero" }: { variant?: FreightVisualVariant }) {
  const sceneId = useId().replace(/:/g, "");
  const palette = palettes[variant];

  const ids = {
    sky: `${sceneId}-sky`,
    horizon: `${sceneId}-horizon`,
    road: `${sceneId}-road`,
    body: `${sceneId}-body`,
    cab: `${sceneId}-cab`,
    glass: `${sceneId}-glass`,
    trim: `${sceneId}-trim`,
    glow: `${sceneId}-glow`,
    beam: `${sceneId}-beam`,
    blur: `${sceneId}-blur`,
    softBlur: `${sceneId}-soft-blur`,
    shadow: `${sceneId}-shadow`
  };

  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,154,115,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(108,74,47,0.18),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(243,238,228,0.03),transparent_30%,rgba(15,11,9,0.2)_100%)]" />

      <svg
        viewBox="0 0 860 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={ids.sky} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={palette.skyTop} />
            <stop offset="60%" stopColor={palette.skyBottom} />
            <stop offset="100%" stopColor="#050403" />
          </linearGradient>
          <linearGradient id={ids.horizon} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(243,238,228,0.02)" />
            <stop offset="35%" stopColor="rgba(184,154,115,0.16)" />
            <stop offset="100%" stopColor="rgba(15,11,9,0)" />
          </linearGradient>
          <linearGradient id={ids.road} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(243,238,228,0.04)" />
            <stop offset="28%" stopColor="rgba(108,74,47,0.18)" />
            <stop offset="100%" stopColor="rgba(5,4,3,0.98)" />
          </linearGradient>
          <linearGradient id={ids.body} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.bodyStops[0]} />
            <stop offset="42%" stopColor={palette.bodyStops[1]} />
            <stop offset="100%" stopColor={palette.bodyStops[2]} />
          </linearGradient>
          <linearGradient id={ids.cab} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.cabStops[0]} />
            <stop offset="48%" stopColor={palette.cabStops[1]} />
            <stop offset="100%" stopColor={palette.cabStops[2]} />
          </linearGradient>
          <linearGradient id={ids.glass} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.glassStops[0]} />
            <stop offset="42%" stopColor={palette.glassStops[1]} />
            <stop offset="100%" stopColor={palette.glassStops[2]} />
          </linearGradient>
          <linearGradient id={ids.trim} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.trimStart} stopOpacity="0.92" />
            <stop offset="62%" stopColor={palette.trimEnd} stopOpacity="0.78" />
            <stop offset="100%" stopColor={palette.trimEnd} stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id={ids.glow} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.glowColor} stopOpacity="0" />
            <stop offset="48%" stopColor={palette.glowColor} stopOpacity="0.92" />
            <stop offset="100%" stopColor="#F3EEE4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={ids.beam} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F3EEE4" stopOpacity="0.54" />
            <stop offset="100%" stopColor="#F3EEE4" stopOpacity="0" />
          </linearGradient>
          <filter id={ids.blur} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id={ids.softBlur} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
          <filter id={ids.shadow} x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <rect x="0" y="0" width="860" height="500" fill={`url(#${ids.sky})`} />

        <g className="nv-depth-float">
          <ellipse cx="202" cy="88" rx="178" ry="68" fill="rgba(243, 238, 228, 0.025)" />
          <ellipse cx="684" cy="74" rx="142" ry="58" fill="rgba(184, 154, 115, 0.05)" />
          <ellipse
            cx="618"
            cy="136"
            rx="188"
            ry="52"
            fill={`url(#${ids.glow})`}
            filter={`url(#${ids.softBlur})`}
            opacity="0.18"
          />
        </g>

        <g className="nv-parallax-slow" opacity="0.95">
          <path
            d="M86 142 C214 72, 352 66, 520 126"
            fill="none"
            stroke="rgba(243, 238, 228, 0.13)"
            strokeWidth="2"
            strokeDasharray="10 14"
          />
          <path
            d="M162 104 C312 34, 520 38, 744 138"
            fill="none"
            stroke="rgba(184, 154, 115, 0.16)"
            strokeWidth="2"
            strokeDasharray="5 16"
          />

          <path d="M0 264 L0 206 L122 214 L122 264 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M128 264 L128 194 L238 200 L238 264 Z" fill="rgba(255,255,255,0.026)" />
          <path d="M248 264 L248 210 L336 216 L336 264 Z" fill="rgba(255,255,255,0.02)" />
          <path d="M610 264 L610 198 L714 204 L714 264 Z" fill="rgba(255,255,255,0.024)" />
          <path d="M724 264 L724 188 L860 196 L860 264 Z" fill="rgba(255,255,255,0.028)" />

          <rect x="96" y="228" width="10" height="8" rx="4" fill="rgba(243,238,228,0.22)" />
          <rect x="154" y="216" width="10" height="8" rx="4" fill="rgba(243,238,228,0.2)" />
          <rect x="282" y="230" width="8" height="7" rx="3.5" fill="rgba(243,238,228,0.18)" />
          <rect x="658" y="212" width="10" height="8" rx="4" fill="rgba(243,238,228,0.2)" />
          <rect x="770" y="204" width="10" height="8" rx="4" fill="rgba(243,238,228,0.18)" />
        </g>

        <rect x="0" y="264" width="860" height="1.5" fill={`url(#${ids.horizon})`} opacity="0.85" />

        <path
          d="M0 312 L860 274 L860 500 L0 500 Z"
          fill={`url(#${ids.road})`}
          opacity="0.96"
        />

        <g className="nv-road-drift" opacity="0.7">
          <path d="M174 388 L236 366 L278 366 L214 388 Z" fill="rgba(243,238,228,0.16)" />
          <path d="M328 372 L396 350 L438 350 L370 372 Z" fill="rgba(243,238,228,0.15)" />
          <path d="M498 350 L568 330 L608 330 L538 350 Z" fill="rgba(243,238,228,0.14)" />
          <path d="M684 328 L754 310 L790 310 L720 328 Z" fill="rgba(243,238,228,0.12)" />
        </g>

        <g className="nv-motion-streak">
          <rect x="32" y="224" width="330" height="8" rx="4" fill={`url(#${ids.glow})`} opacity="0.72" />
          <rect x="8" y="246" width="286" height="5" rx="2.5" fill={`url(#${ids.glow})`} opacity="0.52" />
          <rect x="64" y="272" width="214" height="4" rx="2" fill={`url(#${ids.glow})`} opacity="0.42" />
        </g>

        <g className="nv-foreground-drift" opacity="0.4">
          <rect x="-12" y="446" width="224" height="18" rx="9" fill="rgba(15,11,9,0.76)" />
          <rect x="596" y="438" width="286" height="22" rx="11" fill="rgba(15,11,9,0.74)" />
        </g>

        <ellipse
          cx="478"
          cy="352"
          rx="258"
          ry="34"
          fill="rgba(0, 0, 0, 0.58)"
          filter={`url(#${ids.shadow})`}
          opacity="0.92"
        />

        <g className="nv-stage-drift">
          <path
            d="M156 316 L228 230 L576 230 L646 252 L646 332 L152 332 Z"
            fill={`url(#${ids.glow})`}
            filter={`url(#${ids.blur})`}
            opacity="0.18"
          />

          <path
            d="M136 326 L220 226 L646 226 L726 254 L726 336 L132 336 Z"
            fill={`url(#${ids.body})`}
            opacity="0.14"
            filter={`url(#${ids.blur})`}
          />

          <g>
            <path
              d="M140 330 L218 226 L558 226 L638 252 L638 338 L136 338 Z"
              fill={`url(#${ids.body})`}
              stroke="rgba(243, 238, 228, 0.18)"
              strokeWidth="2"
            />
            <path
              d="M532 224 L594 170 L688 170 L726 210 L724 260 L532 260 Z"
              fill={`url(#${ids.cab})`}
              stroke="rgba(243, 238, 228, 0.22)"
              strokeWidth="2"
            />
            <path
              d="M626 260 L714 260 L752 284 L752 336 L606 336 L594 298 L532 298 L532 260 Z"
              fill="rgba(15, 11, 9, 0.82)"
              stroke="rgba(243, 238, 228, 0.12)"
              strokeWidth="1.5"
            />

            <path
              d="M548 224 L596 186 L676 186 L698 224 Z"
              fill={`url(#${ids.glass})`}
              stroke="rgba(243, 238, 228, 0.14)"
              strokeWidth="1.5"
            />
            <path
              d="M604 186 L604 224"
              stroke="rgba(243, 238, 228, 0.18)"
              strokeWidth="2"
            />
            <path
              d="M658 186 L658 224"
              stroke="rgba(243, 238, 228, 0.18)"
              strokeWidth="2"
            />

            <path
              d="M196 252 L602 252"
              stroke={`url(#${ids.trim})`}
              strokeWidth="4"
              strokeLinecap="round"
              className="nv-light-sweep"
            />
            <path
              d="M164 314 L628 314"
              stroke="rgba(243, 238, 228, 0.08)"
              strokeWidth="2"
            />
            <path
              d="M234 244 L234 338"
              stroke="rgba(243, 238, 228, 0.18)"
              strokeWidth="3"
            />
            <path
              d="M318 238 L318 338"
              stroke="rgba(243, 238, 228, 0.14)"
              strokeWidth="3"
            />
            <path
              d="M402 234 L402 338"
              stroke="rgba(243, 238, 228, 0.14)"
              strokeWidth="3"
            />
            <path
              d="M486 230 L486 338"
              stroke="rgba(243, 238, 228, 0.14)"
              strokeWidth="3"
            />

            <path
              d="M652 280 L720 280"
              stroke="rgba(243, 238, 228, 0.12)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M654 296 L732 296"
              stroke="rgba(243, 238, 228, 0.1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M656 312 L736 312"
              stroke="rgba(243, 238, 228, 0.08)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M754 276 L828 262 L828 310 L754 304 Z"
              fill={`url(#${ids.beam})`}
              className="nv-pulse-glow"
              opacity="0.72"
            />
            <rect
              x="744"
              y="274"
              width="16"
              height="18"
              rx="5"
              fill="#F3EEE4"
              className="nv-pulse-glow"
            />

            <path
              d="M144 282 L172 286"
              stroke="rgba(243, 238, 228, 0.14)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M146 298 L176 302"
              stroke="rgba(243, 238, 228, 0.12)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          <g className="nv-parallax-slow" opacity="0.5">
            <rect x="172" y="214" width="262" height="5" rx="2.5" fill={`url(#${ids.trim})`} />
            <rect x="566" y="166" width="112" height="4" rx="2" fill="rgba(243, 238, 228, 0.12)" />
          </g>

          <g className="nv-wheel">
            <circle cx="258" cy="356" r="30" fill="rgba(15, 11, 9, 0.96)" stroke="#B89A73" strokeWidth="6" />
            <circle
              cx="258"
              cy="356"
              r="15"
              fill="rgba(243, 238, 228, 0.16)"
              stroke="rgba(243, 238, 228, 0.42)"
              strokeWidth="2"
            />
            <path
              d="M258 326 L258 386 M228 356 L288 356 M236 334 L280 378 M236 378 L280 334"
              stroke="rgba(243, 238, 228, 0.44)"
              strokeWidth="2.5"
            />
          </g>
          <g className="nv-wheel nv-wheel-delayed">
            <circle cx="438" cy="356" r="30" fill="rgba(15, 11, 9, 0.96)" stroke="#B89A73" strokeWidth="6" />
            <circle
              cx="438"
              cy="356"
              r="15"
              fill="rgba(243, 238, 228, 0.16)"
              stroke="rgba(243, 238, 228, 0.42)"
              strokeWidth="2"
            />
            <path
              d="M438 326 L438 386 M408 356 L468 356 M416 334 L460 378 M416 378 L460 334"
              stroke="rgba(243, 238, 228, 0.44)"
              strokeWidth="2.5"
            />
          </g>
          <g className="nv-wheel nv-wheel-fast">
            <circle cx="642" cy="354" r="28" fill="rgba(15, 11, 9, 0.96)" stroke="#B89A73" strokeWidth="6" />
            <circle
              cx="642"
              cy="354"
              r="14"
              fill="rgba(243, 238, 228, 0.16)"
              stroke="rgba(243, 238, 228, 0.42)"
              strokeWidth="2"
            />
            <path
              d="M642 326 L642 382 M614 354 L670 354 M622 334 L662 374 M622 374 L662 334"
              stroke="rgba(243, 238, 228, 0.44)"
              strokeWidth="2.5"
            />
          </g>

          <g className="nv-motion-streak" opacity="0.28">
            <rect x="82" y="344" width="156" height="4" rx="2" fill={`url(#${ids.glow})`} />
            <rect x="62" y="362" width="124" height="2.5" rx="1.25" fill={`url(#${ids.glow})`} />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function FreightVisual({
  variant = "hero",
  className,
  media,
  mediaClassName,
  decorative = true
}: FreightVisualProps) {
  const item = content[variant];

  return (
    <div
      aria-hidden={decorative ? true : undefined}
      className={cn(
        "surface-card grid-sheen relative min-h-[320px] rounded-[28px] border-brand-gold/10 bg-brand-umber/70 p-5 sm:p-6",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,154,115,0.18),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(108,74,47,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,238,228,0.025),transparent_52%,rgba(15,11,9,0.12)_100%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="meta-chip">{item.label}</span>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-black/[0.18] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-brand-mist/72">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_24px_rgba(184,154,115,0.85)]" />
              Active
            </span>
          </div>
          <p className="max-w-sm text-[1.85rem] font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-[2.2rem]">
            {item.title}
          </p>
        </div>

        <div className={cn("relative flex-1 min-h-[240px]", mediaClassName)}>
          {media ?? <DefaultFreightScene variant={variant} />}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {item.points.map((point) => (
            <div
              key={point}
              className="border border-white/10 bg-black/[0.16] px-3 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-mist/78"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
