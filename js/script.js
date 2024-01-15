// CHECK
console.log('JS OK');

//! SCALETTA
/*
1- RECUPERO ELEMENTI
2- CREO ARRAY CON ALL'INTERNO 6 OGGETTI
3- CREO STRINGA VUOTA IN CUOI ANDRO INSERIRE I TAG 
4- CICLO FOR PER VEDERE COSA CE DENTRO
5- AGGIUNGO TAG CON LE INFORMAZIONI PRESE DEGLI OGGETTI
6- STAMPO IN PAGINA 
*/

// RECUPERO ELEMENTI
const rowElement = document.querySelector('.row')

// CREO ARRAY CON DENTRO OGGETTI
const arrayInfo = 
[
    {
        firstName: 'Wayne Barnett',
        profession: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        firstName: 'Angela Caroll',
        profession: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        firstName: 'Walter Gordon',
        profession: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        firstName: 'Angela Lopez',
        profession: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },

    {
        firstName: 'Scott Estrada',
        profession:'Developer',
        image: 'scott-estrada-developer.jpg',
    },

    {
        firstName: 'Barbara Ramos',
        profession: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
]

// VARIABILE DOVE METTO TAG
let cols = '';

// CICLO FOR PER VEDERE DENTRO L'ARRAY
for (let i = 0; i < arrayInfo.length; i++) {
    const info = arrayInfo[i];
    console.log(info)

    // CICLO FOR IN PER VEDERE DENTRO OGGETTO
    for (let key in info){
        console.log( ` ${key} : ${info[key]}`)
    }

// AGGIUNGO I MIEI TAG CON IL TEMPLATE LITERALS
cols += 
    `
    <div class="col">
        <div class="card">
            <img src="img/image/${info.image}" alt="wayne Barnett">
            <div class="recipe-name">
                <strong>${info.firstName}</strong>
                <div class="profession">${info.profession}</div>
            </div>
    ` 
// CHIUSARE TAG COL E CARD 
cols +=
   `
   </div>
   </div>
   `
}

// STAMPO 
console.log(cols);
rowElement.innerHTML = cols
