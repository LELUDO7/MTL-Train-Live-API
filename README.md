# **MTL-Train-Live-API**
This a API to know were the mtl exo train are and more. (This use the EXO-chrono API in the back)

# V1 Documentation

## Config : 

### .env

| Name         |  Value                             | Require |
| :---         | :---                               | :---    | 
| PORT         | {The port that the api should use} | Yes |
| EXO_API_KEY  | {The API key provided by exo }     | Yes |
| DEV          | dev                                | No  |

> [!NOTE]
> The obtain a API please use this website : https://exo.quebec/fr/a-propos/donnees-ouvertes

### config.js 
This file allow you to change 3 things, the allow connection in dev mode, the allow connection in prod mode and the time between each API that the api make to EXO (in sec). 
https://github.com/LELUDO7/MTL-Train-Live-API/blob/d5f3d21206140bace0d5283b6013a56f65bdfb05/config.js#L1-L14

## Routes :

### Get trains stations status

| Route        |  /api/exo/trains/stations  | 
| :---         |     :---     | 
| Description  | This route will return you all the exo train stations status in a list.     | 
| Parameters   | N/A     | 

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
> About the status, offline (No train at the stations), stopped (A train is ccurrently stop at that train station) and incoming (A train is in direction of that stations)

### Get rails status

| Route        |  /api/exo/trains/rails  | 
| :---         |     :---     | 
| Description  | This route will return you all the status of track segment that are between EXO trains stations    | 
| Parameters   | N/A     | 

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
> About the status, notpresent (no train in this segment of track) and present (train in this segment of track)
    
    


