# **MTL-Train-Live-API**
This a API to know were the mtl exo train are and more. (This use the EXO-chrono API in the back)

# V1 Documentation

## Routes :

### Get trains stations status
**Description :** This route will return you all the exo train stations status.

**route :** /api/exo/trains/stations
**parameters :** N/A

**Response :** 
ex: [
    {
        "id": "MTL3-4",
        "parent_id": "",
        "status": "offline",
        "top": 62.53,
        "left": 67.83,
        "name": "Gare Lucien-L'Allier"
    },...
    


