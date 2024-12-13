
const RechercheContainer =document.getElementById('Recherche');
const btnSearchBar = document.getElementById("search");
let array_salle = localStorage.getItem('salleList');
let arraySalle = JSON.parse(array_salle);
// gerer la recherche dans le site
    const RechercheJson = localStorage.getItem('recherche');
    const rechercheSalle = JSON.parse(RechercheJson);
    // afficher les éléménts de recherche
    const Emplacement = document.getElementById("Emplacement").value = rechercheSalle.emplacement;
    const ReservationDate = document.getElementById("date").value = rechercheSalle.date;
    const Nbreplace = document.getElementById("place").value = rechercheSalle.place;
    if(Emplacement && ReservationDate && Nbreplace){
      let SalleArrayFilter = arraySalle.filter((elmt)=> (elmt.adresse.toLocaleLowerCase().includes(rechercheSalle.emplacement.toLocaleLowerCase()) && elmt.place == rechercheSalle.place ));
     // let ReservationArrayFilter = reservation.filter((elmt) => (elmt.status && elmt.date == ReservationDate));
      // ajouter les éléments de la recherche
        Sallecards(SalleArrayFilter,Recherche);
        SallecardsWithReduction(SalleArrayFilter,Recherche);
    } 
    // au cas où il modifie la recherche au click on trie l'array
    btnSearchBar.addEventListener ("click",(e)=>{
      const Nbreplace = document.getElementById("place").value;
      const ReservationDate = document.getElementById("date").value;
      const Emplacement = document.getElementById("Emplacement").value
      const Recherche = {
        emplacement:Emplacement,
        date: ReservationDate,
        place :Nbreplace
      };    
      const RechercheStringify = JSON.stringify(Recherche);
      localStorage.setItem('recherche', RechercheStringify);
      location.reload()
     })

     // afficher le details
     const ArraySalleCard = Array.from(RechercheContainer.children);
     ArraySalleCard.forEach((element)=>{
      element.addEventListener("click", ()=>{
        window.location.href = `/src/details.html?id=${element.id}`
      })
     })
   

     // fonction pour l'affichage
    function Sallecards(array,htmlContainer){

      let main_card_container =htmlContainer;
     if(main_card_container){
      for (let i = 0; i< array.length; i++){
        if(!array[i].reduction){
        main_card_container.innerHTML += `
          <div class="swiper-slide cursor-pointer min-w-[180px] w-[180px] md:min-w-[278px] md:w-[278px] h-[270px] md:h-[300px] rounded-2xl p-2 md:p-4 border shadow  gap-5 transition-all hover:scale-90" id="${i}">
            
            <div id="img">
                <img class="h-[100px] w-full md:w-[278px] md:h-[150px] rounded-xl object-cover flex flex-col gap-3" src="${array[i].image}" alt="">
            </div>
            <div id="body_Card">
                <h1 class="text-xl md:text-xl font-bold line-clamp-1">${array[i].name}</h1> 
                <div class="flex flex-col md:items-center md:flex-row md:justify-between md:text-xl font-semibold" id="svg">
                    <h1 class="text-lg md:text-2xl font-bold">${array[i].price}$</h1>
                    <div class="flex gap-2">
                        4.5 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    
                </div>
    
                <p id="description" class="line-clamp-2 md:text-sm font-semibold text-gray-500">
                ${array[i].description}
                </p>
            </div>
        </div>
        `
      }
      }
     }
    }
    function SallecardsWithReduction(array,htmlContainer){
      let main_card_container =htmlContainer;
      if(main_card_container){
      for (let i = 0; i< array.length; i++){
        if(array[i].reduction){
        
        main_card_container.innerHTML += `
          <div class="swiper-slide cursor-pointer min-w-[180px] w-[180px] md:min-w-[278px] md:w-[278px]  h-[270px] md:h-[300px] rounded-2xl p-2 md:p-4 border shadow  gap-5 transition-all hover:scale-90" id="${i}">
            
            <div id="img">
              <img class="h-[100px] w-full md:w-[278px] md:h-[150px] rounded-xl object-cover flex flex-col gap-3" src="${array[i].image}" alt="">
            </div>
            <div id="body_Card">
                <h1 class="text-xl md:text-xl font-bold line-clamp-1">${array[i].name}</h1> 
                <div class="flex flex-col md:items-center md:flex-row md:justify-between md:text-xl font-semibold" id="svg">
                    <h1 class="flex gap-3 text-lg md:text-2xl font-bold"><span class="line-through font-light">${array[i].price}</span> ${array[i].price-((array[i].price*array[i].reduction)/100)} $</h1>
                    <div class="flex gap-2">
                        4.5 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    
                </div>
    
                <p id="description" class="line-clamp-2 md:text-sm font-semibold text-gray-500">
                ${array[i].description}
                </p>
            </div>
        </div>
        `
      }
      }
      }
    }
    