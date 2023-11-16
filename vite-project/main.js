import './style.css'
import {gelato, frenchFries, mac} from './foodVariables.js';
import {menuItems} from './menu.js';


const DOMSelectors = { 
    theme1: document.querySelector('#buttons-theme-theme1'),
    theme2: document.querySelector('#buttons-theme-theme2'),

    europe: document.querySelector('#buttons-world-europe'),
    asia: document.querySelector('#buttons-world-asia'),
    americas: document.querySelector("#buttons-world-americas"),

    appetizer: document.querySelector('#buttons-course-appetizer'),
    side: document.querySelector("#buttons-course-side"),
    main: document.querySelector("#buttons-course-main"),
    dessert: document.querySelector("#buttons-course-dessert"),

    vegan: document.querySelector("#buttons-vegan-true"),
    nonVegan: document.querySelector("#buttons-vegan-false"),

    container: document.querySelector(".container")
}

const insert1 = `<div class="card">
    <h2 class="card-title">`
    
const insert2 = `</h2>
    <img src="" alt="" class="card-img" />
    <h3 class="card-price">`

const insert3 = `</h3></div>`

function vegan(){
    DOMSelectors.vegan.addEventListener("click", function(){//if you do figure it out this function prob is not needed
        console.log("bri*ish")
        const veganName = menuItems.filter((thing) => thing.vegan === true)
    
        //make an array
        //push each string that the vegan for each prints out and into the array
        //go through thtat array one by one for heading


        //for some reason its not inserting the heading :(
        //find out why fr
        //BRO ADD THE + 😭 (problem solved! [thank fucking gof])

        for (let i = 0; i < arr.length; i++) {
            const arr = []
            //veganName.forEach((thing) => arr.push(thing.name)) 
            DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` + `${arr}`+`${insert2}` + `${insert3}`)
          }
          //push one to array
          //delete that one thing
          //push that next thing
          //repeat in the for loop until its over
        
        //console.log(insert1, "hi", insert2)
        //DOMSelectors.container.insertAdjacentHTML("beforeend", `${gelato}`) you have to somehow use map and filter to figure this out
        //DOMSelectors.container.insertAdjacentHTML("beforeend", `${frenchFries}`)
        //DOMSelectors.container.insertAdjacentHTML("beforeend", `${mac}`)
    })
}

vegan()

//instead of making every html div a variable maybe try the input thing you did in rgb, the ${}
//${foodName} <- something like that
//filter through every item in menuItems, and if it contains let's so vegan
//put the vegan into foodName or whatever
//and then insert the html

//search "can i use html as a property js" when you get home
//menuItems.forEach((thing) => console.log(thing.vegan))
