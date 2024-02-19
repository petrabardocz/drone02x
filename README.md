# drone02x
Data and scripts for interactive features (if) in DRONE02x MOOCC.

## if1
Interactive calculator tool to display how thermal image values can differ depending on surface temperature and camera emissivity.

### if1.js
Script to retrieve input values from slider and calculate output based of predefined formula.

### index1.html
HTML part, needs to be out into EdX html editor.

### stylesif1.css
Styling, for EdX integration this needs to go between <style> tags and the link to the background image replaced with studio link to image.

********
## if2
Interactive graphs displaying different surface emissivites against wavelengths.
### data
Contains the input .csv files with the emissivity values per sample type

clybrkcm.csv - Clay Brick (Common)\
distd_wn.csv - Distilled Water Standard *\
oakface.csv - Leaf of Oak (Face)\
sndpgaz1.csv - Sandy soil sample 1

emisdata.csv file contains the raw compiled data\
emisdata2.csv file contains the tweaked data which gets fed into the actual JS graph

### datascraping.py
Scrapes input data from the MODIS UCSB Emissivity Library (https://www.icess.ucsb.edu/modis/EMIS/html/em.html) and exports it as .csv into /data folder. 

**NOTE: Since data folder already contains the input files there is no need to run this first!**

### dataediting.ipynb
Compiles all the different samples into a single dataframe and exports it as data/emisdata.csv \
Tweaks dataset so the rows where distilled water is NaN are dropped and reorders dataset in ascending order with regards to wavelength and exports it as data/emisdata2.csv

**NOTE: Since data folder already contains the input files there is no need to run this first!**

### if2.js
Interactive graph which displays the emissivity of different surfaces.\
For EdX integration make sure to uncomment corresponding line at the beginning of script so the right .csv location is called.

### index.html
Calls if2.js script. Launch with live server to see the graphs.
