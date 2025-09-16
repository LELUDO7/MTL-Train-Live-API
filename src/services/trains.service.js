import { getLiveData } from "../live-data.js";

let stop = [
  { id: "MTL3-4",status:"offline", top: 62.8, left: 68.4, name: "Gare Lucien-L'Allier"},
  { id: "MTL2-4",status:"offline", top: 65, left: 60.5, name:"Gare Vendôme"},
  { id: "MTL1-1",status:"offline", top: 65, left: 50, name:"Gare Montréal-Ouest"},
  { id: "MTL1-4",status:"offline", top: 65, left: 50, name:"Gare Montréal-Ouest"},
  { id: "MTL1-5",status:"offline", top: 65, left: 50, name:"Gare Montréal-Ouest"},
  { id: "MTL8-4",status:"offline", top: 51.9, left: 61.6, name:"Gare Parc"},
  { id: "MTL37-4",status:"offline", top: 49.7, left: 58.5, name:"Gare Chabanel"},
  { id: "MTL7-4",status:"offline", top: 48, left: 56, name:"Gare Bois-de-Boulogne"},
  { id: "LVL24-4",status:"offline", top: 44.4, left: 53.55, name:"Gare De la Concorde"},
  { id: "LVL22-4",status:"offline", top: 41.1, left: 53.55, name:"Gare Vimont"},
  { id: "LVL4-4",status:"offline", top: 37.5, left: 53.55, name:"Gare Sainte-Rose"},
  { id: "ROS2-4",status:"offline", top: 35.1, left: 51.2, name:"Gare Rosemère"},
  { id: "STR4-4",status:"offline", top: 33.85, left: 49.4, name:"Gare Sainte-Thérèse"},
  { id: "BL1-4",status:"offline", top: 32.65, left: 47.7, name:"Gare Blainville"},
  { id: "MIR1-4",status:"offline", top: 31.3, left: 45.8, name:"Gare Mirabel"},
  { id: "SJM1-4",status:"offline", top: 29.4, left: 43.1, name:"Gare Saint-Jérôme"},
  { id: "LCH1-1",status:"offline", top: 61.242, left: 38.71, name:"Gare Lachine"},
  { id: "DVL2-1",status:"offline", top: 61.242, left: 36.25, name:"Gare Dorval"},
  { id: "DVL1-1",status:"offline", top: 61.242, left: 33.7, name:"Gare Pine Beach"},
  { id: "PCL2-1",status:"offline", top: 61.242, left: 33.7, name:"Gare Valois"},
  { id: "PCL2-1",status:"offline", top: 61.242, left: 28.75, name:"Gare Pointe-Claire"},
  { id: "PCL1-1",status:"offline", top: 61.242, left: 26.1, name:"Gare Cedar Park"},
  { id: "BEA2-1",status:"offline", top: 61.242, left: 23.5, name:"Gare Beaconsfield"},
  { id: "BEA1-1",status:"offline", top: 61.242, left: 20.9, name:"Gare Beaurepaire"},
  { id: "BUR1-1",status:"offline", top: 61.242, left: 18.3, name:"Gare Baie-d'Urfé"},
  { id: "SAB1-1",status:"offline", top: 61.242, left: 15.7, name:"Gare Sainte-Anne-de-Bellevue"},
  { id: "LIP1-1",status:"offline", top: 61.242, left: 13.3, name:"Gare Île-Perrot"},
  { id: "TVA1-1",status:"offline", top: 61.242, left: 11.45, name:"Gare Pincourt"},
  { id: "VAU1-1",status:"offline", top: 60.8, left: 9.25, name:"Gare Dorion"},
  { id: "VAU8-1",status:"offline", top: 59.5, left: 7.4, name:"Gare Vaudreuil"},
  { id: "HUD1-1",status:"offline", top: 57.6, left: 4.7, name:"Gare Vaudreuil"},
];

export function listTrains() {

  let data = getLiveData()

  for (let index = 0; index < stop.length; index++) {
    stop[index].status = "offline"
    
  }

  for (let index = 0; index < stop.length; index++) {
   
    for (const trains of data.data.entity) {
      if (trains.vehicle.stopId == stop[index].id ) {

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