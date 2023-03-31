const requestUrl = "./json/profesions.json";

async function fetchProfesionsJson() {
  const response = await fetch(requestUrl);
  const profesions = await response.json();
  return profesions;
}

fetchProfesionsJson().then((profesions) => {
  for (let index = 0; index < profesions.Bakery.length; index++) {
    const bakerySection = document.getElementById("BakerySection");

    let id = profesions.Bakery[index].id;
    let name = profesions.Bakery[index].name;
    let ingredients = profesions.Bakery[index].ingredients;
    let product = profesions.Bakery[index].return;
    let tool = profesions.Bakery[index].Tool;
    let profesion = profesions.Bakery[index].Tool

    bakerySection.innerHTML += `
 
    <div class="card";">
  
        <div class="card-body">
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${ingredients}</td>
                <td>${product}</td>
                <td>${tool}</td
                <td>${profesion}</td>
            </tr>
        </div>
    </div>
      
      `;
  }
})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Blacksmith.length; index++) {
      const blacksmithSection = document.getElementById("BlacksmithSection");
  
      let id = profesions.Blacksmith[index].id;
      let name = profesions.Blacksmith[index].name;
      let ingredients = profesions.Blacksmith[index].ingredients;
      let product = profesions.Blacksmith[index].return;
      let tool = profesions.Blacksmith[index].Tool;
      let profesion = profesions.Blacksmith[index].Tool
  
      blacksmithSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Breeder.length; index++) {
      const breederSection = document.getElementById("BreederSection");
  
      let id = profesions.Breeder[index].id;
      let name = profesions.Breeder[index].name;
      let ingredients = profesions.Breeder[index].ingredients;
      let product = profesions.Breeder[index].return;
      let tool = profesions.Breeder[index].Tool;
      let profesion = profesions.Breeder[index].Tool
  
      breederSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Carpenter.length; index++) {
      const carpenterSection = document.getElementById("CarpenterSection");
  
      let id = profesions.Carpenter[index].id;
      let name = profesions.Carpenter[index].name;
      let ingredients = profesions.Carpenter[index].ingredients;
      let product = profesions.Carpenter[index].return;
      let tool = profesions.Carpenter[index].Tool;
      let profesion = profesions.Carpenter[index].Tool
  
      carpenterSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Farmer.length; index++) {
      const farmerSection = document.getElementById("FarmerSection");
  
      let id = profesions.Farmer[index].id;
      let name = profesions.Farmer[index].name;
      let ingredients = profesions.Farmer[index].ingredients;
      let product = profesions.Farmer[index].return;
      let tool = profesions.Farmer[index].Tool;
      let profesion = profesions.Farmer[index].Tool
  
      farmerSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Herbalist.length; index++) {
      const herbalistSection = document.getElementById("HerbalistSection");
  
      let id = profesions.Herbalist[index].id;
      let name = profesions.Herbalist[index].name;
      let ingredients = profesions.Herbalist[index].ingredients;
      let product = profesions.Herbalist[index].return;
      let tool = profesions.Herbalist[index].Tool;
      let profesion = profesions.Herbalist[index].Tool
  
      herbalistSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Potter.length; index++) {
      const potterSection = document.getElementById("PotterSection");
  
      let id = profesions.Potter[index].id;
      let name = profesions.Potter[index].name;
      let ingredients = profesions.Potter[index].ingredients;
      let product = profesions.Potter[index].return;
      let tool = profesions.Potter[index].Tool;
      let profesion = profesions.Potter[index].Tool
  
      potterSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})
fetchProfesionsJson().then((profesions) => {
    for (let index = 0; index < profesions.Tailor.length; index++) {
      const tailorSecion = document.getElementById("TailorSection");
  
      let id = profesions.Tailor[index].id;
      let name = profesions.Tailor[index].name;
      let ingredients = profesions.Tailor[index].ingredients;
      let product = profesions.Tailor[index].return;
      let tool = profesions.Tailor[index].Tool;
      let profesion = profesions.Tailor[index].Tool
  
      tailorSection.innerHTML += `
   
      <div class="card";">
    
          <div class="card-body">
              <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${ingredients}</td>
                  <td>${product}</td>
                  <td>${tool}</td
                  <td>${profesion}</td>
              </tr>
          </div>
      </div>
        
        `;
    }  

})


