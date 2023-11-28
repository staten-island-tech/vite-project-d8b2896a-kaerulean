import '../styles/style.css' //search how to import css to js 
import {menuItems} from './menu.js';
import { DOMSelectors } from './domSelectors.js';


const insert1 = `<div class="card">
    <h2 class="card-title">`
    
const insert2 = `</h2>
    <img src="`
    
const insert3 = `" alt="" class="card-img" />
    <h3 class="card-price">`

const insert4 = `</h3></div>`

function all(){
    DOMSelectors.all.addEventListener("click", function(){
        menuItems.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function theme1(){
    DOMSelectors.theme1.addEventListener("click", function(){
        DOMSelectors.theme.classList.remove('theme2')
        DOMSelectors.theme.classList.add('theme1')
    })
}

function theme2(){
    DOMSelectors.theme2.addEventListener("click", function(){
        DOMSelectors.theme.classList.remove('theme1')
        DOMSelectors.theme.classList.add('theme2')
    })
}

function europe(){
    DOMSelectors.europe.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const europeName = menuItems.filter((thing) => thing.origin === "europe") 
        europeName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function asia(){
    DOMSelectors.asia.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const asiaName = menuItems.filter((thing) => thing.origin === "asia") 
        asiaName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function americas(){
    DOMSelectors.americas.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const americasName = menuItems.filter((thing) => thing.origin === "americas") 
        americasName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function appetizer(){
    DOMSelectors.appetizer.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const appetizerName = menuItems.filter((thing) => thing.type === "appetizer") 
        appetizerName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function side(){
    DOMSelectors.side.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const sideName = menuItems.filter((thing) => thing.type === "side") 
        sideName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function main(){
    DOMSelectors.main.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const mainName = menuItems.filter((thing) => thing.type === "main") 
        mainName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

function dessert(){
    DOMSelectors.dessert.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const dessertName = menuItems.filter((thing) => thing.type === "dessert") 
        dessertName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}


function vegan(){
    DOMSelectors.vegan.addEventListener("click", function(){//if you do figure it out this function prob is not needed
        DOMSelectors.container.innerHTML = "";
        console.log("bri*ish")
        const veganName = menuItems.filter((item) => item.vegan === true) 
    
        //make an array
        //push each string that the vegan for each prints out and into the array
        //go through thtat array one by one for heading

        //for some reason its not inserting the heading :(
        //find out why fr
        //BRO ADD THE + 😭 (problem solved! [thank fucking gof])
        
        //const arr = []
        veganName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
        //dawg it was that simple 💀
        /* for (let i = 0; i < arr.length; i++) {
            console.log(arr)
            DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` + `${arr[0]}`+ `${insert2}` + `${insert3}`) //maybe get the insert into the foreach instead
          }  */
          //push one to array
          //delete that one thing <- i dont think i can delte cayse itll modify and druin fthe forr loop aghghghghghg
          //push that next thing
          //repeat in the for loop until its over
        
        
        //DOMSelectors.container.insertAdjacentHTML("beforeend", `${gelato}`) you have to somehow use map and filter to figure this out
       
    })
}

function nonVegan(){
    DOMSelectors.nonVegan.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        const nonVeganName = menuItems.filter((thing) => thing.vegan === false) 
        nonVeganName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    })
}

all()

theme1()
theme2()

europe()
asia()
americas()

appetizer()
side()
main()
dessert()

vegan()
nonVegan()

//instead of making every html div a variable maybe try the input thing you did in rgb, the ${}
//${foodName} <- something like that
//filter through every item in menuItems, and if it contains let's so vegan
//put the vegan into foodName or whatever
//and then insert the html

//search "can i use html as a property js" when you get home <- you cant 
//menuItems.forEach((thing) => console.log(thing.vegan))
