---
date-created: Thursday, May 5th 2022, 10:21:30 am
date-modified: Thursday, May 5th 2022, 10:22:09 am
---
[[🧬Molecular work]]
# GoTaq ISPCR for SmartSeq-2
>[!gear]
> - Labeled PCR Tubes
> - Used Qubit samples
```ad-reagents
- GoTaq Master Mix > ice
- ISPCR Primers > ice
- Nuclease Free H2O
```

1. Recipe (12.5uL total per sample)
	1. 1uL of Qubit sample
	2. 6.25uL GoTaq MM
	3. 1uL ISPCR Primer
	4. 4.25uL H2O
2. Run in thermocycler using same ISPCR protocol:
	1. (Thermo/PCR Sprint TCH)
	2. *Run>A:SS2>A:01 ISPCR*

| Cycles   | Temperature (C) | Time (min) |
| -------- | --------------- | ---------- |
| 1        | 98              | 3 min      |
| 21 or 19 | 98              | 20s        |
| →        | 67              | 15s        |
| →        | 72              | 6 min      |
| 1        | 72              | 5 min      |
| Hold     | 4               | Forever    |
- Store in -20C “Post-Qubit PCR products” rack after finished
- Throw away Qubit samples and clean the bench area.
