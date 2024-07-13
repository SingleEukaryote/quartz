---
date-created: Thursday, June 16th 2022, 8:43:44 am
date-modified: Thursday, June 16th 2022, 8:43:44 am
---
[[🧬Molecular work]]
# Nextera Library Prep (~1.5 days)

>You must have purified cDNA of all samples you want to send for sequencing before beginning this protocol.

We typically do library prep to sequence transcriptomes (cDNA) of multiple different organisms following [[Smart-Seq2 for a single cell in liquid|Smart-Seq2 Protocols]]. At the end of this process we will send 1 or 2 tubes (called ‘pools’) to the sequencing company. Inside of the tube are cDNA fragments of each organism. To tell which organism is which, each fragment is tagged with two unique index sequences. As such, the amount of organisms you can sequence is limited by the number of unique index primers we have. 

[[SSIII Single Cell Protocol.pdf]]

## Organizing and assigning indexes to a pool
*Excel sheet*
![[Nextera pool and dilutions template.xlsx]]

### 

## cDNA Dilution to 0.2ng/uL
**Goal:** Prepare dilutions of the cDNA to 0.2 ng/uL.
*Excel sheet*

Start by diluting 1uL of cDNA unless the initial concentration is lower than 2

```ad-kit
- Biotium AccuGreen High Sensitivity dsDNA Quantitation Kit (31066)
```
2 microliters used for Qubit.

## Nextera Library Preparation
```ad-kit
- Illumina Nextera XT Library Prep Kit (15032354)
- Biotium AccuGreen High Sensitivity dsDNA Quantitation Kit (31066)
- Nextera XT Index Kits (Set A, D, 24 Indexes)
```

**Tagmentation??? What is it?**

4. Remove the ATM (Amplicon Tagment Mix), TD (Tagment DNA Buffer), and input DNA from -20C storage and thaw on ice.
5. Bring NT (Neutralize Tagment Buffer) to room temp. Visually inspect NT to ensure there is no precipitate. If there is precipitate, vortex until all particulates are resuspended.
6. Mix all reagents by inverting the tubes 3-5 times.
7. Add 10ul of TD Buffer to each PCR tube.
8. Add 5ul of input DNA at 0.200ng/ul (1ng total) to each tube.
9. Add 5ul of ATM. Mix by pipetting.
10. Give each sample a quick spin down.
11. 55C for 5min in thermocycler. Hold at 10C.
12. Proceed IMMEDIATELY to Neutralize NTA.
13. Add 5ul of NT Buffer to each tube. Mix by pipetting.
14. Quick spin down.
15. Incubate at room temp. for 5min.
16. Thaw NPM (Nextera PCR Master Mix) and index primers (about 20min on bench). 
	1. **Mix NPM by inverting tube. Spin index primers down before opening.**
17. Add 15ul of NPM to each PCR tube.
18. Add 5ul of index 2 primers (S-series) 
	1. ***Do not recap index primers with old cap. Use new caps provided by Illumina***
19. Add 5ul of index 1 primers (N-series).
20. Mix by pipetting.
21. Quick Spin down.
22. Place samples in the thermocycler on the following setting:

>Nextera>*NEXXT15* protocol (Put in amount of samples eg. 24. 45 uL total volume)

| Cycles | Temperature | Time |
| ------ | ----------- | ---- |
| 1      | 72C         | 3min |
| 1      | 95C         | 30s  |
| 12     | 95C         | 10s  |
| →      | 55C         | 30s  |
| →      | 72C         | 30s  |
| 1      | 72C         | 5min |
| Hold   | 10C         | Forever     |

***Bring AMPure XP beads to room temperature and vortex well before proceeding to the following steps***

***Prepare 80% EtOH to be used in the following washes minutes before use***

1. Give samples a quick spin down to collect all liquid at the bottom of the tube.
2. Add 25ul of AMPure XP beads to each sample (.50:1 ratio)
3. Mix samples well by pipetting up and down ~10 times.
4. Incubate at room temperature for 5min.
5. Place samples on the high-volume side of the magnet stand for 2min.
6. Discard the supernatant
7. Add 200ul freshly prepared 80% EtOH to each sample and let stand 30s.
8. Remove and discard EtOH.
9. Repeat steps 59 and 60 once more.
	1. *It is critical to remove ALL EtOH after the second wash*
10. Air-dry for 8min with caps open.
11. Add 23ul of RSB (Resuspension Buffer) 
	1. *Add RSB so that it hydrates the beads on its way to the bottom of the tube.*
12. Homogenize solution by pipetting up and down at least 10 times.
13. Incubate off the magnet stand at room temp. for 2min.
14. Place back on the magnet stand for 2min or until solution is clear.
15. Transfer 21ul of supernatant to a new well-labled PCR tube.


*****HiSeq (PE 100-125) runs STOP HERE*****

*****For MiSeq v3 600 (PE 300) runs, more must be done*


## Purified Library GoTaq PCR Gel

1.8% TBE Gel
90mL TBE, 1.62 g Agarose
Run for about 1 hour and 45 minutes on a two laned gel.