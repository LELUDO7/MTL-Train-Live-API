# TraxAPI
This a API to know were the mtl exo train are and more. (This use the EXO-chrono API in the back) 
This API was build for running https://map.montrax.org website.

# V4 Documentation

## Config : 

### .env

| Name         |  Value                             | Require |
| :---         | :---                               | :---    | 
| PORT         | {The port that the api should use} | Yes |
| EXO_API_KEY  | {The API key provided by exo }     | Yes |
| DEV          | dev                                | No  |
| MONGO_URI    | {MongoDB Connection Strings}       | Yes  |

> [!NOTE]
> To obtain a API please use this website : https://exo.quebec/fr/a-propos/donnees-ouvertes
> Also to obtain a the MongoDB Connection Strings please use this website : https://www.mongodb.com/docs/manual/reference/connection-string/?deployment-type=atlas&interface-atlas-only=atlas-cli

### config.js 
This file allows you to configure three things:
	1.	Whether connections are allowed in development mode
	2.	Whether connections are allowed in production mode
	3.	The interval (in seconds) between each request the API makes to EXO
https://github.com/LELUDO7/MTL-Train-Live-API/blob/d5f3d21206140bace0d5283b6013a56f65bdfb05/config.js#L1-L14

## Routes :

### Get trains stations status

| Route        |  /api/exo/trains/stations  | 
| :---         |     :---     | 
| Description  | This route will return you all the exo train stations status in a list.     | 
| Headers   | X-Train-Info = true (optional) If set to true, the station response will include a trains_list array. This array contains all trains that are either stopped at the station or approaching it. Each train entry includes its occupancyStatus, along with an array listing the name and number of every coach and locomotive that makes up the train.  | 

Response structure : 
```js
[  
    {  
        "id": "MTL3-4",  // Id of the train station 
        "parent_id": "",  // Parents train stations
        "status": "offline", // Stations status (offline, stopped, incoming)
        "top": 62.53,  // Position  of the station from the top on the artm map (aspect-ratio: 210 / 297);
        "left": 67.83,  // Position of the stationfrom the left on the artm map (aspect-ratio: 210 / 297);
        "name": "Gare Lucien-L'Allier"  // Train station name 
    },...
]
```
> [!NOTE]
> The parents train station will always be the next station in direction of the montreal terminus.  
> There are three status values: offline (no train at the station), stopped (a train is currently stopped at the station), and incoming (a train is heading toward the station).

### Get rails status

| Route        |  /api/exo/trains/rails  | 
| :---         |     :---     | 
| Description  | This route will return you all the status of track segment that are between EXO trains stations    | 
| Headers   | N/A     | 

Response structure : 
```js
[  
    {
        "id": "R-MTL3-4", // Id of the track segment 
        "status": "notpresent", // Current status of the train track
        "top": 64.47, // Position  of the track dot from the top on the artm map (aspect-ratio: 210 / 297);
        "left": 65.25// Position  of the track dot from the left on the artm map (aspect-ratio: 210 / 297);
    },...
]
```
> [!NOTE]
> There are two status values: notpresent (no train in this track segment) and present (a train is currently in this track segment).
    
### Get trains consists

| Route        |  /api/exo/trains/rails  | 
| :---         |     :---     | 
| Description  | This route will return you a array of all the trains that ran on the line and the date specified in the headers.    | 
| Headers      |  x-Consists-Line = {line number (1,2,4,5 and 6)} (require) and X-Consists-Date = yyyy-mm-dd (require)   | 

Response structure : 
```js
[
    {
        "_id": "69826b9e9a3f34d99bb26df3", // Id of the element in DB.
        "trip_short_name": "19", // The train number of the consist.
        "trip_headsign": "Vaudreuil", // The destiation of the train.
        "date": "2026-02-03T16:41:50.000Z", // The date and time at which the train was departing from the first station. 
        "line": 1, // The line number on which the train is running.
        "composition": [
            {
                "id": "3001", // The wagon or engine number.
                "carriageSequence": 1, // The position of the wagon or engine in the consist (1 being the front).
                "model_id": 3000 // The model ID of this wagon or engine.
            },...
        ]
    },...
]
```
>[!NOTE]
>This is all possible model_id
> ```js
>  WAGON_MODEL_NAME = {
>  1320: "EMD F59PHI",
>  1340: "EMD F59PH",
>  1350: "Bombardier ALP-45DP",
>  1400: "Siemens Charger EC-42",
>  700: "Bombardier Comet II",
>  2000: "Bombardier BiLevel VII",
>  3000: "Bombardier MultiLevel",
>  2050: "CRRC",
>};
> ```

### Get movings trains
