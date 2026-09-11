# Standard selekcji meczów — EXACT V26 Liga

Wersja: 11.09.2026 wieczór — best-of **05.09 (10 HIT)** + **rano 08.09 (9 HIT)**.
Silnik K0–K18, CORE, TOP3: **HOLD**. Ten plik to sito operatora, nie patch silnika.

---

## Role

- **Warstwa 1** — skan 100% rynku robi Grok, tylko według tego pliku.
- **Warstwa 2** — pełne V26 (K0–K18) robisz Ty w programie.
- **Kupony** — Grok składa 2×2 **tylko gdy poprosisz**. Nie z automatu.
- Grok nie dopisuje exactów spoza TOP3 karty.

Jedna lista. Bez ósemki vs Watch jako jakości.

---

## Warstwa 1 — lista dnia (przed V26)

Kolejność analizy, nie ranking:

1. **Sitko 1.40–1.75** — najpierw te
2. **Soft 1.70–2.10** — druga lista, ten sam lejek
3. **Short < 1.40** — input, nie sitko kuponu

Na listę idzie mecz gdy:

- liga krajowa (puchar / LM / LE / puchar kraju = OUT)
- jest faworyt 1X2
- pasmo kursu jak wyżej

**Wide > 2.10** — nie z porannej listy.
Nakładka **1.70–1.75** jest legalna (silnik widzi Soft, lista widzi sitko).

### Co ZOSTAJE na liście (praktyka 05.09)

- HV ligi nie wycinają wejścia (Cymru / Parva / Super Liga RS weszły na HIT)
- faworyt wyjazdowy zostaje na liście (St. Mirren 1:2, Västerås 0:1, Spartak Varna 1:1)
- short zostaje inputem (Dinamo 1.13, TNS 1.18, Haugesund 1.27, Larne 1.14)

### Conf

Conf jest na karcie jako informacja.
**Nie tnie listy. Nie otwiera kuponu.**

Z archiwum 03–09.09: 42/51 HIT < 70. Całe 08.09 (9 HIT) było 45.7–63.8. 05.09 HIT-y schodziły do Conf 26.
Bez XI program sam stawia Conf 69% / NO EXECUTION — to silnik, nie sito rana.

---

## Warstwa 2 — po pełnym V26 K0–K18

Bierzesz **TOP3 z programu**. Nic nie dopisujesz (ani 1:1, ani 2:0, ani 3:0 z palca).
Nie łatamy slotów — to psuje triplet 1:0 / 2:1 / 2:0 (Larne, Ilves, Zamalek).

### Na kupon 2×2 (gdy poprosisz Groka)

Tylko gdy karta sama da CORE **1:0 albo 0:1**.

- kształt bije kurs (Craiova 1.54 + chaos 3:1 = poza dwójką)
- Soft 1.76–2.10: analiza TAK, dwójka tylko przy czystym CORE 1:0/0:1 (Damac, Västerås)
- short na kupon tylko gdy karta sama da 1:0 (Larne)
- `1:1 / 0:0 / 1:2 / 2:1` zostają na rozliczeniu TOP3, nie na 2×2 z automatu
- `3:0 / 4:0 / 3:1` nie jako EPL1
- martwy underdog = warunek **kuponu**, nie warunek listy

Dwa kupony po dwa.

HIT rozliczenia = FT w TOP3 (także EPL3). HIT kuponu ≠ HIT modelu.

---

## Czego nie ruszamy w programie

- K0–K18
- wzór Conf
- układ TOP3 / CORE
- Soft Band silnika 1.70–2.10
- sitko 1.40–1.75 w guardzie

---

## Szybki test dnia

Lista wygląda jak 05.09 / rano 08.09: sitko H + Soft A + short input.
Ligi wzorca: Veikkausliiga / NIFL / Saudi / Egipt / K League / Estonia / Parva / Allsvenskan / SCO.
Jeśli Conf ≥ 70 jest warunkiem wrzutu — sito jest złe.
