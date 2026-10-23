/**
 * Animaciones de scroll con GSAP + ScrollTrigger. Todo es opcional: sin JS o con movimiento reducido
 * el contenido se ve completo y estático (los números ya traen su valor final en el HTML).
 *
 * - data-reveal="up|left|right|zoom" (+ data-reveal-delay): entrada una sola vez, que nunca queda a medias.
 * - data-count="297": contador que sube de 0 al valor al entrar en pantalla.
 * - data-grow: barra que se llena de izquierda a derecha al entrar en pantalla.
 * - data-drift: texto gigante que se desplaza en horizontal con el scroll.
 * - data-parallax="0.15": desplazamiento vertical suave con el scroll.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FROM: Record<string, gsap.TweenVars> = {
  up: { y: 28, opacity: 0 },
  left: { x: -48, opacity: 0 },
  right: { x: 48, opacity: 0 },
  zoom: { scale: 0.94, opacity: 0 },
};

export function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const kind = el.dataset.reveal || 'up';
    gsap.from(el, {
      ...(FROM[kind] ?? FROM.up),
      duration: 0.7,
      delay: Number(el.dataset.revealDelay || 0),
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      ease: 'power3.out',
      onUpdate: () => (el.textContent = String(Math.round(obj.v))),
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-grow]').forEach((el) => {
    gsap.from(el, {
      scaleX: 0,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((el) => {
    gsap.fromTo(
      el,
      { xPercent: 4 },
      { xPercent: -18, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 0.15) * 400;
    gsap.fromTo(
      el,
      { y: amount / 2 },
      { y: -amount / 2, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });
}
