---
date-created: Thursday, May 5th 2022, 10:11:55 am
date-modified: Thursday, May 5th 2022, 10:11:55 am
---
[[🧬Molecular work]]
# ISPCR Reaction for Smart-Seq2
>Get [[ISPCR Master Mix]], thaw on ice.

1. Add 15uL of ISPCR MM to each sample for a total volume of 25uL.
2. Mix and spin down.
3. Place in thermocycler, protocol below:
(Thermo/PCR Sprint TCH machine)

*Run>A:SS2>A:01 ISPCR* (Volume of 25uL)

| Cycles   | Temperature (C) | Time (min) |
| -------- | --------------- | ---------- |
| 1        | 98              | 3 min      |
| 21 or 19 | 98              | 20s        |
| →        | 67              | 15s        |
| →        | 72              | 6 min      |
| 1        | 72              | 5 min      |
| Hold     | 4               | Forever    |

>Potential stopping step: run overnight if needed. Continue in the morning.

→ [[DNA Purification using Magnetic Beads for Smart-Seq2]]

