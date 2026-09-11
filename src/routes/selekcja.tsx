import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/selekcja")({ component: Selekcja });

function Selekcja() {
  return (
    <AppShell>
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted">V26 Liga · 11.09.2026</p>
      <h1 className="mt-2 font-display text-3xl">Selekcja meczów</h1>
      <p className="mt-3 text-sm text-muted">
        Best-of 05.09 + rano 08.09. Silnik HOLD. Grok = Warstwa 1. Operator = V26. Kupony tylko na prośbę.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="font-display text-xl">Warstwa 1 — lista do V26</h2>
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          <li>Sitko 1.40–1.75 — najpierw te</li>
          <li>Soft 1.70–2.10</li>
          <li>Short &lt;1.40 — input, nie sitko kuponu</li>
        </ol>
        <p className="text-sm text-muted">
          Liga krajowa. Puchar OUT. Wide &gt;2.10 nie z rana. HV ligi i faworyt wyjazdowy zostają na liście.
          Conf nie filtruje wejścia. Martwy underdog nie jest warunkiem listy.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="font-display text-xl">Warstwa 2 — po K0–K18</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>TOP3 z programu. Nic nie dopisuj.</li>
          <li>Dwójka 2×2 tylko CORE 1:0 albo 0:1.</li>
          <li>1:1 / 0:0 / 1:2 / 2:1 = rozliczenie, nie forsuj na dwójkę.</li>
          <li>3:0 / 4:0 / 3:1 nie jako EPL1.</li>
          <li>Chaos (Craiova) poza dwójką.</li>
          <li>Short na kupon tylko gdy karta sama da 1:0.</li>
          <li>Conf jest informacją. Nie tnie listy.</li>
        </ul>
      </section>
    </AppShell>
  );
}
