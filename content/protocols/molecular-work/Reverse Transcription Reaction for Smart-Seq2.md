---
date-created: Thursday, May 5th 2022, 10:10:19 am
date-modified: Friday, May 6th 2022, 7:54:07 am
---
[[🧬Molecular work]]
# Reverse transcription reaction for Smart-Seq2
```ad-reagents
- Oligo dT primer
- dNTP mix
- [[Reverse Transcriptase Master Mix]] (RT MM)
```
>Keep samples on ice until thermocycling

**Start with 2.3 uL of RNA template per organism**
>- With single cell extractions, you will already have 2.3 uL with the cell in lysis buffer in a PCR tube.
>- For a whole culture extraction: pipet 2.3uL of purified mRNA samples in to fresh, labeled PCR tubes.

1. Pipet 1 uL Oligo dT primer and 1 uL of dNTP mix into each tube.
	1. Or prep a master mix of these two and pipet 2uL of the MM into each tube.
2. Mix together and spin down.
3. Incubate tubes in *thermocycler* at 72C for 3 minutes.
	1. PCR-tube option
	2. Volume of 4uL chosen
	3. Use the instant incubate button or SS2 protocol 72 option or preset a protocol with a 72 degree step.
4. Place back on ice immediately.
5. Add 5.7uL of Reverse Transcriptase Master Mix (RT MM) to each tube.
6. Mix and spin down.
7. Place into the *thermocycler* following this protocol:

*Run>A:SS2>A:02 1ST-SS4* (Volume of 10)

### Thermocycler protocol for superscript IV

| Cycles | Temperature (C) | Time (min) |
| ------ | --------------- | ---------- |
| 1      | 50              | 90         |
| 10     | 55              | 2          |
| →      | 50              | 2          |
| 1      | 80              | 15         |
| Hold   | 4C              | forever    |

ETA: 2 hours 15 minutes


→ [[ISPCR Reaction for Smart-Seq2]]
