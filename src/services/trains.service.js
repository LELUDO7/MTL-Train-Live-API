import { getLiveData } from "../live-data.js";

let stop = [
  { id: "MTL3",status:"offline", top: 62.8, left: 68.4, name: "Gare Lucien-L'Allier"},
  { id: "MTL2",status:"offline", top: 65, left: 60.5, name:"Gare Vendôme"},
  { id: "MTL1",status:"offline", top: 65, left: 50, name:"Gare Montréal-Ouest"},
  { id: "MTL8",status:"offline", top: 51.9, left: 61.6, name:"Gare Parc"},
  { id: "MTL37",status:"offline", top: 49.7, left: 58.5, name:"Gare Chabanel"},
  { id: "MTL7",status:"offline", top: 48, left: 56, name:"Gare Bois-de-Boulogne"},
  { id: "LVL24",status:"offline", top: 44.4, left: 53.55, name:"Gare De la Concorde"},
  { id: "LVL22",status:"offline", top: 41.1, left: 53.55, name:"Gare Vimont"},
  { id: "LVL4",status:"offline", top: 37.5, left: 53.55, name:"Gare Sainte-Rose"},
  { id: "ROS2",status:"offline", top: 35.1, left: 51.2, name:"Gare Rosemère"},
  { id: "STR4",status:"offline", top: 33.85, left: 49.4, name:"Gare Sainte-Thérèse"},
  { id: "BL1",status:"offline", top: 32.65, left: 47.7, name:"Gare Blainville"},
  { id: "MIR1",status:"offline", top: 31.3, left: 45.8, name:"Gare Mirabel"},
  { id: "SJM1",status:"offline", top: 29.4, left: 43.1, name:"Gare Saint-Jérôme"}
];

export function listTrains() {

  let data = getLiveData()

  for (let index = 0; index < stop.length; index++) {
    stop[index].status = "offline"
    
  }

  for (let index = 0; index < stop.length; index++) {
   
    for (const trains of data.data.entity) {
      if (trains.vehicle.stopId.slice(0,-1) == stop[index].id) {

        if (trains.vehicle.currentStatus == 1) {
          stop[index].status = "stopped";
        } else {
          stop[index].status = "incoming";
        }
        
        
      } 
    
    }
    
  }

  return stop;
}