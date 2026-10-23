<script lang="ts">
  /**
   * Mapa de obras: puntos por ciudad sobre el contorno del Perú + lista filtrable.
   * Filtros combinables: pilar (chips) y ciudad (punto). Al pasar el cursor por una obra se ilumina su ciudad.
   * Sin JS, la lista completa ya viene renderizada (SSR) con sus enlaces a cada ficha.
   */
  type Work = {
    id: string; title: string; client: string; place: string; city: string;
    pillar: string; pillarLabel: string; photos: number; thumb: string; href: string; type: string;
  };
  type City = { name: string; x: number; y: number };

  let { works, cities, path, viewBox }: {
    works: Work[]; cities: Record<string, City>; path: string; viewBox: { w: number; h: number };
  } = $props();

  const CHIPS = [
    ['todos', 'Todos'], ['mant', 'Mantenimiento'], ['retail', 'Retail'], ['obras', 'Obras e ingeniería'], ['indeci', 'INDECI · ITSE'],
  ] as const;

  let pillar = $state<string>('todos');
  let city = $state<string>('');
  let hot = $state<string>('');

  const byPillar = $derived(works.filter((w) => pillar === 'todos' || w.pillar === pillar));
  const list = $derived(byPillar.filter((w) => !city || w.city === city));
  const countFor = (key: string) => byPillar.filter((w) => w.city === key).length;
  const chipCount = (id: string) => works.filter((w) => (id === 'todos' || w.pillar === id) && (!city || w.city === city)).length;
</script>

<div role="group" aria-label="Filtrar proyectos por pilar" class="mb-5.5 flex flex-wrap gap-2">
  {#each CHIPS as [id, label] (id)}
    <button
      type="button"
      class="press inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 px-4.5 text-sm font-bold {pillar === id ? 'border-navy bg-navy text-white' : 'border-[#d5deee] bg-white text-navy'}"
      aria-pressed={pillar === id}
      onclick={() => (pillar = id)}
    >
      {label}
      <span class="rounded-full px-2 py-0.5 text-xs font-extrabold {pillar === id ? 'bg-green-light text-ink' : 'bg-surface-blue text-muted'}">{chipCount(id)}</span>
    </button>
  {/each}
</div>

<div class="flex flex-wrap items-stretch gap-5">
  <!-- Mapa -->
  <div class="map-card flex min-w-0 flex-[1_1_380px] flex-col gap-3.5 rounded-panel p-[clamp(18px,2.5vw,28px)] shadow-panel">
    <div class="flex items-center justify-between gap-2.5">
      <span class="eyebrow text-xs text-green-light">Mapa de obras</span>
      {#if city}
        <button type="button" class="press min-h-9 cursor-pointer rounded-full border border-white/30 bg-white/8 px-3.5 text-[13px] font-bold text-white" onclick={() => (city = '')}>
          Ver todo el Perú ×
        </button>
      {/if}
    </div>
    <div class="relative mx-auto w-full" style="aspect-ratio: {viewBox.w} / {viewBox.h}; max-width: min(440px, calc((100svh - 230px) * {viewBox.w / viewBox.h}))">
      <svg viewBox="0 0 {viewBox.w} {viewBox.h}" class="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <path d={path} fill="rgb(255 255 255 / 0.07)" stroke="#5a8eea" stroke-width="2.5" stroke-linejoin="round" />
      </svg>
      {#each Object.entries(cities) as [key, c] (key)}
        {@const n = countFor(key)}
        {@const lit = city === key || hot === key}
        {#if n > 0}
          <button
            type="button"
            class="pin absolute size-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style="left: {c.x}%; top: {c.y}%"
            aria-label="{c.name}: {n} proyectos"
            aria-pressed={city === key}
            onclick={() => (city = city === key ? '' : key)}
          >
            <span class="ping absolute inset-1.5 rounded-full bg-green-light/45" aria-hidden="true"></span>
            <span
              class="absolute flex items-center justify-center rounded-full font-extrabold text-ink {lit ? 'inset-1.5 border-3 border-white bg-green text-[11px] shadow-[0_0_0_6px_rgb(63_165_53/0.35)]' : 'inset-2 border-3 border-green bg-white text-[10px]'}"
              >{n}</span
            >
            <span class="absolute top-1/2 left-10 -translate-y-1/2 rounded-lg bg-ink/85 px-2 py-0.5 text-xs font-bold whitespace-nowrap text-white">{c.name}</span>
          </button>
        {/if}
      {/each}
    </div>
    <p class="m-0 text-xs text-on-dark-muted">Contorno: Natural Earth (dominio público).</p>
  </div>

  <!-- Lista -->
  <div class="flex min-w-0 flex-[1.3_1_460px] flex-col overflow-hidden rounded-panel border border-[#dce4f2] bg-white/92 shadow-[0_20px_50px_rgb(14_26_79/0.08)]">
    <div class="flex items-baseline justify-between gap-3 border-b border-line px-5.5 pt-5 pb-3.5">
      <p class="m-0 text-lg font-extrabold text-navy" aria-live="polite">{city ? `Obras en ${cities[city].name}` : 'Todas las obras'}</p>
      <span class="text-[13px] font-bold text-green-dark">{list.length} {list.length === 1 ? 'proyecto' : 'proyectos'}</span>
    </div>
    <ul class="scroll m-0 max-h-[min(620px,calc(100svh-180px))] min-h-[360px] flex-1 list-none overflow-y-auto py-2 pr-1.5 pl-2 pb-7">
      {#each list as w (w.id)}
        <li>
          <a
            href={w.href}
            class="row flex items-center gap-3.5 rounded-[18px] p-2.5"
            onmouseenter={() => (hot = w.city)}
            onmouseleave={() => (hot = '')}
            onfocus={() => (hot = w.city)}
            onblur={() => (hot = '')}
          >
            <img src={w.thumb} alt="{w.type} – {w.title}, {w.place}" width="104" height="76" loading="lazy" class="h-19 w-26 flex-none rounded-[14px] bg-navy object-cover" />
            <span class="flex min-w-0 flex-1 flex-col gap-0.5">
              <span class="self-start rounded-full bg-green-tint px-2 py-0.5 text-[11px] font-extrabold text-green-dark">{w.pillarLabel}</span>
              <span class="text-[15px] leading-snug font-extrabold text-navy">{w.title}</span>
              <span class="truncate text-[13px] text-subtle">{w.client} · {w.place} · {w.photos} fotos</span>
            </span>
            <span class="arrow flex size-9 flex-none items-center justify-center rounded-full bg-surface-blue text-blue" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </a>
        </li>
      {:else}
        <li class="px-4 py-8 text-center text-[15px] text-subtle">No hay obras de este pilar en esta ciudad.</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .map-card {
    background: linear-gradient(160deg, #0a1440 0%, #10245f 70%, #163a86 100%);
  }
  .ping {
    animation: ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes ping {
    0% { transform: scale(0.6); opacity: 0.9; }
    80%, 100% { transform: scale(2.2); opacity: 0; }
  }
  .row { transition: background-color 200ms ease-out; }
  .row .arrow { transition: background-color 200ms ease-out, color 200ms ease-out, transform 200ms var(--ease-out-strong); }
  .row:hover, .row:focus-visible { background: var(--color-surface-blue); }
  .row:hover .arrow { background: var(--color-green); color: var(--color-ink); transform: translateX(3px); }
  .scroll {
    scrollbar-width: thin;
    scrollbar-color: #1d4fa0 #eef3fb;
    -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 88%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, #000 88%, transparent 100%);
  }
  .scroll::-webkit-scrollbar { width: 8px; }
  .scroll::-webkit-scrollbar-track { background: #eef3fb; border-radius: 999px; margin: 10px 0; }
  .scroll::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #1d4fa0, #0e1a4f); border-radius: 999px; border: 2px solid #eef3fb; }
  .scroll::-webkit-scrollbar-thumb:hover { background: #3fa535; }
  @media (prefers-reduced-motion: reduce) { .ping { animation: none; } }
</style>
