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
 *      ADD ITEM INTO CART
 * 
 */
const btnEls = document.body.querySelectorAll('.content button')

btnEls.forEach( (el,i) => {
    el.addEventListener('click', (e) => {
        console.log(i)
        interact('gắn hành động vào mỗi click')
    })
})


















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