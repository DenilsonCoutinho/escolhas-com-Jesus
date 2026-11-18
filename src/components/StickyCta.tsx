"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

// Barra fixa no rodapé do celular, aparece depois que o visitante passa do topo.
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offer = document.getElementById("oferta");
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const atOffer = offer ? offer.getBoundingClientRect().top < window.innerHeight && offer.getBoundingClientRect().bottom > 0 : false;
      setShow(pastHero && !atOffer);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sage bg-cream/95 px-4 py-3 backdrop-blur transition duration-300 md:hidden ${show ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
    >
      <a
        href={site.checkoutUrl}
        tabIndex={show ? 0 : -1}
        onClick={() => window.fbq?.("track", "InitiateCheckout")}
        className="flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 font-display text-lg uppercase tracking-wide text-cream"
      >
        Liberar acesso agora
      </a>
    </div>
  );
}
