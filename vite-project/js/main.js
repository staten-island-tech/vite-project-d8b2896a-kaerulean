import '../styles/style.css' //search how to import css to js 
import {menuItems} from './menu.js';
import { DOMSelectors } from './domSelectors.js';

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

function hi(arr){
    arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class='card'>
        <h2 class='card-title'>${el.name}</h2>
        <img src='${el.picture}' alt="" class="card-img">
        <h3 class='card-price'>${el.price}</h3>
        </div>`
    ))
}

function filters(){
    let buttons = DOMSelectors.clicky
    /* buttons.forEach((btn) => btn.addEventListener("click", function(){
        console.log("hi")
    })) */
    buttons.forEach((btn) => btn.addEventListener("click", function(){
        let category = btn.textContent.toLowerCase()
        let type = menuItems.filter((el)=>el.type.includes(category))
        let origin = menuItems.filter((el)=>el.origin.includes(category))
        DOMSelectors.container.innerHTML = ""
        hi(type) 
        hi(origin)
        if (category === "vegan"){
            const f = menuItems.filter((el)=>el.vegan === true)
            hi(f)
        } else if (category === "non-vegan") {
            const a = menuItems.filter((el)=>el.vegan === false)
            hi(a)
        } else {
            return
        }

    })) 
}

filters()
theme1()
theme2()
//console.log(DOMSelectors.clicky)

/* const insert1 = `<div class="card">
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
    DOMSelectors.vegan.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = "";
        console.log("bri*ish")
        const veganName = menuItems.filter((item) => item.vegan === true) 
        veganName.forEach((item) => DOMSelectors.container.insertAdjacentHTML('beforeend', `${insert1}` +`${item.name}`+  `${insert2}` + `${item.picture}` + `${insert3}` + `${item.price}` + `${insert4}`)) 
    
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
 */

