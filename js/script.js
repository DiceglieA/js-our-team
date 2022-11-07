// MILESTONE 0: v
// Creare l’array di oggetti con le informazioni fornite. v
// MILESTONE 1: v
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto v
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe v
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva v
// BONUS 2:
// Organizzare i singoli membri in card/schede v

//dati:
// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg',
    }
]
console.table(team)
let cards = document.getElementById('cards')

for (let i = 0; i < team.length; i++) {
    cards.innerHTML += `
    <div class="m-3" style="width: 20rem;">
    <img class="card-img-top" src="img/${team[i].pic}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${team[i].name}</h5>
    <p class="card-text">${team[i].role}</p>
    </div>
    </div>`
}






