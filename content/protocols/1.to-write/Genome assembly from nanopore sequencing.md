---
date-created: Monday, June 6th 2022, 12:51:06 pm
date-modified: Monday, June 6th 2022, 1:13:22 pm
---
[[🖥️Bioinformatics]]

### Decompression
using gunzip
*script name:* Co_porechop.sh
```bash
#!/bin/bash
#$ -S /bin/sh
. /etc/profile
#$ -cwd
#$ -pe threads 40

cd pass
mkdir fastq
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_10_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_1_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_11_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_12_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_13_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_14_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_15_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_16_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_17_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_18_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_19_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_20_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_2_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_21_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_22_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_23_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_24_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_25_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_26_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_27_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_3_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_4_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_5_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_6_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_7_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_8_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_9_0.fastq.gz
gunzip fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_0_0.fastq.gz

mv fastq_*.fastq fastq

cd ../


/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_0_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_0_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_2_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_2_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_1_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_1_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_4_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_4_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_3_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_3_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_5_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_5_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_6_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_6_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_7_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_7_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_8_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_8_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_9_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_9_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_10_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_10_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_11_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_11_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_12_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_12_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_14_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_14_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_13_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_13_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_15_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_15_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_16_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_16_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_17_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_17_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_21_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_21_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_22_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_22_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_19_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_19_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_23_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_23_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_18_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_18_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_20_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_20_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_27_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_27_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_24_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_24_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_26_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_26_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_25_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_25_0.PC.fastq
```

### Porechop

Raw reads in BasecallingSA/pass/ → uploaded into the cluster with **scp**
1. Run raw reads through this script. The path of each file is run through porechop-runner.py
	1. [path]/porechop-runner.py -abi —no_split -i [fastq file path]

##### Script: Co_Porechop2 for Co run
```bash
#!/bin/bash
#$ -S /bin/sh
. /etc/profile
#$ -cwd
#$ -pe threads 40

/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_0_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_0_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_2_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_2_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_1_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_1_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_4_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_4_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_3_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_3_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_5_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_5_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_6_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_6_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_7_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_7_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_8_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_8_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_9_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_9_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_10_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_10_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_11_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_11_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_12_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_12_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_14_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_14_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_13_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_13_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_15_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_15_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_16_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_16_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_17_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_17_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_21_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_21_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_22_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_22_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_19_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_19_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_23_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_23_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_18_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_18_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_20_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_20_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_27_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_27_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_24_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_24_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_26_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_26_0.PC.fastq
/home/mbrown/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/Porechop_ABI/porechop-runner.py -abi --no_split -i ~/Assemblies/GENOMES/Cryptodiffulgia_operculatum.gDNA/Nanopore/BasecallingSA/pass/fastq/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_25_0.fastq -o ./Porechop/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_25_0.PC.fastq
```

### Assembly using canu
- Canu software is fine alone to run. The software is in the bin folder.
- Perl based software

##### Canu Vf script

```bash
#!/bin/bash
#$ -S /bin/sh
. /etc/profile
#$ -cwd
#$ -pe threads 6


/home/mbrown/Assemblies/GENOMES/canu-2.2/bin/canu -d ./Vf_gDNA_CanuAssembly -p Vannella_fimicola_gDNA genomeSize=24m -nanopore /home/mbrown/Assemblies/GENOMES/Vannella_fimicola.gDNA/Nanopore/Vannellafimicolla_BasecallingSA/Porechop/fastq_runid_33d6a1ac13c3431370148cd6464737d4e30e1d86_ALL.PC.fastq gridEngineResourceOption="-pe threads THREADS" maxThreads=6 maxMemory=12
```

##### Canu Cd script for nanopore sequences

```bash
#!/bin/bash
#$ -S /bin/sh
. /etc/profile
#$ -cwd
#$ -pe threads 6


/home/mbrown/Assemblies/GENOMES/canu-2.2/bin/canu -d ./Co_gDNA_CanuAssembly -p Cryptodifflugia_operculata_gDNA genomeSize=24m -nanopore /home/mbrown/Assemblies/GENOMES/tristan_cryptoCanu/fastq_runid_d567ee328a5a488f51307e8905123ed4bcba0539_ALL_basecallSA.PC.fasta gridEngineResourceOption="-pe threads THREADS" maxThreads=6 maxMemory=12
```
ls