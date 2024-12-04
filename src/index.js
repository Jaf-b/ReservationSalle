// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, DocumentReference, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithRedirect, onAuthStateChanged, linkWithRedirect, signInWithEmailLink, signInWithCredential, sendSignInLinkToEmail  } from 'firebase/auth'
import Swiper from "swiper";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkY20t0F4GqU9LbyV79Yiue_rlrutNxvc",
  authDomain: "reservationsalle-e1692.firebaseapp.com",
  projectId: "reservationsalle-e1692",
  storageBucket: "reservationsalle-e1692.appspot.com",
  messagingSenderId: "507980630667",
  appId: "1:507980630667:web:bbca534ca4aba6505ae28e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const salle = collection(db,'salle_de_fete');
const login = document.getElementById('login');
const provider = new GoogleAuthProvider();
const AddSalle = document.getElementById("AddSalle");
const google_login = document.getElementById('googleSignIn');
const idClient = document.getElementById("idClient")
const signup = document.getElementById('signup');
const home =document.getElementById('home'); 
const main =document.getElementById('main'); 
const Recherche =document.getElementById('Recherche'); 
const loginBtns = document.getElementById("connexion")
const connexion =document.getElementById('Seconnecter'); 
const inscription =document.getElementById('inscription'); 
const search = document.getElementById("searchBar");
const btnLogin = document.getElementById("login");
const btnSignUp = document.getElementById("signUp");
const btnSearchBar = document.getElementById("search");
const SignOut = document.getElementById('SignOut');
const salleCardContainer = document.getElementById("SalleCards");
const loginPopup = document.getElementById("popup");
const  popupSection = document.getElementById("loginPopup");
const closePopup = document.getElementById("close");
const TeamCardContainer = document.getElementById("containerUS");
const SalleCardsReduction =document.getElementById("SalleCardsReduction");
const reductionCards =document.getElementById("reductionCards"); 
const Reserver = document.getElementById("Reserver");
const cancelReservationPopup = document.getElementById("cancel");
const aboutUs = document.getElementById("aboutUs");
//array de salle et de reservation
let TeamInfo =[
  {
    img:"/assets/img/JAf.jpg",
    name:"Jafred Bukulu",
    profession:"Frontend Developper"
  },
  {
    img:"/assets/img/Joyeux.jpg",
    name:"Joyeux Kashunju",
    profession:"Backend Developper"
  },
  {
    img: "/assets/img/Ghis.jpg",
    name:"Ghislain Abedi",
    profession:"Frontend Developper"
  },
  {
    img:"/assets/img/DON.jpg",
    name:"Don Cishibanji",
    profession:"Frontend Developper"
  },
  {
    img:"/assets/img/momo.jpg",
    name:"Moise Kapapa",
    profession:"Designer Web"
  }
  
];
let array_salle = [

  {
    image:"https://firebasestorage.googleapis.com/v0/b/reservationsalle-e1692.appspot.com/o/image%20belvedere%201.JPG?alt=media&token=71c73de0-1817-4c8c-945d-911e9005bec1",
    name :"salle Hotel Residence",
    adresse:"avenue P.E Lumumba",
    price: 500,
    reduction:15,
    place:500,
    reservation : 1,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste voluptatum sapiente numquam possimus eaque necessitatibus rem similique, a vitae adipisci corporis quaerat natus atque facilis vero minima eveniet? Nostrum molestiae voluptatum nesciunt ratione rem, aspernatur veniam ipsa veritatis ut optio dolore rerum, consequuntur repellat repudiandae, nulla quo accusantium ullam. Cum, corporis illum, mollitia dolores quisquam impedit repellat quis dolore nesciunt reprehenderit iste placeat sed. Voluptates maiores dolorem libero. Vero repudiandae corporis aliquid enim iure suscipit ab fuga minima nam dicta aut, esse nostrum non commodi at dolorem rem cum perspiciatis. Sapiente ad maxime est deleniti maiores error molestias temporibus inventore commodi magni, illo quis aut ipsam. Laboriosam omnis minima, placeat cumque reiciendis odit. Laboriosam aspernatur voluptas maiores expedita amet repellendus debitis accusantium rem quasi. Ullam sunt voluptatum excepturi odit nostrum mollitia voluptatem animi neque nemo harum et, rem velit obcaecati atque enim delectus vero beatae eos optio. Quis excepturi explicabo nisi repellat ullam nostrum commodi assumenda, enim consequuntur dolore aliquid est quos officia, ipsam quas maiores ab voluptate inventore at. Hic, ipsum ut deleniti sunt ipsa mollitia nobis eligendi pariatur inventore autem amet velit ullam vero modi ipsam doloribus odit. Earum sapiente atque minima numquam, expedita aspernatur porro fugit.",
    equipement: [
      {
        title: 'Enceintes',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      },
      {
        title: 'Dépôt et Refrigerateur',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      }
      
    ]
  },
  {
    image:"assets/img/lieu-reception-mariage3-ostap-davydiak-stockadobe-com.jpg",
    name :"salle Hotel Belvedere",
    adresse:"avenue P.E Lumumba",
    price: 500,
    place:500,
    reduction:15,
    reservation :2,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste voluptatum sapiente numquam possimus eaque necessitatibus rem similique, a vitae adipisci corporis quaerat natus atque facilis vero minima eveniet? Nostrum molestiae voluptatum nesciunt ratione rem, aspernatur veniam ipsa veritatis ut optio dolore rerum, consequuntur repellat repudiandae, nulla quo accusantium ullam. Cum, corporis illum, mollitia dolores quisquam impedit repellat quis dolore nesciunt reprehenderit iste placeat sed. Voluptates maiores dolorem libero. Vero repudiandae corporis aliquid enim iure suscipit ab fuga minima nam dicta aut, esse nostrum non commodi at dolorem rem cum perspiciatis. Sapiente ad maxime est deleniti maiores error molestias temporibus inventore commodi magni, illo quis aut ipsam. Laboriosam omnis minima, placeat cumque reiciendis odit. Laboriosam aspernatur voluptas maiores expedita amet repellendus debitis accusantium rem quasi. Ullam sunt voluptatum excepturi odit nostrum mollitia voluptatem animi neque nemo harum et, rem velit obcaecati atque enim delectus vero beatae eos optio. Quis excepturi explicabo nisi repellat ullam nostrum commodi assumenda, enim consequuntur dolore aliquid est quos officia, ipsam quas maiores ab voluptate inventore at. Hic, ipsum ut deleniti sunt ipsa mollitia nobis eligendi pariatur inventore autem amet velit ullam vero modi ipsam doloribus odit. Earum sapiente atque minima numquam, expedita aspernatur porro fugit.",
    equipement: [
      {
        title: 'Enceintes',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      },
      {
        title: 'Dépôt et Refrigerateur',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      }
      
    ]
  },
  {
    image:"assets/img/lieu-reception-mariage3-ostap-davydiak-stockadobe-com.jpg",
    name :"salle Hotel Elizabeth",
    adresse:"avenue P.E Lumumba",
    price: 500,
    place:300,
    reduction:15,
    reservation:3,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste voluptatum sapiente numquam possimus eaque necessitatibus rem similique, a vitae adipisci corporis quaerat natus atque facilis vero minima eveniet? Nostrum molestiae voluptatum nesciunt ratione rem, aspernatur veniam ipsa veritatis ut optio dolore rerum, consequuntur repellat repudiandae, nulla quo accusantium ullam. Cum, corporis illum, mollitia dolores quisquam impedit repellat quis dolore nesciunt reprehenderit iste placeat sed. Voluptates maiores dolorem libero. Vero repudiandae corporis aliquid enim iure suscipit ab fuga minima nam dicta aut, esse nostrum non commodi at dolorem rem cum perspiciatis. Sapiente ad maxime est deleniti maiores error molestias temporibus inventore commodi magni, illo quis aut ipsam. Laboriosam omnis minima, placeat cumque reiciendis odit. Laboriosam aspernatur voluptas maiores expedita amet repellendus debitis accusantium rem quasi. Ullam sunt voluptatum excepturi odit nostrum mollitia voluptatem animi neque nemo harum et, rem velit obcaecati atque enim delectus vero beatae eos optio. Quis excepturi explicabo nisi repellat ullam nostrum commodi assumenda, enim consequuntur dolore aliquid est quos officia, ipsam quas maiores ab voluptate inventore at. Hic, ipsum ut deleniti sunt ipsa mollitia nobis eligendi pariatur inventore autem amet velit ullam vero modi ipsam doloribus odit. Earum sapiente atque minima numquam, expedita aspernatur porro fugit.",
    equipement: [
      {
        title: 'Enceintes',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      },
      {
        title: 'Dépôt et Refrigerateur',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      }
      
    ]
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/reservationsalle-e1692.appspot.com/o/image%20salle%20rafiki.JPG?alt=media&token=d0a29cd9-74b0-406d-a047-b104bb72b534",
    name :"salle de Fête Kaningu",
    adresse:"avenue P.E Lumumba",
    price: 500,
    place:300,
    reduction:false,
    reservation:4,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste voluptatum sapiente numquam possimus eaque necessitatibus rem similique, a vitae adipisci corporis quaerat natus atque facilis vero minima eveniet? Nostrum molestiae voluptatum nesciunt ratione rem, aspernatur veniam ipsa veritatis ut optio dolore rerum, consequuntur repellat repudiandae, nulla quo accusantium ullam. Cum, corporis illum, mollitia dolores quisquam impedit repellat quis dolore nesciunt reprehenderit iste placeat sed. Voluptates maiores dolorem libero. Vero repudiandae corporis aliquid enim iure suscipit ab fuga minima nam dicta aut, esse nostrum non commodi at dolorem rem cum perspiciatis. Sapiente ad maxime est deleniti maiores error molestias temporibus inventore commodi magni, illo quis aut ipsam. Laboriosam omnis minima, placeat cumque reiciendis odit. Laboriosam aspernatur voluptas maiores expedita amet repellendus debitis accusantium rem quasi. Ullam sunt voluptatum excepturi odit nostrum mollitia voluptatem animi neque nemo harum et, rem velit obcaecati atque enim delectus vero beatae eos optio. Quis excepturi explicabo nisi repellat ullam nostrum commodi assumenda, enim consequuntur dolore aliquid est quos officia, ipsam quas maiores ab voluptate inventore at. Hic, ipsum ut deleniti sunt ipsa mollitia nobis eligendi pariatur inventore autem amet velit ullam vero modi ipsam doloribus odit. Earum sapiente atque minima numquam, expedita aspernatur porro fugit.",
    equipement: [
      {
        title: 'Enceintes',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      },
      {
        title: 'Dépôt et Refrigerateur',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      }
      
    ]
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/reservationsalle-e1692.appspot.com/o/image%20elisabeth%202.JPG?alt=media&token=8012e83c-4671-4282-aebf-eeff4f39eefa",
    name :"salle Hotel Panorama",
    adresse:"avenue P.E Lumumba",
    price: 500,
    place:700,
    reduction:false,
    reservation :5,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste voluptatum sapiente numquam possimus eaque necessitatibus rem similique, a vitae adipisci corporis quaerat natus atque facilis vero minima eveniet? Nostrum molestiae voluptatum nesciunt ratione rem, aspernatur veniam ipsa veritatis ut optio dolore rerum, consequuntur repellat repudiandae, nulla quo accusantium ullam. Cum, corporis illum, mollitia dolores quisquam impedit repellat quis dolore nesciunt reprehenderit iste placeat sed. Voluptates maiores dolorem libero. Vero repudiandae corporis aliquid enim iure suscipit ab fuga minima nam dicta aut, esse nostrum non commodi at dolorem rem cum perspiciatis. Sapiente ad maxime est deleniti maiores error molestias temporibus inventore commodi magni, illo quis aut ipsam. Laboriosam omnis minima, placeat cumque reiciendis odit. Laboriosam aspernatur voluptas maiores expedita amet repellendus debitis accusantium rem quasi. Ullam sunt voluptatum excepturi odit nostrum mollitia voluptatem animi neque nemo harum et, rem velit obcaecati atque enim delectus vero beatae eos optio. Quis excepturi explicabo nisi repellat ullam nostrum commodi assumenda, enim consequuntur dolore aliquid est quos officia, ipsam quas maiores ab voluptate inventore at. Hic, ipsum ut deleniti sunt ipsa mollitia nobis eligendi pariatur inventore autem amet velit ullam vero modi ipsam doloribus odit. Earum sapiente atque minima numquam, expedita aspernatur porro fugit.",
    equipement: [
      {
        title: 'Enceintes',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      },
      {
        title: 'Dépôt et Refrigerateur',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      }
      
    ]
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/reservationsalle-e1692.appspot.com/o/image%20chapiteau%202.JPG?alt=media&token=1b466940-bd9f-47fd-9a88-40e48377c0a9",
    name :"salle Hotel Rivieras",
    adresse:"avenue P.E Lumumba",
    price: 500,
    place:350,
    reduction:false,
    reservation:6,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste voluptatum sapiente numquam possimus eaque necessitatibus rem similique, a vitae adipisci corporis quaerat natus atque facilis vero minima eveniet? Nostrum molestiae voluptatum nesciunt ratione rem, aspernatur veniam ipsa veritatis ut optio dolore rerum, consequuntur repellat repudiandae, nulla quo accusantium ullam. Cum, corporis illum, mollitia dolores quisquam impedit repellat quis dolore nesciunt reprehenderit iste placeat sed. Voluptates maiores dolorem libero. Vero repudiandae corporis aliquid enim iure suscipit ab fuga minima nam dicta aut, esse nostrum non commodi at dolorem rem cum perspiciatis. Sapiente ad maxime est deleniti maiores error molestias temporibus inventore commodi magni, illo quis aut ipsam. Laboriosam omnis minima, placeat cumque reiciendis odit. Laboriosam aspernatur voluptas maiores expedita amet repellendus debitis accusantium rem quasi. Ullam sunt voluptatum excepturi odit nostrum mollitia voluptatem animi neque nemo harum et, rem velit obcaecati atque enim delectus vero beatae eos optio. Quis excepturi explicabo nisi repellat ullam nostrum commodi assumenda, enim consequuntur dolore aliquid est quos officia, ipsam quas maiores ab voluptate inventore at. Hic, ipsum ut deleniti sunt ipsa mollitia nobis eligendi pariatur inventore autem amet velit ullam vero modi ipsam doloribus odit. Earum sapiente atque minima numquam, expedita aspernatur porro fugit.",
    equipement: [
      {
        title: 'Enceintes',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      },
      {
        title: 'Dépôt et Refrigerateur',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore assumenda exercitationem expedita maxime nam placeat possimus ipsum delectus vero?"
      }
      
    ]
  },
];
const arrayStringify = JSON.stringify(array_salle);
localStorage.setItem("salleList",arrayStringify)

let arrayReductionCard = [
  {
    title: "Économisez au moins 15 % avec les Offres de Fin d'Année",
    describe: "Explorez des milliers de destinations et économisez au moins 15 %.",
    btnTitle: "Trouver des Offres de Fin d'Année"
  }
]
let reservation = [];

// carrousel Team info
const PrecendentTeamCard = document.getElementById("TeamCardpre");
const SuivantTeamCard = document.getElementById("TeamCardsui");

// carousel salle card
const PrecendentSalleCard = document.getElementById("SalleCardpre");
const SuivantSalleCard = document.getElementById("SalleCardsui");

// carousel salle reduction card
const PrecendentSalleReductionCard = document.getElementById("SalleReductionCardpre");
const SuivantSalleReductionCard = document.getElementById("SalleReductionCardsui");

// page de connexion
  if(login){
    login.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('LoginEmail').value;
      const password = document.getElementById('LoginPassword').value;
    
     signInWithEmailAndPassword(auth,email,password).then((result) => {
      const user = result.user;
      console.log('User signed in:', user);
      
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error.message);
    });
    });
  }
  if(google_login){
      // connexion avec google
  google_login.addEventListener('click', (e) => {
    signInWithPopup(auth, provider).then(async (result) => {
      window.location.href = "/index.html";
        const uid = result.user.uid;
        const displayName = result.user.displayName;
        const email = result.user.email;
        const phoneNumber=result.user.phoneNumber;
        const userDocRef = doc(db,'salleUser',user.uid);
        const userDoc = await getDoc(userDocRef);
        if(!userDoc.exists()){
          newUser({displayName,email,uid,phoneNumber})
        }
        
        
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error.message);
      });
  });
  }
  if(signup){
    // inscription 
  signup.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('Registrationemail').value;
    const password = document.getElementById('Registrationpassword').value;
    const displayName =document.getElementById('RegistrationName').value;
    const phoneNumber =document.getElementById('RegistrationNumber').value;
    createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
        // Signed up
        const uid = userCredential.user.uid;
        newUser({displayName,email,uid,phoneNumber});
        window.location.href = "/index.html";
        sendSignInLinkToEmail(auth,email);
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
      });
  });
  }

  // function if login
  onAuthStateChanged(auth, async(user)=>{
    if(user){
      // verifier l'utilisateur;
      if(Reserver){
        Reserver.addEventListener("click", () =>
          {
           const ReservationPopup = document.getElementById("ReservationPopup");
            ReservationPopup.classList.remove("hidden");
            ReservationPopup.classList.add("flex");
          } 
        );
      }
      loginBtns.classList.remove('flex');
      loginBtns.classList.add('hidden');
      if(SignOut){
        SignOut.addEventListener("click",()=>{
          console.log("yes");
          signOut(auth).then((user)=>{
            location.reload();
            console.log(user);
            
          }).catch((error)=>{
            console.log(error);
            
          });
          })
        
      }
      idClient.innerHTML += `<img src="${(user.photoURL)?user.photoURL:'/assets/img/Aucune-image-Profil-Homme1.webp'}" class="w-[40px] h-[40px] rounded-full">`;
      idClient.addEventListener("click", ()=>{
        loginPopup.innerHTML = `
        <div class="img">
                      <img src="${(user.photoURL)?user.photoURL:'/assets/img/Aucune-image-Profil-Homme1.webp'}" class="w-[80px] h-[80px] rounded-full">
                  </div>
                  <div class="name">
                      <span class="text-sm text-center text-gray-400 font-semibold">${user.email}</span>
                  </div>
        </div>
        `;
     popupSection.classList.remove('hidden');
     popupSection.classList.add("flex");
        
      });
    }
    else{
      if(Reserver){
        Reserver.addEventListener("click", () =>
          {
           window.location.href="/src/login.html";
          } 
        );
      }
    }
  })
//redirection
//fonction new User 
 function newUser ({displayName,email,uid,phoneNumber}){
  const userRef = doc(db,'salleUser',uid);
  setDoc(userRef,{displayName,email,phoneNumber},{merge:true})
}
//function to get the cards
function Sallecards(array,htmlContainer){

  let main_card_container =htmlContainer;
 if(main_card_container){
  main_card_container.innerHTML =` `;
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
     
  main_card_container.innerHTML =` `;
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
                <h1 class="flex gap-3 text-lg md:text-2xl font-bold"><span class="line-through font-light">${array[i].price}</span> ${(array[i].price*array[i].reduction)/100} $</h1>
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
function loginFunction(){
  search.classList.remove('flex');
  search.classList.add('hidden');
  aboutUs.classList.remove('flex');
  aboutUs.classList.add('hidden');
  Details.classList.remove('flex');
  Details.classList.add('hidden');
  inscription.classList.remove('flex');
  inscription.classList.add('hidden');
  Recherche.classList.remove('flex');
  Recherche.classList.add('hidden');
  home.classList.remove('flex');
  home.classList.add('hidden');
  main.classList.remove('flex');
  main.classList.add('hidden');
  connexion.classList.remove('hidden');
  connexion.classList.add('flex');
  btnLogin.classList.remove('flex');
  btnLogin.classList.add('hidden');
  btnSignUp.classList.remove('hidden');
  btnSignUp.classList.add('flex');
  AddSalle.classList.remove('flex');
  AddSalle.classList.add('hidden');
}
function ReductionCard(array, htmlContainer){
  let mainContainer = htmlContainer;
  if(mainContainer){
    for(let i = 0; i < array.length; i++){
      mainContainer.innerHTML += `
      <!-- card -->
      <div class="w-full lg:w-10/12 h-[180px] md:h-[220px] bg-blue-500 flex justify-between items-center p-5 rounded-3xl border shadow">
              <div class="">
                  <img src="/assets/img/55b8d8b9188fd6fbe921c59226474a0c-removebg.png" class="hidden md:flex w-[200px]">
              </div>
              <div class="">
                  <h1 class=" text-xl text-center text-white font-bold">${array[i].title}</h1>
              <h2 class="line-clamp-1 text-sm text-gray-500 text-center font-semibold">${array[i].describe}</h2> 
              </div>   
          
          </div>
      `
    }
  }
}
function TeamCard(array, htmlContainer){
  let mainContainer = htmlContainer;
  if(mainContainer){
    for(let i = 0; i < array.length; i++){
      mainContainer.innerHTML += `
      <div class="swiper-slide flex flex-col justify-center min-w-[170px] w-[170px] md:w-[250px] md:min-w-[250px] h-[270px] md:h-[300px] rounded-2xl p-2 md:p-4 border shadow gap-5 transition-all hover:scale-90" id"teamCard">
          <div id="img" class="flex justify-center ">
              <img class="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full object-cover flex flex-col gap-3" src="${array[i].img}" alt="">
          </div>
          <div id="body_Card">
             <h1 class="text-center md:text-2xl font-bold">${array[i].name}</h1>
             <h2 class="text-center text-sm font-semibold text-gray-400">${array[i].profession}</h2>
          </div>
      </div>
      `
    }
  }
}
if(SalleCardsReduction){
 const arraychild = Array.from(SalleCardsReduction.children);
 arraychild.forEach((elmt) =>{
  elmt.addEventListener("click",()=>{
    window.location.href = `/src/details.html?id=${elmt.id}`;
  })
 })
}
SallecardsWithReduction(array_salle,SalleCardsReduction)
Sallecards(array_salle,salleCardContainer);
// show details of cards



TeamCard(TeamInfo,TeamCardContainer)
ReductionCard(arrayReductionCard,reductionCards);

//Add click event

if(btnLogin){
  btnLogin.addEventListener("click", () =>{
    window.location.href = "/src/login.html";
  });
}
if(btnSignUp){
  btnSignUp.addEventListener("click", () =>{
    window.location.href = "/src/registration.html";
  });
}

if(salleCardContainer){
    const arrayCard = salleCardContainer.children;
    Array.from(arrayCard).forEach((elmt) =>{
        elmt.addEventListener("click", ()=>{
          window.location.href = `/src/details.html?id=${elmt.id}`
        })
    })

  let currentSlide = 0;
PrecendentTeamCard.addEventListener("click",()=>{
 function changeSlide(direction){
  const ArrayHtmlElement = document.getElementById('containerUS');
  const slides = Array.from(ArrayHtmlElement.children);
  currentSlide += direction;
  
  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }else if(currentSlide >= slides.length){
    currentSlide = 0
  }
  const offset = -currentSlide * 150;
  let carouselContainer =  document.getElementById('containerUS');
  carouselContainer.style.transform = `translateX(${offset}px)`;
}
changeSlide(-1) 
});


SuivantTeamCard.addEventListener("click",()=>{
 function changeSlide(direction){
  const ArrayHtmlElement = document.getElementById('containerUS');
  const slides = Array.from(ArrayHtmlElement.children);
  console.log(slides);
  currentSlide += direction;
  
  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }else if(currentSlide >= slides.length){
    currentSlide = 0
  }
  const offset = -currentSlide * 150;
  let carouselContainer = document.getElementById('containerUS');
  carouselContainer.style.transform =`translateX(${offset}px)`;
}
changeSlide(1) 
});

// carousel salle card
PrecendentSalleCard.addEventListener("click",()=>{
  function changeSlide(direction){
   const ArrayHtmlElement = document.getElementById('SalleCards');
   const slides = Array.from(ArrayHtmlElement.children);
   currentSlide += direction;
   
   if(currentSlide < 0){
     currentSlide = slides.length - 1;
   }else if(currentSlide >= slides.length){
     currentSlide = 0
   }
   const offset = -currentSlide * 150;
   let carouselContainer =  document.getElementById('SalleCards');
   carouselContainer.style.transform = `translateX(${offset}px)`;
 }
 changeSlide(-1) 
 });
 
 SuivantSalleCard.addEventListener("click",()=>{
  function changeSlide(direction){
   const ArrayHtmlElement = document.getElementById('SalleCards');
   const slides = Array.from(ArrayHtmlElement.children);
   console.log(slides);
   currentSlide += direction;
   
   if(currentSlide < 0){
     currentSlide = slides.length - 1;
   }else if(currentSlide >= slides.length){
     currentSlide = 0
   }
   const offset = -currentSlide * 150;
   let carouselContainer = document.getElementById('SalleCards');
   carouselContainer.style.transform =`translateX(${offset}px)`;
 }
 changeSlide(1) 
 });

 // carousel Reduction salle card
 PrecendentSalleReductionCard.addEventListener("click",()=>{
  function changeSlide(direction){
    const ArrayHtmlElement = document.getElementById('SalleCardsReduction');
    const slides = Array.from(ArrayHtmlElement.children);
    console.log(slides);
    currentSlide += direction;
    
    if(currentSlide < 0){
      currentSlide = slides.length - 1;
    }else if(currentSlide >= slides.length){
      currentSlide = 0
    }
    const offset = -currentSlide * 150;
    let carouselContainer = document.getElementById('SalleCardsReduction');
    carouselContainer.style.transform =`translateX(${offset}px)`;
  }
  changeSlide(-1) 
 
 });
 
 SuivantSalleReductionCard.addEventListener("click",()=>{
  function changeSlide(direction){
   const ArrayHtmlElement = document.getElementById('SalleCardsReduction');
   const slides = Array.from(ArrayHtmlElement.children);
   console.log(slides);
   currentSlide += direction;
   
   if(currentSlide < 0){
     currentSlide = slides.length - 1;
   }else if(currentSlide >= slides.length){
     currentSlide = 0
   }
   const offset = -currentSlide * 150;
   let carouselContainer = document.getElementById('SalleCardsReduction');
   carouselContainer.style.transform =`translateX(${offset}px)`;
 }
 changeSlide(1) 
 });
}

if(closePopup){
  closePopup.addEventListener("click", ()=>{
    popupSection.classList.remove("flex");
    popupSection.classList.add("hidden");
          
  });
}

if(cancelReservationPopup){
  cancelReservationPopup.addEventListener("click", () =>
    {
     const ReservationPopup = document.getElementById("ReservationPopup");
      ReservationPopup.classList.remove("flex");
      ReservationPopup.classList.add("hidden");
    } 
  );
}
//carousel Team info 


 // gerer la recherche dans le site
 
 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  width:250,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  width:250,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  width:250,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// gerer la recherche
const searchs = document.getElementById("searchs");
if(searchs){
  searchs.addEventListener("click",(e)=>{
    const emplacement = document.getElementById("Emplacementhome").value;
    const date  = document.getElementById("datehome").value;
    const place = document.getElementById("placehome").value;
    const Recherche = {
      emplacement:emplacement,
      date: date,
      place :place
    };    
    const RechercheStringify = JSON.stringify(Recherche);
    localStorage.setItem('recherche', RechercheStringify);
  })
}