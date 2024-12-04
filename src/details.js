function GetDetailsCard(array,mainContainer,id){   
    let container = mainContainer;
    if(container){
        let title = document.getElementById('title');
        let img =  document.getElementById('Preview');
        let description = document.getElementById('describe');
        let equipement = document.getElementById('cardContainer');
        let tarif = document.getElementById('ListOfCard');
        let commentaire = document.getElementById('Commentairebody');
        const Reserver = document.getElementById("Reserver");
        // ajouter un titre à la page
        title.innerHTML = `
        <h1 class="text-xl md:text-3xl text-left font-bold">${array[id].name}</h1>
        <span class="text-sm font-semibold text-blue-500">${array[id].adresse} Très bonne emplacement</span>
        <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
         <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
         <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
     </div>
        `;
       
        // ajouter les images
        img.innerHTML = `<img src="${array[id].image}" class="w-full h-[250px] md:h-[400px] w- rounded-xl object-cover">`;
        
        // ajouter une description
        description.innerHTML =`<p class="line-clamp-[10] md:line-clamp-none text-justify">${array[id].description}</p>`;
    
        // ajouter les cartes contenants les équipements
        EquipementCard(array[id].equipement,equipement);
    
        //ajouter les tarifs 
        ReservationCard(array[id],tarif)
    
        //ajouter les commentaires 
        CommentaireCard(array,commentaire);
    }
  }
  function EquipementCard(array,htmlContainer){
    let mainContainer = htmlContainer;
    if(mainContainer){
      mainContainer.innerHTML = ` `;
      for(let i = 0; i < array.length; i++){
        mainContainer.innerHTML += `
                  <!-- card -->
        <div class="w-[310.5px]  bg-white md:w-[350.5px] h-[182px] mt-5 flex  gap-5 items-center border shadow rounded-2xl p-4 ">
            <!--card header-->
            <!-- card body -->
             <div class=" w-[100%] h-[100%] flex flex-col items-center justify-center">
                <h1 class="text-base font-semibold">${array[i].title}</h1>
                <p class="text-sm text-center">${array[i].description}
                </p>
             </div>
         </div>
      `
      }
    }
    }
  function ReservationCard(objet,mainCardContainer){
     let mainContainer = mainCardContainer;  
     let listArray = [];
      if(mainContainer){
        objet.equipement.forEach((data)=>{
          listArray.push(`<li class="flex font-semibold">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                   </svg>
            ${data.title}</li>`)
        });
        if(objet.reduction){
          mainContainer.innerHTML =`
          <div class="flex flex-col w-[300px] h-auto rounded-2xl p-4 border shadow  gap-3 transition-all hover:scale-90" id="">
          <div id="head" class="flex justify-between">
              <h1 class="text-2xl font-bold">Clients</h1>
              <div class="w-[80px] text-sm text-center p-1 max-w-[150px] border rounded-full font-semibold bg-blue-500 text-white shadow">Special</div>
          </div>
          <div id="priceAndDescribe">
              <h1 class="text-3xl font-bold"><span class="line-through font-light">${objet.price}</span> ${(objet.price - ((objet.price * objet.reduction)/100) )} $</h1>
              <p class="text-sm text-gray-500 font-semibold ">Vous beneficiarais de quelques avantages liées à votre commande</p>
          </div>
          <div id="Avantage">
              <ul>
              ${listArray}
              </ul>
          </div>
          
        </div>
        <div class="flex flex-col w-[300px] h-auto rounded-2xl p-4 border shadow  gap-3 transition-all hover:scale-90" id="">
          <div id="head" class="flex justify-between">
              <h1 class="text-2xl font-bold">Clients</h1>
              <div class="w-[80px] text-sm text-center p-1 max-w-[150px] border rounded-full font-semibold bg-blue-500 text-white shadow">Special</div>
          </div>
          <div id="priceAndDescribe">
              <h1 class="text-3xl font-bold"><span class="line-through font-light">${(objet.price)*2}</span> ${((objet.price)*2) - (((objet.price *2) * objet.reduction)/100) } $<span class="text-xl font-semibold">/2jours</span></h1>
              <p class="text-sm text-gray-500 font-semibold ">Vous beneficiarais de quelques avantages liées à votre commande</p>
          </div>
          <div id="Avantage">
              <ul>
              ${listArray}
              </ul>
          </div>
        </div>
          `
        }
        else{
          mainContainer.innerHTML =`
          <div class="flex flex-col mt-11 w-[300px] h-auto rounded-2xl p-4 border shadow  gap-3 transition-all hover:scale-90" id="">
          <div id="head" class="flex justify-between">
              <h1 class="text-2xl font-bold">Clients</h1>
              <div class="w-[80px] text-sm text-center p-1 max-w-[150px] border rounded-full font-semibold bg-blue-500 text-white shadow">Special</div>
          </div>
          <div id="priceAndDescribe">
              <h1 class="text-3xl font-bold">${objet.price}$</h1>
              <p class="text-sm text-gray-500 font-semibold ">Vous beneficiarais de quelques avantages liées à votre commande</p>
          </div>
          <div id="Avantage">
              <ul>
              ${listArray}
              </ul>
          </div>
        </div>
        <div class="flex flex-col mt-11 w-[300px] h-auto rounded-2xl p-4 border shadow  gap-3 transition-all hover:scale-90" id="">
        <div id="head" class="flex justify-between">
            <h1 class="text-2xl font-bold">Clients</h1>
            <div class="w-[80px] text-sm text-center p-1 max-w-[150px] border rounded-full font-semibold bg-blue-500 text-white shadow">Special</div>
        </div>
        <div id="priceAndDescribe">
            <h1 class="text-3xl font-bold">${objet.price*2}$</h1>
            <p class="text-sm text-gray-500 font-semibold ">Vous beneficiarais de quelques avantages liées à votre commande</p>
        </div>
        <div id="Avantage">
            <ul>
            ${listArray}
            </ul>
        </div>
      </div>
          `
        }
      }
     
    }
  function CommentaireCard(array,mainCardContainer){
      let mainContainer = mainCardContainer; 
      if(mainContainer){
        mainContainer.innerHTML =` `; 
      for(let i=array.length-1; i < array.length; i++){
           mainContainer.innerHTML +=`
            <div class="w-[310.5px] bg-white md:w-[300.5px] h-[200px] mt-5 flex flex-col  items-center border shadow rounded-2xl p-4 transition-all hover:scale-90 ">
            <!--card header-->
            <div class="flex gap-5 items-center w-[100%] h-[40%]">
               <div class="w-[30px] h-[30px] rounded-3xl bg-red-500 p-5 flex justify-center items-center text-lg font-semibold text-white">JB</div>
                <h1 class="text-base font-semibold">Jafred Bukulu</h1>
                <hr>
            </div>
            
            <!-- card body -->
             <div class=" w-[100%] h-[50%] flex flex-col items-center justify-center">
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis sit fuga similique commodi earum iste reprehenderit dolorum quibusdam ipsa?
                </p>
             </div>
         </div>
           `
    
      }
      }
    }

// recuperation de salle dans le storage
const array_salle = localStorage.getItem('salleList');
const arraySalle = JSON.parse(array_salle);
const Details =document.getElementById('Details');  
// recuperer l'url 
const url = new URL(window.location.href);

// Utilisation de URLSearchParams pour extraire les paramètres 
const params = new URLSearchParams(url.search);

// recuperer les info dans l'url
 const id = params.get('id');

 // afficher les details
 GetDetailsCard(arraySalle,Details,id)
