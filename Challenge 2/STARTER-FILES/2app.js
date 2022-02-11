const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0,
        id: 1, // mỗi sản phẩm nên có 1 mã định danh để tiện cho việc truy vấn
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0,
        id: 2
    },
    // .. tương tự
]
function item(i) {
    // thêm id vào <li> để truy vấn cart element cho product cụ thể
    // thêm onclick event vào các button là được, 
    return `<li id="cart-item-${menuItems[i].id}">
     .... thêm onclick event ở đây
      <button class="decrease" onclick="cu_decrease(${menuItems[i].id})">
        <img src="images/chevron.svg" />
      </button>
      ... và ở đây
      <button class="increase" onclick="cu_increase(${menuItems[i].id})">
        <img src="images/chevron.svg" />
      </button>
    </div>
  </li>`
}
function cu_increase(productId) {
    console.log('cu_increase function is running...')
    const quantityElements = document.querySelectorAll(`#cart-item-${productId} .quantity`);
    const quantity = Number(quantityElements[0].textContent) + 1;
    quantityElements[0].textContent = quantity 
    quantityElements[1].textContent = quantity;
    interact('increase number of item')
}

function cu_decrease(productId){
    console.log('cu_increase function is running...')
    const quantityElements = document.querySelectorAll(`#cart-item-${productId} .quantity`);
    const quantity = Number(quantityElements[0].textContent) - 1 > 0 ? Number(quantityElements[0].textContent) - 1 : 0;
    quantityElements[0].textContent = quantity;
    quantityElements[1].textContent = quantity;
    interact('increase number of item')
}