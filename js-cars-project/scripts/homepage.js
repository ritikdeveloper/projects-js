import { carscompany } from "./company.js"
import { cardata } from "./selected.js";


let dropdownmenu ='<option value="">Select a model</option>';
carscompany.forEach((carscompany) => {
    let html=`<option value="${carscompany.company}">${carscompany.company}</option>`;
    dropdownmenu+=html;
});
console.log(dropdownmenu);

document.querySelector('.cars-company').innerHTML=dropdownmenu;

let selectedCompany;
document.querySelector('.cars-company').addEventListener('change',function(){
    selectedCompany=this.value;
    updatemodels(selectedCompany)
})

function updatemodels(selectedCompany){
   let carsmenu=document.querySelector('.cars-model');
   let model=carscompany.find(car=>selectedCompany==car.company)?.model || [];
   let carmodelDropdown='<option value="">Select a model</option>';
   model.forEach((car)=>{
    let html=`<option value="${car}">${car}</option>`
    carmodelDropdown+=html;
   })
   console.log(carmodelDropdown);
   carsmenu.innerHTML=carmodelDropdown;

}
let selectedmodel;
document.querySelector('.cars-model').addEventListener('change',function(){
    selectedmodel=this.value;
})


let savebutton=document.querySelector('.save-button');
savebutton.addEventListener('click',()=>{
    let selecteddate=document.querySelector('.cars-date').value;
    cardata.push({
        carcompany:selectedCompany,
        carmodel:selectedmodel,
        cardate:selecteddate
    })
    console.log(cardata);
    localStorage.setItem('cars',JSON.stringify(cardata))  ;
})

new Promise(()=>{
    console.log('hellp')
})