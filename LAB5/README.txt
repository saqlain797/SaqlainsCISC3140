tail -n +2 Film_Permits.csv 
	Print all lines except first (header)
tail -n +2 Film_Permits.csv | cut -f2 -d',' 
	Get the second column with cut command and ','  as seperator 
tail -n +2 Film_Permits.csv | cut -f2 -d',' | grep -a "Shooting Permit" | wc -l
	Get only rows with Shooting Permit using grep command and count the lines


Downloaded Open Data https://data.cityofnewyork.us/City-Government/Film-Permits/tg4x-b46p/data
