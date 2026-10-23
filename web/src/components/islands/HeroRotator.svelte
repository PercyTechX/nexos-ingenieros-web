<script lang="ts">
  /**
   * Hero rotativo: cada 5 s cambia de pilar (descripción, técnico, objeto y número).
   * Las pestañas permiten elegir; al elegir se reinicia el temporizador.
   * El H1 llega como `children` (HTML estático renderizado por Astro).
   */
  import { onMount } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import type { Snippet } from 'svelte';

  type Img = { src: string; width: number; height: number; alt: string };
  type Pillar = { id: string; num: string; tab: string; short: string; desc: string; href: string; tech: Img; obj: Img };

  let { pillars, children }: { pillars: Pillar[]; children?: Snippet } = $props();

  let i = $state(0);
  let reduce = $state(false);
  let timer: ReturnType<typeof setInterval> | undefined;
  const current = $derived(pillars[i]);
  let shown = $state(0);
  const shownPillar = $derived(pillars[shown]);
  $effect(() => {
    const k = i;
    const t = setTimeout(() => (shown = k), reduce ? 0 : 160);
    return () => clearTimeout(t);
  });

  function start() {
    clearInterval(timer);
    timer = setInterval(() => (i = (i + 1) % pillars.length), 5000);
  }
  function pick(k: number) {
    i = k;
    start();
  }

  onMount(() => {
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    start();
    const onVis = () => (document.hidden ? clearInterval(timer) : start());
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVis);
    };
  });

  const d = (ms: number) => (reduce ? 0 : ms);
</script>

<div class="relative z-[2] mx-auto flex w-full max-w-310 flex-wrap items-center gap-x-8 gap-y-3 lg:flex-nowrap">
  <div class="min-w-0 flex-[1_1_520px] lg:flex-[1.25_1_0%]">
    {@render children?.()}

    <div class="grid min-h-[88px]" aria-live="polite">
      {#key i}
        <div class="[grid-area:1/1]" in:fly={{ y: 22, duration: d(600), delay: d(160), easing: cubicOut }} out:fade={{ duration: d(150) }}>
          <p class="mb-2 text-lg font-extrabold text-white sm:text-[22px]">
            {current.short}<span class="caret" aria-hidden="true"></span>
          </p>
          <p class="max-w-140 text-[17px] leading-relaxed text-on-dark">{current.desc}</p>
        </div>
      {/key}
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <a
        href="#cotizar"
        class="press inline-flex min-h-[54px] items-center gap-3 rounded-full bg-green py-1.5 pr-5.5 pl-1.5 font-extrabold text-ink shadow-cta"
      >
        <span class="flex size-[42px] items-center justify-center rounded-full bg-ink text-green-light">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
        Cotiza tu proyecto
      </a>
      <a
        href={shownPillar.href}
        class="press inline-flex min-h-[54px] items-center rounded-full border border-white/35 bg-white/5 px-6 font-bold text-white"
        >Ver servicio de {shownPillar.tab.toLowerCase()}</a
      >
    </div>

    <div role="group" aria-label="Pilares de servicio" class="mt-[clamp(16px,3svh,36px)] grid max-w-150 grid-cols-4 gap-2.5">
      {#each pillars as p, k (p.id)}
        <button
          type="button"
          class="press flex min-h-11 cursor-pointer flex-col gap-2 text-left"
          aria-pressed={k === i}
          aria-label={p.short}
          onclick={() => pick(k)}
        >
          <span class="block h-[3px] w-full overflow-hidden rounded-full bg-white/18">
            {#if k === i}
              {#key i}<span class="bar block h-full origin-left bg-green-light" class:static-bar={reduce}></span>{/key}
            {/if}
          </span>
          <span class={k === i ? 'text-[13px] font-bold text-white' : 'text-[13px] font-semibold text-on-dark-muted'}>
            {p.num} <span class="text-[11px] sm:text-[13px]">{p.tab}</span>
          </span>
        </button>
      {/each}
    </div>
  </div>

  <div class="relative mt-6 h-[clamp(380px,min(52vw,calc(100svh-240px)),680px)] min-w-0 flex-[1_1_460px] lg:mt-0 lg:flex-[1_1_0%]">
    {#key i}
      <span
        class="num pointer-events-none absolute -right-[2%] top-[2%] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent"
        aria-hidden="true"
        in:fly={{ y: 40, duration: d(900), delay: d(160), easing: cubicOut }}
        out:fade={{ duration: d(150) }}>{current.num}</span
      >
    {/key}
    <div class="glow absolute bottom-0 left-1/2 aspect-square h-[min(100%,92vw,560px)] -translate-x-1/2 rounded-full" aria-hidden="true"></div>
    <svg class="hero-ring absolute bottom-[2%] left-1/2 aspect-square h-[min(94%,86vw,520px)] w-auto -translate-x-1/2" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="none" stroke="rgb(255 255 255 / 0.14)" stroke-width="0.6" stroke-dasharray="2 5" />
      <path d="M4 100 A96 96 0 0 1 100 4" fill="none" stroke="#3fa535" stroke-width="2.4" stroke-linecap="round" />
      <path d="M196 100 A96 96 0 0 1 100 196" fill="none" stroke="#5a8eea" stroke-width="2.4" stroke-linecap="round" />
    </svg>
    {#key i}
      <div class="absolute inset-0" in:fly={{ x: 60, duration: d(760), delay: d(180), easing: cubicOut }} out:fade={{ duration: d(180) }}>
        <img
          src={current.tech.src}
          width={current.tech.width}
          height={current.tech.height}
          alt={current.tech.alt}
          class="tech absolute bottom-0 left-1/2 h-full w-auto max-w-[120%] -translate-x-1/2 object-contain object-bottom"
          fetchpriority={i === 0 ? 'high' : 'auto'}
        />
      </div>
      <div
        class="absolute -right-[2%] bottom-[6%] w-[clamp(120px,min(18vw,24svh),260px)]"
        in:scale={{ start: 0.9, duration: d(700), delay: d(260), easing: cubicOut }}
        out:fade={{ duration: d(150) }}
      >
        <img
          src={current.obj.src}
          width={current.obj.width}
          height={current.obj.height}
          alt={current.obj.alt}
          class="float block h-auto w-full"
          loading="lazy"
        />
      </div>
    {/key}
  </div>
</div>

<style>
  .num {
    font-size: clamp(180px, 26vw, 380px);
    -webkit-text-stroke: 2px rgb(143 216 138 / 0.28);
  }
  .glow {
    background: radial-gradient(circle at 50% 40%, rgb(64 120 220 / 0.55) 0%, rgb(29 79 160 / 0.25) 45%, transparent 70%);
  }
  .hero-ring {
    animation: spin 40s linear infinite;
  }
  .tech {
    filter: drop-shadow(0 30px 40px rgb(0 0 0 / 0.45));
    -webkit-mask-image: linear-gradient(to bottom, #000 86%, transparent);
    mask-image: linear-gradient(to bottom, #000 86%, transparent);
  }
  .float {
    filter: drop-shadow(0 22px 26px rgb(0 0 0 / 0.45));
    animation: float 6s ease-in-out infinite;
  }
  .bar {
    animation: bar 5s linear both;
  }
  .static-bar {
    animation: none;
  }
  .caret {
    display: inline-block;
    width: 3px;
    height: 0.9em;
    margin-left: 4px;
    vertical-align: -0.1em;
    background: var(--color-green-light);
    animation: blink 1s steps(1) infinite;
  }
  /* Tailwind 4 usa la propiedad `translate` para centrar; aquí solo rotamos */
  @keyframes spin {
    to {
      rotate: 360deg;
    }
  }
  @keyframes float {
    50% {
      transform: translateY(-14px) rotate(-1.5deg);
    }
  }
  @keyframes bar {
    from {
      transform: scaleX(0);
    }
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-ring,
    .float,
    .caret {
      animation: none;
    }
  }
</style>
