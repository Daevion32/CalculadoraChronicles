const requestUrl = "./Json/data.json";
const configUrl = "./Json/config.json";

//Precios Base e Impuestos

let base = 0;
let KingTax = 0;
let CityTax = 0;
let City = "";
let Nodes = 0;
let Taxes = 0;
let NodeMovement = 0;

//Goberment

let gold = 5;
let energy = 56;
let glut = 20;
let goldEnergy = energy / gold;
let glutEnergy = energy / glut;

//WorkEnergy y oro ganado por trabajo

const WorkEnergy = new Map([
  ["Cooker", 12],
  ["Blacksmith", 12],
  ["Breeder", 48],
  ["Carpenter", 12],
  ["Destiller", 12],
  ["Farmer", 72],
  ["Herbalist", 12],
  ["Potter", 12],
  ["Tailor", 12],
  ["Collector", 24],
]);
  

cookerEnergy = WorkEnergy.get("Cooker") / goldEnergy;
cookerFixed = cookerEnergy.toFixed(2);
blacksmithEnergy = WorkEnergy.get("Blacksmith") / goldEnergy;
blacksmithFixed = blacksmithEnergy.toFixed(2);
breederEnergy = WorkEnergy.get("Breeder") / goldEnergy;
breederFixed = breederEnergy.toFixed(2);
carpenterEnergy = WorkEnergy.get("Carpenter") / goldEnergy;
carpenterFixed = carpenterEnergy.toFixed(2); 
destillerEnergy = WorkEnergy.get("Destiller") / goldEnergy;
destillerFixed = destillerEnergy.toFixed(2);
farmerEnergy = WorkEnergy.get("Farmer") / goldEnergy;
farmerFixed = farmerEnergy.toFixed(2);
herbalistEnergy = WorkEnergy.get("Herbalist") / goldEnergy;
herbalistFixed = herbalistEnergy.toFixed(2);
potterEnergy = WorkEnergy.get("Potter") / goldEnergy;
potterFixed = potterEnergy.toFixed(2);
tailorEnergy = WorkEnergy.get("Tailor") / goldEnergy;
tailorFixed = tailorEnergy.toFixed(2);




async function fetchconfig(){
  try {
    const response = await fetch(configUrl);
    const config = await response.json();
    return config;
  } catch {
    console.log("No esta leyendo el Json CONFIG , revisa el codigo cenutrio");
  }
}

const cities = new Map();

fetchconfig().then((config) => {
  for (let index = 0; index < config.Cities.length; index++) {
    const citiesSection = document.getElementById("CitiesSection");
    cities.set(config.Cities[index].City, config.Cities[index].Nodes);

    citiesSection.innerHTML += `
        
        <option value="${config.Cities[index].City}">${config.Cities[index].City}</option>

        `;
  }
 
  for (let index = 0; index < config.BasePrice.length; index++) {
    base = config.BasePrice[index].Base;
    KingTax = config.BasePrice[index].KingTaxes;
    CityTax = config.BasePrice[index].CityTaxes;
    NodeMovement = config.BasePrice[index].NodeMovement;
    Taxes = KingTax + CityTax;
  }
});

// Profesiones
async function fetchdata() {
  try{
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
  catch{
    console.log("No esta leyendo el Json DATA, revisa el codigo cenutrio");
  }
}



fetchdata().then((data) => {
for(line in data){
    const ActualSection = document.getElementById(line+"Section");
    data[line].forEach(element => {
      ActualSection.innerHTML +=`   
      <tr>
          <td>${element.name}</td>
          <td>${AllData(element.ingredients)}</td>
          <td>${AllData(element.return)}</td>
          <td>${AllData(element.Tool)}</td>
          <td>${element.Profesion}</td>
          <td>${finalPrice(element.Price)}</td>
      </tr>`;
    });
  }
});

function AllData(dataList){
  let DataLine = ""
  for(line in dataList){
    DataLine += dataList[line] + '-' + line + ' '
  }
  return DataLine
}

function finalPrice(Price) {
  // Formula anterior: let price = finalPrice(config.Bakery[index].Price) + parseFloat(cookerFixed); 
  nodeMove = (Nodes * NodeMovement) / 100;
  return  Price * base * (1 + Taxes / 100 + parseFloat(nodeMove.toFixed(2)));
}


