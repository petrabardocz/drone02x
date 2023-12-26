# drone02x
Scripts for interactive graphs for DRONE02x

## data
Contains the input .csv files with the emissivity values per sample type. The emisdata.csv file contains the compiled information and gets fed into the actual JS graph.

## datascraping.py
Scrapes input data from the MODIS UCSB Emissivity Library (https://www.icess.ucsb.edu/modis/EMIS/html/em.html) and exports it as .csv into /data folder. 

**Since data folder already contains the input files there is no need to run this first!**

## if2.js
Interactive graph which displays the emissivity of different surfaces. 

## index.html
Calls if2.js script. Launch with live server to see the graphs.
