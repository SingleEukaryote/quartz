---
date-created: Thursday, April 7th 2022, 11:18:59 am
date-modified: Thursday, May 5th 2022, 10:49:50 am
---
[[🧬Molecular work]]
# RNA Extraction using Direct-zol RNA Miniprep

>Grow up 5-7 small flasks of the organism. The more cells, the better. Some do 10-50 flasks for high quality transcriptomes.

```ad-kit
- Zymo Research: Direct-zol RNA Miniprep (Cat no: R2050)
	- Take out buffers
	- Prep a spin column with two collection tubes per sample
```
```ad-reagents
- Pure molecular grade EtOH (Aliquot into a 15mL tube by pouring)
- TRI Reagent (Stored in 4C fridge, bring to RT)
```
>[!gear]
> - 3 sterile nuclease-free 1.5mL tubes per sample
> 	- Label 1 with the sample name (Date it and an write "RNA extract" on it)
> - Liquid and solid waste buckets.
> - 50mL tube for phenolic waste (used Tri reagent).

## Concentrating cells into a pellet
1. Make sure the cells are adhered to the flask and remove the food source if possible.
2. Use a method of suspending the cells into the medium.
	1. A cell scrapper puts cells into solution well.
	2. Vigorous shaking of the flask could work. Try hitting it against the palm of your hand.
	3. Bubble and wash with a sterile bulb pipet may also work.
3. Get a visual confirmation that the cells detached.
4. Pour cell suspensions into sterile nuclease-free 50mL tubes.
5. Centrifuge tubes for 5 minutes at 500-1500 rcf [[Centrifugation of different cell sizes|depending on the cell size]].
	1. The smaller the cell, the higher rcf you should use.
	2. Look for a pellet and decant. If there is no pellet, centrifuge again.

## Cell lysis and RNA Isolation
1. Lyse a sample by adding the appropiate volume of TRI reagent (acid-guanidinium-phenol)
	1. After centrifuging a cell pellet, there will be residual liquid left after decanting. Measure the volume of that liquid and the pellet with a micropipet to see how much TRI reagent to add. (3:1 ratio of TRI:Pellet volume; see below)

| Cells             | Tissue | Liquid | TRI Reagent to add |
| ----------------- | ------ | ------ | ------------------ |
| <10<sup>5</sup>   | -      | -      | 100uL              |
| <10<sup>6</sup>   | -      | 100uL  | 300uL              |
| <5x10<sup>6</sup> | <25mg  | 200uL  | 600uL              |
2. After adding TRI reagent, mix with the cell pellet thoroughly (vortex) and transfer to a 1.5mL tube.
2. Centrifuge the tube (10,000 x g) for 2 minutes to pellet the cellular debris.
3. Transfer the supernatant to new 1.5mL tube.
4. Add equal volume of pure ethanol to the supernatant and mix thoroughly.
5. Transfer the mixture to a spin column in a collection tube and centrifuge (10,000 x g; 30 seconds).
	1. Discard flow through.
6. Add 400uL RNA PreWash to the column and centrifuge.
	1. Discard flow through.
	2. **Repeat this step.**
7. Add 700uL RNA Wash Buffer to the column and *centrifuge for 2 minutes*.
8. Transfer the column to a nuclease-free labeled tube to elute in.
9. Elute by adding nuclease-free water to the column matrix.
	1. For highly concentrated RNA, add more than 25uL
	2. Normally you should add 50uL
	3. I add 52uL because Nick Fry suggested to do so. (2uL used for Qubit)
10. Use RNA immediately or store in the -80C freezer.
