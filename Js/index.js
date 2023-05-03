const requestUrl = "./json/data.json";
let base = 0
let KingTax = 0
let CityTax = 0
let City = ""; 
let Nodes = 0;
let Taxes = 0 ;
let NodeMovement = 0 ;

let gold = 5 ;
let energy = 56 ;
let glut = 20 ;
let goldEnergy = (energy / gold);
let energyGlut = (energy / glut);



async function fetchdata() {
  const response = await fetch(requestUrl);
  const data = await response.json();

  return data;

}




function nodeMove(Nodes){
    return  Nodes*(2*(NodeMovement/100))
}

function finalPrice(Price){
    return Price*base*(1+(Taxes/100)+(nodeMove(Nodes)))  
}   


fetchdata().then((data) => {

    for (let index = 0; index < data.Cities.length; index++) {

        City = data.Cities[index].City;
        Nodes = data.Cities[index].Nodes;


    } 
    for (let index = 0; index < data.BasePrice.length; index++) {
        base = data.BasePrice[index].Base;
        KingTax = data.BasePrice[index].KingTaxes;
        CityTax = data.BasePrice[index].CityTaxes;
        NodeMovement = data.BasePrice[index].NodeMovement;
       
        Taxes = KingTax + CityTax
      
    }   


  for (let index = 0; index < data.Bakery.length; index++) {
    const bakerySection = document.getElementById("BakerySection");
    let name = data.Bakery[index].name;
    let ingredients = data.Bakery[index].ingredients;
    let product = data.Bakery[index].return;
    let tool = data.Bakery[index].Tool;
    let profesion = data.Bakery[index].Profesion;
    let price = finalPrice(data.Bakery[index].Price)
   
    bakerySection.innerHTML += `
 
            <tr>
                <td>${name}</td>
                <td>${ingredients}</td>
                <td>${product}</td>
                <td>${tool}</td>
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
      let price =finalPrice(data.Blacksmith[index].Price)
  
      blacksmithSection.innerHTML += `
   
            <tr>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td>
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
      let price = finalPrice(data.Breeder[index].Price)
  
      breederSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td>                  
                  <td>${profesion}</td>
                  <td>${price}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  
    for (let index = 0; index < data.Carpenter.length; index++) {
      const carpenterSection = document.getElementById("CarpenterSection");
      let name = data.Carpenter[index].name;
      let ingredients = data.Carpenter[index].ingredients;
      let product = data.Carpenter[index].return;
      let tool = data.Carpenter[index].Tool;
      let profesion = data.Carpenter[index].Profesion;
      let price = finalPrice(data.Carpenter[index].Price)
  
      carpenterSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td>                  
                  <td>${profesion}</td>
                  <td>${price}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

    for (let index = 0; index < data.Farmer.length; index++) {
      const farmerSection = document.getElementById("FarmerSection");
      let name = data.Farmer[index].name;
      let ingredients = data.Farmer[index].ingredients;
      let product = data.Farmer[index].return;
      let tool = data.Farmer[index].Tool;
      let profesion = data.Farmer[index].Profesion;
      let price = finalPrice(data.Farmer[index].Price)
  
      farmerSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td>                  
                  <td>${profesion}</td>
                  <td>${price}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

    for (let index = 0; index < data.Herbalist.length; index++) {
      const herbalistSection = document.getElementById("HerbalistSection");
      let name = data.Herbalist[index].name;
      let ingredients = data.Herbalist[index].ingredients;
      let product = data.Herbalist[index].return;
      let tool = data.Herbalist[index].Tool;
      let profesion = data.Herbalist[index].Profesion;
      let price = finalPrice(data.Herbalist[index].Price)
  
      herbalistSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td>                  
                  <td>${profesion}</td>
                  <td>${price}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

    for (let index = 0; index < data.Potter.length; index++) {
      const potterSection = document.getElementById("PotterSection");
      let name = data.Potter[index].name;
      let ingredients = data.Potter[index].ingredients;
      let product = data.Potter[index].return;
      let tool = data.Potter[index].Tool;
      let profesion = data.Potter[index].Profesion;
      let price = finalPrice(data.Potter[index].Price)
  
      potterSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td>                  
                  <td>${profesion}</td>
                  <td>${price}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  
   for (let index = 0; index < data.Tailor.length; index++) {
      const tailorSection = document.getElementById("TailorSection");
      let name = data.Tailor[index].name;
      let ingredients = data.Tailor[index].ingredients;
      let product = data.Tailor[index].return;
      let tool = data.Tailor[index].Tool;
      let profesion = data.Tailor[index].Profesion;
      let price = finalPrice(data.Tailor[index].Price)
  
      tailorSection.innerHTML += `
        <div>
            <tr>
                
                <td>${name}</td>
                <td>${ingredients}</td>
                <td>${product}</td>
                <td>${tool}</td>                
                <td>${profesion}</td>
                <td>${price}</td>
            </tr>
        </div>  
        `;
    }  
    for (let index = 0; index < data.Materials.length; index++) {
        const materialsSection = document.getElementById("MaterialsSection");
        let name = data.Materials[index].name;
        let node = data.Materials[index].node;
        let price = finalPrice(data.Materials[index].Price)
    
        materialsSection.innerHTML += `
          <div>
              <tr>
                  
                  <td>${name}</td>
                  <td>${node}</td>
                  <td>${price}</td>
              </tr>
          </div>  
          `;
      }  

}
)

