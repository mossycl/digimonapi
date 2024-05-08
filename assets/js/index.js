
const getAllDigimon = async() =>{
    try{
        const response = await fetch(`https://narutodb.xyz/api/character`);
        const data = await response.json();
        return data.characters;
    } catch(error){
        console.log(`Error al obener los personajes: ${error}`)
        return [];
    }

}
getAllDigimon()
    .then(data => console.log(data))
    .catch(error => console.log(error))


let loadedDigimons = [];

const createDigimonCards = async (digimons) =>{
    const digimonRow = document.getElementById('digimonRow');

    digimons.map((digimon) => {
        const { name, images, jutsu } = digimon;
        if(!loadedDigimons.includes(name)){
            loadedDigimons.push(name);

            const divRow = document.createElement('div');
            divRow.classList.add("col-xl-3");
            divRow.classList.add("col-lg-3");
            divRow.classList.add("col-md-3");
            divRow.classList.add("col-sm-12");
            divRow.classList.add("col-xs-12");

            const card = document.createElement('div');
            card.classList.add("card");
            card.classList.add("mt-2");
            card.classList.add("mb-2");

            const imgCard = document.createElement('img');
            imgCard.classList.add("card-img-top");
            imgCard.classList.add("mt-2");
            imgCard.classList.add("mx-auto");
            imgCard.classList.add("w-75");
            imgCard.src = images;

            const divBody = document.createElement('div');
            divBody.classList.add("card-body");
            divBody.classList.add("text-center");
            divBody.classList.add("mx-auto");

            const tituloC = document.createElement('h5');
            tituloC.classList.add('card-title');
            tituloC.textContent = name;

            const levelC = document.createElement('p');
            levelC.classList.add('card-text');
            levelC.textContent = jutsu;

            divRow.appendChild(card);
            card.appendChild(imgCard);
            card.appendChild(divBody);

            divBody.appendChild(tituloC);
            divBody.appendChild(levelC);

            digimonRow.appendChild(divRow);
        }
    })
}

const loadDigimons = async () =>{
    const digimons = await getAllDigimon();
    createDigimonCards(digimons);
}

window.onload = loadDigimons;
