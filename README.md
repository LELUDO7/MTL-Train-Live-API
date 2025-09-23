# **MTL-Train-Live-API**
This a API to know were the mtl exo train are and more. (This use the EXO-chrono API in the back)

# V1 Documentation

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
    
    


