const requestUrl = "./json/data.json";

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

let cookerEnergyFix = (WorkEnergy.get("Cooker") / goldEnergy).toFixed(2);
let blacksmithEnergyFix = (WorkEnergy.get("Blacksmith") / goldEnergy).toFixed(2);
let breederEnergyFix = (WorkEnergy.get("Breeder") / goldEnergy).toFixed(2);
let carpenterEnergyFix = (WorkEnergy.get("Carpenter") / goldEnergy).toFixed(2);
let destillerEnergyFix = (WorkEnergy.get("Destiller") / goldEnergy).toFixed(2);
let farmerEnergyFix = (WorkEnergy.get("Farmer") / goldEnergy).toFixed(2);
let herbalistEnergyFix = (WorkEnergy.get("Herbalist") / goldEnergy).toFixed(2);
let potterEnergyFix = (WorkEnergy.get("Potter") / goldEnergy).toFixed(2);
let tailorEnergyFix = (WorkEnergy.get("Tailor") / goldEnergy).toFixed(2);
let collectorEnergyFix = (WorkEnergy.get("Collector") / goldEnergy).toFixed(2);

const materials = new Map([
  ["Iron", 3],
  ["Wood", 3],
  ["Clay", 3],
  ["Sand", 3],
  ["Stone", 3],
  ["Coal", 3],
  ["Fish", 3]
]);

// let Blacksmith = materials.get("Iron") +" "+ "Iron" + " " + materials.get("Wood") +" " + "Wood" + " " + materials.get("Coal") + " " + "Coal";
//  console.log(Blacksmith)




//fetch de datos del Json

async function fetchdata() {
  try{
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
  catch{
    console.log("No esta leyendo el Json , revisa el codigo cenutrio");
  }

}

function finalPrice(Price) {
  nodeMove = (Nodes * NodeMovement) / 100;
  return  Price * base * (1 + Taxes / 100 + parseFloat(nodeMove.toFixed(2)));
}

const cities = new Map();

fetchdata().then((data) => {
  
  for (let index = 0; index < data.Cities.length; index++) {
    const citiesSection = document.getElementById("CitiesSection");
    cities.set(data.Cities[index].City, data.Cities[index].Nodes);

    citiesSection.innerHTML += `
        
        <option value="${data.Cities[index].City}">${data.Cities[index].City}</option>

        `;
        

  }

  for (let index = 0; index < data.BasePrice.length; index++) {
    base = data.BasePrice[index].Base;
    KingTax = data.BasePrice[index].KingTaxes;
    CityTax = data.BasePrice[index].CityTaxes;
    NodeMovement = data.BasePrice[index].NodeMovement;

    Taxes = KingTax + CityTax;
  }

  for (let index = 0; index < data.Bakery.length; index++) {
    const bakerySection = document.getElementById("BakerySection");
    let name = data.Bakery[index].name;
    let ingredients = data.Bakery[index].ingredients;
    let product = data.Bakery[index].return;
    let tool = data.Bakery[index].Tool;
    let profesion = data.Bakery[index].Profesion;
    let price = finalPrice(data.Bakery[index].Price) + parseFloat(cookerEnergyFix);
   
  
    bakerySection.innerHTML += `
    
      <tr>
          <td>${name}</td>
          <td>${Object.keys(ingredients)}</td>
          <td>${Object.keys(product)}</td>
          <td>${Object.keys(tool)}</td>
          <td>${profesion}</td>
          <td>${price}</td>
      
      </tr>

    `;
  }
    
  for (let index = 0; index < data.Blacksmith.length; index++) {
    const blacksmithSection = document.getElementById("BlacksmithSection");
    let name = data.Blacksmith[index].name;
    let ingredients = data.Blacksmith[index].ingredients;
    let product = data.Blacksmith[index].return;
    let tool = data.Blacksmith[index].Tool;
    let profesion = data.Blacksmith[index].Profesion;
    let price = finalPrice((data.Blacksmith[index].Price)+parseFloat(blacksmithEnergyFix));

    blacksmithSection.innerHTML += `
    
        <tr>
                <td>${name}</td>
                <td>${Object.keys(ingredients)}</td>
                <td>${Object.keys(product)}</td>
                <td>${Object.keys(tool)}</td>
                <td>${profesion}</td>
                <td>${price}</td>
        </tr>

    `;
  }
  for (let index = 0; index < data.Breeder.length; index++) {
    const breederSection = document.getElementById("BreederSection");
    let name = data.Breeder[index].name;
    let ingredients = data.Breeder[index].ingredients;
    let product = data.Breeder[index].return;
    let tool = data.Breeder[index].Tool;
    let profesion = data.Breeder[index].Profesion;
    let price = finalPrice((data.Breeder[index].Price)+parseFloat(breederEnergyFix));

    breederSection.innerHTML += `
    
        <tr>
                <td>${name}</td>
                <td>${Object.keys(ingredients)}</td>
                <td>${Object.keys(product)}</td>
                <td>${Object.keys(tool)}</td>                
                <td>${profesion}</td>
                <td>${price}</td>
        </tr>

    
    `;
  }
  for (let index = 0; index < data.Carpenter.length; index++) {
    const carpenterSection = document.getElementById("CarpenterSection");
    let name = data.Carpenter[index].name;
    let ingredients = data.Carpenter[index].ingredients;
    let product = data.Carpenter[index].return;
    let tool = data.Carpenter[index].Tool;
    let profesion = data.Carpenter[index].Profesion;
    let price = finalPrice((data.Carpenter[index].Price)+parseFloat(carpenterEnergyFix));

    carpenterSection.innerHTML += `
    
        <tr>
                <td>${name}</td>
                <td>${Object.keys(ingredients)}</td>
                <td>${Object.keys(product)}</td>
                <td>${Object.keys(tool)}</td>               
                <td>${profesion}</td>
                <td>${price}</td>
        </tr>

    
    `;
  }
  for (let index = 0; index < data.Destiller.length; index++) {
    const destillerSection = document.getElementById("DistillerSection");
    let name = data.Destiller[index].name;
    let ingredients = data.Destiller[index].ingredients;
    let product = data.Destiller[index].return;
    let tool = data.Destiller[index].Tool;
    let profesion = data.Destiller[index].Profesion;
    let price = finalPrice((data.Destiller[index].Price)+parseFloat(destillerEnergyFix));

    destillerSection.innerHTML += `
    
        <tr>
                <td>${name}</td>
                <td>${Object.keys(ingredients)}</td>
                <td>${Object.keys(product)}</td>
                <td>${Object.keys(tool)}</td>                   
                <td>${profesion}</td>
                <td>${price}</td>
        </tr>

    
    `;
  }
  for (let index = 0; index < data.Farmer.length; index++) {
    const farmerSection = document.getElementById("FarmerSection");
    let name = data.Farmer[index].name;
    let ingredients = data.Farmer[index].ingredients;
    let product = data.Farmer[index].return;
    let tool = data.Farmer[index].Tool;
    let profesion = data.Farmer[index].Profesion;
    let price = finalPrice((data.Farmer[index].Price)+parseFloat(farmerEnergyFix));

    farmerSection.innerHTML += `
    

        <tr>
            <td>${name}</td>
            <td>${Object.keys(ingredients)}</td>
            <td>${Object.keys(product)}</td>
            <td>${Object.keys(tool)}</td>                  
            <td>${profesion}</td>
            <td>${price}</td>
        </tr>

        
    `;
  }

  for (let index = 0; index < data.Herbalist.length; index++) {
    const herbalistSection = document.getElementById("HerbalistSection");
    let name = data.Herbalist[index].name;
    let ingredients = data.Herbalist[index].ingredients;
    let product = data.Herbalist[index].return;
    let tool = data.Herbalist[index].Tool;
    let profesion = data.Herbalist[index].Profesion;
    let price = finalPrice((data.Herbalist[index].Price)+parseFloat(herbalistEnergyFix));
    herbalistSection.innerHTML += `
    
        <tr>
            <td>${name}</td>
            <td>${Object.keys(ingredients)}</td>
            <td>${Object.keys(product)}</td>
            <td>${Object.keys(tool)}</td>                  
            <td>${profesion}</td>
            <td>${price}</td>
        </tr>

        
    `;
  }

  for (let index = 0; index < data.Potter.length; index++) {
    const potterSection = document.getElementById("PotterSection");
    let name = data.Potter[index].name;
    let ingredients = data.Potter[index].ingredients;
    let product = data.Potter[index].return;
    let tool = data.Potter[index].Tool;
    let profesion = data.Potter[index].Profesion;
    let price = finalPrice((data.Potter[index].Price)+parseFloat(potterEnergyFix));

    potterSection.innerHTML += `
    
        <tr>
            <td>${name}</td>
            <td>${Object.keys(ingredients)}</td>
            <td>${Object.keys(product)}</td>
            <td>${Object.keys(tool)}</td>                 
            <td>${profesion}</td>
            <td>${price}</td>
        </tr>

    
    `;
  }
  for (let index = 0; index < data.Tailor.length; index++) {
    const tailorSection = document.getElementById("TailorSection");
    let name = data.Tailor[index].name;
    let ingredients = data.Tailor[index].ingredients;
    let product = data.Tailor[index].return;
    let tool = data.Tailor[index].Tool;
    let profesion = data.Tailor[index].Profesion;
    let price = finalPrice((data.Tailor[index].Price)+parseFloat(tailorEnergyFix));

    tailorSection.innerHTML += `

        <tr>
            <td>${name}</td>
            <td>${Object.keys(ingredients)}</td>
            <td>${Object.keys(product)}</td>
            <td>${Object.keys(tool)}</td>                
            <td>${profesion}</td>
            <td>${price}</td>
        </tr>

    `;
  }

  for (let index = 0; index < data.Materials.length; index++) {
    const materialsSection = document.getElementById("MaterialsSection");
    let name = data.Materials[index].name;
    let node = data.Materials[index].node;
    let product = data.Materials[index].return;
    let material = Object.values(product);
    
    let price = finalPrice(data.Materials[index].Price+ parseFloat(collectorEnergyFix/ material).toFixed(2));

    materialsSection.innerHTML += `

        <tr>
            <td>${name}</td>
            <td>${node}</td>
            <td>${Object.keys(product)}</td>
            <td>${price}</td>
        </tr>

    `;
  }    
});
