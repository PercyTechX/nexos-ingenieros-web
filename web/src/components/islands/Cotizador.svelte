<script lang="ts">
  /**
   * Cotizador: ¿qué necesitas? + razón social*, RUC (opcional, 11 dígitos), correo* → abre WhatsApp con el mensaje.
   * No guarda datos. Dispara el evento de analítica `cotizacion_enviada` si GA4 está cargado.
   * Admite preselección por prop `initial` (páginas de servicio) o por URL: ?servicio=mant|retail|obras|indeci
   */
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let { whatsapp, initial = '' }: { whatsapp: string; initial?: string } = $props();

  const NEEDS = [
    { id: 'mant', code: 'MT', label: 'Mantenimiento de locales' },
    { id: 'retail', code: 'RT', label: 'Implementación retail' },
    { id: 'obras', code: 'OB', label: 'Obra civil / ingeniería' },
    { id: 'indeci', code: 'IT', label: 'Observaciones INDECI / ITSE' },
  ];

  let need = $state(initial);
  let company = $state('');
  let ruc = $state('');
  let email = $state('');
  let error = $state('');
  let sent = $state(false);

  onMount(() => {
    const s = new URLSearchParams(location.search).get('servicio');
    if (s && NEEDS.some((n) => n.id === s)) need = s;
  });

  const needLabel = $derived(NEEDS.find((n) => n.id === need)?.label ?? '');
  const progress = $derived(Math.round((100 * [need, company, ruc, email].filter((v) => v.trim()).length) / 4));
  const message = $derived(
    [
      `Hola NEXOS${company.trim() ? `, les escribe ${company.trim()}` : ''}${ruc.trim() ? ` (RUC ${ruc.trim()})` : ''}.`,
      needLabel ? `Necesitamos: ${needLabel}.` : 'Queremos cotizar un proyecto.',
      email.trim() ? `Correo de contacto: ${email.trim()}.` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  );

  function submit(e: SubmitEvent) {
    e.preventDefault();
    sent = false;
    if (!company.trim()) return (error = 'Escribe la razón social de tu empresa.');
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return (error = 'Escribe un correo electrónico válido.');
    if (ruc.trim() && !/^\d{11}$/.test(ruc.trim())) return (error = 'El RUC debe tener 11 dígitos.');
    error = '';
    sent = true;
    (window as any).gtag?.('event', 'cotizacion_enviada', { servicio: need || 'sin_definir' });
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  }

  const field =
    'w-full min-h-[46px] rounded-xl border border-transparent bg-white px-3.5 py-2.5 text-[15px] text-text outline-none focus:border-green focus:ring-4 focus:ring-green/25';
</script>

<form class="cot flex flex-col gap-3" onsubmit={submit} novalidate>
  <div class="flex items-center justify-between gap-2.5 px-1">
    <span class="text-xs font-extrabold tracking-[0.14em] text-[#dce4f5] uppercase">Tu solicitud</span>
    <span class="inline-flex items-center gap-1.5 text-xs font-bold text-[#dce4f5]">
      <span class="size-2 rounded-full bg-green-light shadow-[0_0_0_4px_rgb(143_216_138/0.25)]"></span>Respuesta por WhatsApp
    </span>
  </div>

  <fieldset class="m-0 rounded-[20px] border border-white/14 bg-white/8 p-4">
    <legend class="float-left mb-3 w-full p-0 text-xs font-extrabold tracking-[0.14em] text-on-dark uppercase">1 · ¿Qué necesitas?</legend>
    <div class="clear-both grid gap-2 sm:grid-cols-2">
      {#each NEEDS as n (n.id)}
        <button
          type="button"
          class="press flex min-h-[46px] cursor-pointer items-center gap-2.5 rounded-xl border py-1.5 pr-3 pl-1.5 text-left text-sm {need === n.id ? 'border-green-light bg-green/30 font-bold text-white' : 'border-white/22 bg-white/8 font-semibold text-white'}"
          aria-pressed={need === n.id}
          onclick={() => (need = need === n.id ? '' : n.id)}
        >
          <span class="flex size-[30px] flex-none items-center justify-center rounded-full text-[11px] font-extrabold {need === n.id ? 'bg-green-light text-ink' : 'bg-white/16 text-white'}">{n.code}</span>
          {n.label}
        </button>
      {/each}
    </div>
  </fieldset>

  <div class="rounded-[20px] border border-white/14 bg-white/8 p-4">
    <p class="m-0 mb-3 text-xs font-extrabold tracking-[0.14em] text-on-dark uppercase">2 · Tus datos</p>
    <div class="grid gap-2.5 sm:grid-cols-2">
      <label class="flex flex-col gap-1.5 text-[13px] font-bold text-white sm:col-span-2">
        Razón social *
        <input class={field} type="text" autocomplete="organization" placeholder="Empresa S.A.C." bind:value={company} required />
      </label>
      <label class="flex flex-col gap-1.5 text-[13px] font-bold text-white">
        RUC
        <input class={field} type="text" inputmode="numeric" maxlength="11" placeholder="20XXXXXXXXX" bind:value={ruc} />
      </label>
      <label class="flex flex-col gap-1.5 text-[13px] font-bold text-white">
        Correo electrónico *
        <input class={field} type="email" autocomplete="email" placeholder="tucorreo@empresa.com" bind:value={email} required />
      </label>
    </div>
  </div>

  <div class="rounded-[20px] border border-white/14 bg-white/8 p-4">
    <div class="mb-2.5 flex items-baseline justify-between">
      <p class="m-0 text-xs font-extrabold tracking-[0.14em] text-on-dark uppercase">3 · Vista previa</p>
      <span class="text-[13px] font-extrabold text-green-light">{progress}%</span>
    </div>
    <div class="mb-3 h-1 overflow-hidden rounded bg-white/14" aria-hidden="true">
      <div class="h-full rounded bg-linear-to-r from-green to-green-light transition-[width] duration-300" style="width: {progress}%"></div>
    </div>
    <p class="m-0 min-h-[46px] rounded-xl bg-white px-3.5 py-3 text-sm leading-relaxed whitespace-pre-line text-text" aria-live="polite">{message}</p>
  </div>

  {#if error}
    <p role="alert" class="m-0 rounded-xl bg-[rgb(255_107_95/0.18)] px-3.5 py-2.5 text-sm font-semibold text-[#ffd2ce]" transition:fade={{ duration: 150 }}>{error}</p>
  {/if}

  <button type="submit" class="press flex min-h-14 cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-green text-base font-extrabold text-ink shadow-cta">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
    Enviar por WhatsApp
  </button>
  {#if sent}
    <p class="m-0 text-center text-sm font-bold text-green-light" transition:fade={{ duration: 200 }}>¡Listo! Se abrió WhatsApp con tu mensaje. Solo presiona enviar.</p>
  {/if}
  <p class="m-0 text-center text-xs text-on-dark">Se abrirá WhatsApp con este mensaje ya escrito. No guardamos tus datos en esta página.</p>
</form>

<style>
  @media (max-height: 820px) and (min-width: 1024px) {
    .cot :global(fieldset),
    .cot > :global(div) {
      padding: 0.75rem;
    }
    .cot {
      gap: 0.5rem;
    }
  }
</style>
