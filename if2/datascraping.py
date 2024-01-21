#%%
import requests
from bs4 import BeautifulSoup
import pandas as pd
import os

# Set up /data folder to store output csvs
current_directory = os.getcwd()
data_fp = os.path.join(current_directory, "data")
if not os.path.exists(data_fp):
    os.makedirs(data_fp)

#%%
# Specify the surface types which we the data needs to be gathered for. Retrieve this from the URL of the page where the raw data is stored.
sampletypes = ["distd_wn", "oakface", "clybrkcm", "sndpgaz1" ]

for sample in sampletypes:
    url = f"https://www.icess.ucsb.edu/modis/EMIS/images/{sample}.prn" 
    print (f"Working on {url}")

    page_to_scrape = requests.get(url)
    soup = BeautifulSoup(page_to_scrape.text, "html.parser") # Get all the contents of site as bs4 object

    page_text = soup.text.strip() # Strip just the info and store as text

    # Find the index where the table begins
    table_start_index = page_text.find('#X(Micrometer)')

    if table_start_index != -1:
        # Extract the table content starting from the table_start_index
        table_content = page_text[table_start_index:]

        print(table_content)
    else:
        print("Table starting from '#X(Micrometer)' not found in the text.")

    # Split the table content into rows
    rows = table_content.strip().split('\n')

    # Split each row by whitespace and create a list of lists for the data
    data = [list(map(float, row.split())) for row in rows[1:]]  # Skip the header row

    # Create a DataFrame
    columns = rows[0].split()  # Use the header row as column names
    df = pd.DataFrame(data, columns=columns)
    df = df.rename(columns={'#X(Micrometer)': 'x1', '#X(cm-1)': 'x2', '#Yvalue': f"y_{sample}"})


    # Export dataframe
    output_fp = os.path.join(data_fp, sample + ".csv")
    df.to_csv(output_fp, index = False)
    print(f"{sample} data written to file")
