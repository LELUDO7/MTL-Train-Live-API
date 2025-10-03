// All trains stations 

export let stations = [
  // Ligne 4 Saint-Jerome
  { id: "MTL3-4", parent_id: "", status:"offline", top: 67.8, left: 67.83, name: "Gare Lucien-L'Allier"},
  { id: "MTL2-4", parent_id: "MTL3-4", status:"offline", top: 70.5, left: 60.53, name:"Gare Vendôme"},
  { id: "MTL1-4", parent_id: "MTL2-4", status:"offline", top: 70.5, left: 50.2, name:"Gare Montréal-Ouest"},
  { id: "MTL8-4", parent_id: "MTL1-4", status:"offline", top: 52.77, left: 61.7, name:"Gare Parc"},
  { id: "MTL37-4", parent_id: "MTL8-4", status:"offline", top: 49.6, left: 58.5, name:"Gare Chabanel"},
  { id: "MTL7-4", parent_id: "MTL37-4", status:"offline", top: 47.1, left: 56, name:"Gare Bois-de-Boulogne"},
  { id: "LVL24-4", parent_id: "MTL7-4", status:"offline", top: 42.07, left: 53.55, name:"Gare De la Concorde"},
  { id: "LVL22-4", parent_id: "LVL24-4", status:"offline", top: 37.3, left: 53.55, name:"Gare Vimont"},
  { id: "LVL4-4", parent_id: "LVL22-4", status:"offline", top: 32.3, left: 53.55, name:"Gare Sainte-Rose"},
  { id: "ROS2-4", parent_id: "LVL4-4", status:"offline", top: 28.95, left: 51.2, name:"Gare Rosemère"},
  { id: "STR4-4", parent_id: "ROS2-4", status:"offline", top: 27.15, left: 49.4, name:"Gare Sainte-Thérèse"},
  { id: "BLA1-4", parent_id: "STR4-4", status:"offline", top: 25.5, left: 47.7, name:"Gare Blainville"},
  { id: "MIR1-4", parent_id: "BLA1-4", status:"offline", top: 23.6, left: 45.8, name:"Gare Mirabel"},
  { id: "SJM1-4", parent_id: "MIR1-4", status:"offline", top: 20.85, left: 43.1, name:"Gare Saint-Jérôme"},

  // Ligne 1 Vaudreuil Hudson
  { id: "MTL3-1", parent_id: "", status:"offline", top: 68.3, left: 68.4, name: "Gare Lucien-L'Allier"},
  { id: "MTL2-1", parent_id: "MTL3-1", status:"offline", top: 71.2, left: 60.53, name:"Gare Vendôme"},
  { id: "MTL1-1", parent_id: "MTL2-1", status:"offline", top: 71.2, left: 50.2, name:"Gare Montréal-Ouest"},
  { id: "LCH1-1", parent_id: "MTL1-1", status:"offline", top: 65.85, left: 38.71, name:"Gare Lachine"},
  { id: "DVL2-1", parent_id: "LCH1-1", status:"offline", top: 65.85, left: 36.25, name:"Gare Dorval"},
  { id: "DVL1-1", parent_id: "DVL2-1", status:"offline", top: 65.85, left: 33.7, name:"Gare Pine Beach"},
  { id: "PCL3-1", parent_id: "DVL1-1", status:"offline", top: 65.85, left: 31.2, name:"Gare Valois"},
  { id: "PCL2-1", parent_id: "PCL3-1", status:"offline", top: 65.85, left: 28.75, name:"Gare Pointe-Claire"},
  { id: "PCL1-1", parent_id: "PCL2-1", status:"offline", top: 65.85, left: 26.1, name:"Gare Cedar Park"},
  { id: "BEA2-1", parent_id: "PCL1-1", status:"offline", top: 65.85, left: 23.5, name:"Gare Beaconsfield"},
  { id: "BEA1-1", parent_id: "BEA2-1", status:"offline", top: 65.85, left: 20.9, name:"Gare Beaurepaire"},
  { id: "BUR1-1", parent_id: "BEA1-1", status:"offline", top: 65.85, left: 18.3, name:"Gare Baie-d'Urfé"},
  { id: "SAB1-1", parent_id: "BUR1-1", status:"offline", top: 65.85, left: 15.7, name:"Gare Sainte-Anne-de-Bellevue"},
  { id: "LIP1-1", parent_id: "SAB1-1", status:"offline", top: 65.85, left: 13.3, name:"Gare Île-Perrot"},
  { id: "TVA1-1", parent_id: "LIP1-1", status:"offline", top: 65.85, left: 11.45, name:"Gare Pincourt"},
  { id: "VAU1-1", parent_id: "TVA1-1", status:"offline", top: 65.2, left: 9.25, name:"Gare Dorion"},
  { id: "VAU8-1", parent_id: "VAU1-1", status:"offline", top: 63.4, left: 7.4, name:"Gare Vaudreuil"},
  { id: "HUD1-1", parent_id: "VAU8-1", status:"offline", top: 60.58, left: 4.7, name:"Gare Hudson"},

  // Ligne 5 Candiac
  { id: "MTL3-5", parent_id: "", status:"offline", top: 68.8, left: 68.9, name: "Gare Lucien-L'Allier"},
  { id: "MTL2-5", parent_id: "MTL3-5", status:"offline", top: 71.9, left: 60.53, name:"Gare Vendôme"},
  { id: "MTL1-5", parent_id: "MTL2-5", status:"offline", top: 71.9, left: 50.2, name:"Gare Montréal-Ouest"},
  { id: "LCH4-5", parent_id: "MTL1-5", status:"offline", top: 76, left: 47.9, name:"Gare Du Canal"},
  { id: "LSL1-5", parent_id: "LCH4-5", status:"offline", top: 78.65, left: 47.9, name:"Gare LaSalle"},
  { id: "SCS2-5", parent_id: "LSL1-5", status:"offline", top: 85, left: 52, name:"Gare Sainte-Catherin"},
  { id: "SCS1-5", parent_id: "SCS2-5", status:"offline", top: 86.8, left: 53.8, name:"Saint-Constant"},
  { id: "DEL1-5", parent_id: "SCS1-5", status:"offline", top: 88.6, left: 55.6, name:"Gare Delson"},
  { id: "CAN1-5", parent_id: "DEL1-5", status:"offline", top: 90.3, left: 57.3, name:"Gare Candiac"},

  // Ligne 3 Mont Saint-Hilaire 
  { id: "MTL5-3", parent_id: "", status:"offline", top: 65.9, left: 70.4, name: "Gare Central"},
  { id: "STL1-3", parent_id: "MTL5-3", status:"offline", top: 67.5, left: 83.45, name: "Saint-Lambert"},
  { id: "STH3-3", parent_id: "STL1-3", status:"offline", top: 65.6, left: 85.3, name: "Longueuil-Saint-Hubert"},
  { id: "STB2-3", parent_id: "STH3-3", status:"offline", top: 63.9, left: 87.02, name: "Saint-Bruno"},
  { id: "SBA2-3", parent_id: "STB2-3", status:"offline", top: 62.1, left: 88.85, name: "Saint-Basile-le-Grand"},
  { id: "MMS1-3", parent_id: "SBA2-3", status:"offline", top: 60.4, left: 90.6, name: "McMasterville"},
  { id: "MSH1-3", parent_id: "MMS1-3", status:"offline", top: 58.65, left: 92.3, name: "Mont-Saint-Hilaire"},

  // Ligne 6 Mascouche  
  { id: "MTL5-6", parent_id: "", status:"offline", top: 66.6, left: 69.8, name: "Gare Central"},
  { id: "MTL59-6", parent_id: "MTL5-6", status:"offline", top: 49.6, left: 57.17, name: "Gare Ahuntsic"},
  { id: "MTL58-6", parent_id: "MTL59-6", status:"offline", top: 46.3, left: 60.43, name: "Gare Sauvé"},
  { id: "MTL57-6", parent_id: "MTL58-6", status:"offline", top: 38.5, left: 68.25, name: "Gare Saint-Michel-Montréal-Nord"},
  { id: "MTL56-6", parent_id: "MTL57-6", status:"offline", top: 35.5, left: 71.13, name: "Gare Saint-Léonard-Montréal-Nord"},
  { id: "MTL55-6", parent_id: "MTL56-6", status:"offline", top: 34.6, left: 75.86, name: "Gare Anjou"},
  { id: "MTL54-6", parent_id: "MTL55-6", status:"offline", top: 29.5, left: 82.25, name: "Gare Rivière-des-Prairies"},
  { id: "MTL53-6", parent_id: "MTL54-6", status:"offline", top: 28.4, left: 86.09, name: "Gare Pointe-aux-Trembles"},
  { id: "LEG1-6", parent_id: "MTL53-6", status:"offline", top: 21.1, left: 90.81, name: "Gare Repentigny"},
  { id: "LCN1-6", parent_id: "LEG1-6", status:"offline", top: 21.1, left: 85.84, name: "Gare Terrebonne"},
  { id: "MAS1-6", parent_id: "LCN1-6", status:"offline", top: 21.1, left: 80.93, name: "Gare Mascouche"},
  
];