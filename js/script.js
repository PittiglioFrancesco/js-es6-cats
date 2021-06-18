// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome,
// età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

// ex

const cats = [
    {
        name: "Macchia",
        age: 10,
        color: "#F86502",
        gender: "F"
    },

    {
        name: "Oreo",
        age: 1,
        color: "#000000",
        gender: "M"
    },

    {
        name: "Leo",
        age: 2,
        color: "#F86502",
        gender: "M"
    },

    {
        name: "Ciccia",
        age: 3,
        color: "#7C7C7C",
        gender: "F"
    }
];

// cats.forEach((element) => {
//     document.getElementById("demo").innerHTML += `
//         ${element.name} è di color ${element.color}.
//     `;
// });

// Milestone 2 Dividere i gatti in due contenitori distinti in base al gender e aggiungere a fianco di ogni gattino un 
// fiocco colorato di rosa, se femmina, o di blu, se maschio. Il color del fiocco deve essere più tenue se il gatto è
// più giovane, più scuro se il gatto è più vecchio.

const rosa = "#F6C1CD";
const blu = "#124DF7";

const newCats = cats.map((element) => {
    // const name = element.name;
    // const age = element.age;
    // const color = element.color;
    // const gender = element.gender;
    const {name, age, color, gender} = element;

    // let colorFiocco = rosa;
    // if (gender == "M") {
    //     colorFiocco = blu;
    // }

    // let ribbonColor = (gender == "M")? blu : rosa;

    const opacity = element.age / 9;

    return {
        name,
        age,
        color,
        gender,
        ribbon : {
            color: (gender == "M") ? blu : rosa,
            opacity : opacity
        }
    }
});

cats.forEach((element) => {
    document.getElementById("demo").innerHTML += `<br/><br/>
        ${element.name} <i class="fas fa-cat" style="color:${element.color}"></i>
        <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>
    `;
});

const catsM = newCats.filter((element) => {
    return element.gender === "male";
});
document.getElementById("demo").innerHTML += "<br/><br/>Femmine";
catsM.forEach((element) => {
document.getElementById("demo").innerHTML += `<br/><br/>
        ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i>
        <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>
    `;
});

const catsF = newCats.filter((element) => {
    return element.gender === "female";
});
document.getElementById("demo").innerHTML += "<br/><br/>Femmine";
catsF.forEach((element) => {
document.getElementById("demo").innerHTML += `<br/><br/>
        ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i>
        <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>
    `;
});

// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome,
// colore e opacità del fiocco per ogni gatto.

let catsMaleFemale = [...catsF,...catsM]; 

const catsFemaleMaleZip = catsMaleFemale((element) => {
    const {name, color, ribbon} = element;

    return{
        name,
        color,
        ribbon
    }
});

console.log(catsFemaleMaleZip);
