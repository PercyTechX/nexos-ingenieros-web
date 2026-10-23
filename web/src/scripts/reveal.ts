/**
 * Animaciones de scroll con GSAP + ScrollTrigger.
 * Marcado: data-reveal="up" | "left" | "right" | "zoom", y opcionalmente data-reveal-delay="0.1".
 * El contenido es visible por defecto: sin JS o con movimiento reducido, no se anima nada.
 * Las animaciones se disparan una vez y terminan (nunca quedan "a medio camino").
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
}
