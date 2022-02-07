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




// Mình nên dành thời gian cho kho lưu trữ code nếu mình 
// muốn tiến nhanh hơn

// nghĩ cách sắp xếp code nữa -> hơi lộn xộn 


/************************************************
 * 
 *          MODIFY THE NUMBER OF EACH ITEM
 * 
 */

let btnIncreaseEls = document.getElementsByClassName('increase');


btnIncreaseEls.forEach(el => {
    el.addEventListener('click', increase)  // lúc đầu thì dòng ni bị hỏng vì lúc đầu chưa có sản phẩm nào cả
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
    // console.log('😋 random interact chạy ổn à nha')

    let x = Math.floor( Math.random() * 3 )
    // bao nhiêu trường hợp lặp thì con người ko để ý đên 
    // đó là máy móc nữa        -> ni sẽ là câu hỏi cần đánh giá dựa trên thời gian lặp lại và số trường hợp

    if (x == 2)      console.log(`vô được hàm ${name} rồi ông 😊😊
    `);
    else if (x == 0) console.log(`hàm ${name} vô được rồi ông 😄😄 
    `)
    else             console.log(`😋 ${name} chạy ổn à nha 😄😋
    `) 
}