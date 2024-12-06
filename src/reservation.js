// fonction pour ajouter les équipement
const AddEquipement = (mainContainer,ObjetSalle)=>{
    if(mainContainer){
        const container = mainContainer;
        for(let i = 0; i < ObjetSalle.equipement.length;i++){
            container.innerHTML +=`
            <li class="flex gap-x-3">
                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                        </svg>
                       ${ObjetSalle.equipement[i].title}
                      </li>`
        }
    }

}
// fonction pour ajouter le prix
const AddPriceTwoDays = (mainContainer,ObjetSalle) =>{
    if(mainContainer){
        const container = mainContainer;
        if(ObjetSalle.reduction){
            container.innerHTML = `
         <span class="text-5xl font-semibold tracking-tight text-white">${(ObjetSalle.price -((ObjetSalle.price * ObjetSalle.reduction)/100))*2}$</span>
              <span class="text-base text-gray-400">/2 days</span>
        `
        }
        else{
            container.innerHTML = `
            <span class="text-5xl font-semibold tracking-tight text-white">${(ObjetSalle.price)*2}$</span>
                 <span class="text-base text-gray-400">/2 days</span>
           `
        }
    }
}
const AddPriceOneDays = (mainContainer,ObjetSalle) =>{
    if(mainContainer){
        const container = mainContainer;
       if (ObjetSalle.reduction) {
        container.innerHTML = `
        <span class="text-5xl font-semibold tracking-tight text-gray-900">${ObjetSalle.price -((ObjetSalle.price * ObjetSalle.reduction)/100)}$</span>
             <span class="text-base text-gray-500">/1 day</span>
       `
       } else {
        container.innerHTML = `
        <span class="text-5xl font-semibold tracking-tight text-gray-900">${ObjetSalle.price}$</span>
             <span class="text-base text-gray-500">/1 day</span>
       `
       }
    }
}
// recuperer la list de salle 
const listOfSalle = JSON.parse(localStorage.getItem('salleList'));
// recuperer les élements présente dans l'url
const url  = new URL(window.location.href);
// recuperer les paramètres de l'url 
const params  = new URLSearchParams(url.search);
// recuperer les informations dont on a besoin
const id  = params.get('id')
const equipement  = Array.from(document.querySelectorAll('.equipement'));
equipement.forEach((element)=>{
   AddEquipement(element,listOfSalle[id]);
})
// ajouter le prix
const TwoDay = document.getElementById("TwoDay");
AddPriceTwoDays(TwoDay, listOfSalle[id]);

const OneDay = document.getElementById("OneDay");
AddPriceOneDays(OneDay,listOfSalle[id]);