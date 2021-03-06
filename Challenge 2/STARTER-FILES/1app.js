const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]



/***************************************
 * 
 *      TOGGLE ITEM WITH CART
 * 
 */
menuItems.forEach(el => {
    el.isInCart = false;
})

const btnEls = document.body.querySelectorAll('.content button')

btnEls.forEach( (el,i) => {
    el.addEventListener('click', () => {
        toggleItem(i)
    })
})



function toggleItem(i) {
    if (menuItems[i].isInCart) {
        drawOutItem(i)
        menuItems[i].isInCart = false;
    } else {
        addItem(i)
        menuItems[i].isInCart = true;
    }
}


const cartSummary = document.body.querySelector('ul.cart-summary');
let arrForDrawOutItem = [];
function addItem(i) {
    setAdded(i)

    let m = createEl('li', undefined, item(i))
    arrForDrawOutItem[i] = m;

    cartSummary.append(m)


    interact('add item')
}
function item(i) {
    return `<li>
    <div class="plate">
      <img src="images/${menuItems[i].image}" alt="Fish Sticks and Fries" class="plate" />
      <div class="quantity">1</div>
    </div>
    <div class="content">
      <p class="menu-item">${menuItems[i].name}</p>
      <p class="price">${menuItems[i].price}</p>
    </div>
    <div class="quantity__wrapper">
      <button class="decrease">
        <img src="images/chevron.svg" />
      </button>
      <div class="quantity">1</div>
      <button class="increase">
        <img src="images/chevron.svg" />
      </button>
    </div>
    <div class="subtotal">
      $6.34
    </div>
  </li>`
}
function createEl(nameEl, classname, content) {
    let x = document.createElement(nameEl)
    if (classname) x.classList.add(classname);
    if (content) x.innerHTML = content;

    // interact('create element')
    return x
}
function createImg(source, alternative) {
    let x = document.createElement('img')
    x.src = source;
    x.alt = alternative;

    // interact('create image')
    return x
}
function setAdded(i) {
    btnEls[i].className = 'in-cart'
    btnEls[i].textContent = 'In Cart'
    let x = createImg('images/check.svg', 'check')
    btnEls[i].prepend(x)
    

    // interact('set added')

}

function drawOutItem(i) {
    setDrawOut(i)

    arrForDrawOutItem[i].remove()

    interact('draw out item')
}
function setDrawOut(i) {
    btnEls[i].className = 'add'
    btnEls[i].textContent = 'Add to Cart'

    // interact('set draw out')
}




// M??nh n??n d??nh th???i gian cho kho l??u tr??? code n???u m??nh 
// mu???n ti???n nhanh h??n

// ngh?? c??ch s???p x???p code n???a -> h??i l???n x???n 


/************************************************
 * 
 *          MODIFY THE NUMBER OF EACH ITEM
 * 
 */

let btnIncreaseEls = document.getElementsByClassName('increase');


btnIncreaseEls.forEach(el => {
    el.addEventListener('click', increase)  // l??c ?????u th?? d??ng ni b??? h???ng v?? l??c ?????u ch??a c?? s???n ph???m n??o c???
})


function increase(e) {
    if (e.target.tagName == 'BUTTON') {
        let x = e.target.previousElementSibling
    }
    if (e.target.tagName == 'IMG') {
        let x = e.target.parentElement.previousElementSibling
    }
    
    let y = +(x.textContent);

    y += 1;

    x.textContent = y;

    interact('increase number of item')
}













function interact(name) {
    // console.log('???? random interact ch???y ???n ?? nha')

    let x = Math.floor( Math.random() * 3 )
    // bao nhi??u tr?????ng h???p l???p th?? con ng?????i ko ????? ?? ????n 
    // ???? l?? m??y m??c n???a        -> ni s??? l?? c??u h???i c???n ????nh gi?? d???a tr??n th???i gian l???p l???i v?? s??? tr?????ng h???p

    if (x == 2)      console.log(`v?? ???????c h??m ${name} r???i ??ng ????????
    `);
    else if (x == 0) console.log(`h??m ${name} v?? ???????c r???i ??ng ???????? 
    `)
    else             console.log(`???? ${name} ch???y ???n ?? nha ????????
    `) 
}