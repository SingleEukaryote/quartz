
[[🧬Molecular work]]
# Amplification of 18S SSU rDNA

```ad-reagents
- GoTaq
- Nuclease-free water
- 10uM [[MedlinB]]
- 10uM [[RibBR]]
- 10uM [[5AmF]]
- 10uM [[5'17F]]
```

*Reactions*:

| F Primer | R Primer | Template           |
| -------- | -------- | ------------------ |
| 5AmF     | MedlinB  | Target Organism    |
| 5AmF     | RibBR    | Target Organism    |
| 5'17F    | MedlinB  | Target Organism    |
| 5'17F    | RibBR    | Target Organism    |
| 5AmF     | RibBR    | (+) Known organism |
| 5AmF     | RibBR    | (-) QuickExtract          |

*Recipe:*

| Reagent      | Volume |
| ------------ | ------ |
| F Primer     | 1uL    |
| R Primer     | 1uL    |
| DNA Template | 1uL    |
| GoTaq (2x)   | 12.5uL |
| ddH2O        | 9.5uL  |
total 25uL
- [[QuickExtract DNA Extraction Protocol]] for acquiring DNA from target organism

*Thermocycler protocol:* (SSU>TH18S)
SIM TUBE, 6 samples, 25uL volume

| Cycles | Temp. | Time                                    |
| ------ | ----- | --------------------------------------- |
| 1      | 95 C  | 3 min                                   |
| 34     | 95 C  | 30s                                     |
| ->     | 48 C  | 25s                                     |
| ->     | 72 C  | 3.5 min (because longer subunit ~3.5kb) |
| 1      | 72 C  | 5 min                                   |
| 1      | 10 C  | Infinity                                |

*10 C is a preferable hold temp. rather than 4 C because it is easier on the PCR machine. The elongation step can be a shorter time (~2.5min) depending on the target sequence length.*

## Primers
[[Brown Lab Primers.pdf]]

![[18S forward primers image.png]]
![[18S reverse primers image.png]]
Forward Primers
>*5AmF*
AACCTGGTTGATCCTGCC
>*5'17F*
CTGGTTGATCCTGCCAG

Reverse Primers
>*RibBR*
GATCCTTCTGCAGGTTCACC
>*MedlinB*
CCCGGGATCCAAGCTTGATCCTTCTGCAGGTTCACCTAC
