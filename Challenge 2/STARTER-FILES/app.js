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


const cartSummary = document.body.querySelector('ul.cart-summary')
function addItem(i) {
    setAdded(i)

    let a = createImg('images/' + menuItems[i].image, menuItems[i].name)
    let b = createEl('div', 'quantity', 1)
    let c = createEl('div', 'plate')
    
    c.append(a)
    c.append(b)


    let d = createEl('p', 'menu-item', menuItems[i].name)
    let e = createEl('p', 'price', menuItems[i].price)
    let f = createEl('div', 'content')

    f.append(d)
    f.append(e)

    let g = createImg("images/chevron.svg", 'chevron')  // hỏi anh mentor về đoạn này sau
    let h = createEl('button', 'decrease', g)
    let l = createEl('div', 'quantity', 1)
    let j = createEl('button', 'increase', g)
    let k = createEl('div', 'quantity__wrapper')

    k.append(h)
    k.append(l)
    k.append(j)

    let m = createEl('li')

    m.append(c)
    m.append(f)
    m.append(k)


    cartSummary.append(m)


    interact('add item')
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
    

    interact('set added')

}

function drawOutItem(i) {
    setDrawOut(i)

    interact('draw out item')
    return true;
}
function setDrawOut(i) {
    btnEls[i].className = 'add'
    btnEls[i].textContent = 'Add to Cart'

    interact('set draw out')
}




// Mình nên dành thời gian cho kho lưu trữ code nếu mình 
// muốn tiến nhanh hơn

// nghĩ cách sắp xếp code nữa -> hơi lộn xộn 

















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