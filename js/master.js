import { foodItem } from "./fooditem.js";
console.log(foodItem);

function displaysItems() {
    var biryani = document.getElementById('biryani');
    var chicken = document.getElementById('chicken');
    var paneer = document.getElementById('paneer');
    var vegetable = document.getElementById('pureVeg');
    var chinese = document.getElementById('Chinese');
    var southIndian = document.getElementById('southIndian');

    const biryaniData = foodItem.filter(item => item.category == 'biryani');
    const chickenData = foodItem.filter(item => item.category == 'chicken');
    const paneerData = foodItem.filter(item => item.category == 'paneer');
    const vegetableData = foodItem.filter(item => item.category == 'vegetable');
    const chineseData = foodItem.filter(item => item.category == 'chinese');
    const southIndianData = foodItem.filter(item => item.category == 'south indian');

    biryaniData.map(item => {
        var cards = document.querySelector('.biryani #cards')
        var itemcard = document.createElement('div');
        itemcard.setAttribute('id', 'itemCard');

        var cardheader = document.createElement('div');
        cardheader.setAttribute('id', 'headerProduct');

        var iconAddToCart = document.createElement('i');
        iconAddToCart.className = 'fa-solid fa-bag-shopping';
        iconAddToCart.setAttribute('id', 'addToCart');

        var iconRate = document.createElement('i');
        iconRate.className = 'fa-solid fa-star';
        iconRate.setAttribute('id', 'rate');
        iconRate.innerText = ' ' + item.rating;

        cardheader.appendChild(iconAddToCart);
        cardheader.appendChild(iconRate);
        // product photo
        var img = document.createElement('img');
        img.src = item.img;
        // product name
        var productName = document.createElement('h4');
        productName.className = 'itemName';
        productName.innerText = item.name;
        // price product
        var priceItem = document.createElement('p');
        priceItem.id = 'priceItem';
        priceItem.innerText = item.price;

        itemcard.appendChild(cardheader)
        itemcard.appendChild(img)
        itemcard.appendChild(productName)
        itemcard.appendChild(priceItem)
        cards.appendChild(itemcard)
    });

    chickenData.map(item => {
        var cards = document.querySelector('.chicken #cards')
        var itemcard = document.createElement('div');
        itemcard.setAttribute('id', 'itemCard');

        var cardheader = document.createElement('div');
        cardheader.setAttribute('id', 'headerProduct');

        var iconAddToCart = document.createElement('i');
        iconAddToCart.className = 'fa-solid fa-bag-shopping';
        iconAddToCart.setAttribute('id', 'addToCart');

        var iconRate = document.createElement('i');
        iconRate.className = 'fa-solid fa-star';
        iconRate.setAttribute('id', 'rate');
        iconRate.innerText = ' ' + item.rating;

        cardheader.appendChild(iconAddToCart);
        cardheader.appendChild(iconRate);
        // product photo
        var img = document.createElement('img');
        img.src = item.img;
        // product name
        var productName = document.createElement('h4');
        productName.className = 'itemName';
        productName.innerText = item.name;
        // price product
        var priceItem = document.createElement('p');
        priceItem.id = 'priceItem';
        priceItem.innerText = item.price;

        itemcard.appendChild(cardheader)
        itemcard.appendChild(img)
        itemcard.appendChild(productName)
        itemcard.appendChild(priceItem)
        cards.appendChild(itemcard)
    });

    paneerData.map(item => {
        var cards = document.querySelector('.paneer #cards')
        var itemcard = document.createElement('div');
        itemcard.setAttribute('id', 'itemCard');

        var cardheader = document.createElement('div');
        cardheader.setAttribute('id', 'headerProduct');

        var iconAddToCart = document.createElement('i');
        iconAddToCart.className = 'fa-solid fa-bag-shopping';
        iconAddToCart.setAttribute('id', 'addToCart');

        var iconRate = document.createElement('i');
        iconRate.className = 'fa-solid fa-star';
        iconRate.setAttribute('id', 'rate');
        iconRate.innerText = ' ' + item.rating;

        cardheader.appendChild(iconAddToCart);
        cardheader.appendChild(iconRate);
        // product photo
        var img = document.createElement('img');
        img.src = item.img;
        // product name
        var productName = document.createElement('h4');
        productName.className = 'itemName';
        productName.innerText = item.name;
        // price product
        var priceItem = document.createElement('p');
        priceItem.id = 'priceItem';
        priceItem.innerText = item.price;

        itemcard.appendChild(cardheader)
        itemcard.appendChild(img)
        itemcard.appendChild(productName)
        itemcard.appendChild(priceItem)
        cards.appendChild(itemcard)
    });

    vegetableData.map(item => {
        var cards = document.querySelector('.pureVeg #cards')
        var itemcard = document.createElement('div');
        itemcard.setAttribute('id', 'itemCard');

        var cardheader = document.createElement('div');
        cardheader.setAttribute('id', 'headerProduct');

        var iconAddToCart = document.createElement('i');
        iconAddToCart.className = 'fa-solid fa-bag-shopping';
        iconAddToCart.setAttribute('id', 'addToCart');

        var iconRate = document.createElement('i');
        iconRate.className = 'fa-solid fa-star';
        iconRate.setAttribute('id', 'rate');
        iconRate.innerText = ' ' + item.rating;

        cardheader.appendChild(iconAddToCart);
        cardheader.appendChild(iconRate);
        // product photo
        var img = document.createElement('img');
        img.src = item.img;
        // product name
        var productName = document.createElement('h4');
        productName.className = 'itemName';
        productName.innerText = item.name;
        // price product
        var priceItem = document.createElement('p');
        priceItem.id = 'priceItem';
        priceItem.innerText = item.price;

        itemcard.appendChild(cardheader)
        itemcard.appendChild(img)
        itemcard.appendChild(productName)
        itemcard.appendChild(priceItem)
        cards.appendChild(itemcard)
    });

    chineseData.map(item => {
        var cards = document.querySelector('.Chinese #cards')
        var itemcard = document.createElement('div');
        itemcard.setAttribute('id', 'itemCard');

        var cardheader = document.createElement('div');
        cardheader.setAttribute('id', 'headerProduct');

        var iconAddToCart = document.createElement('i');
        iconAddToCart.className = 'fa-solid fa-bag-shopping';
        iconAddToCart.setAttribute('id', 'addToCart');

        var iconRate = document.createElement('i');
        iconRate.className = 'fa-solid fa-star';
        iconRate.setAttribute('id', 'rate');
        iconRate.innerText = ' ' + item.rating;

        cardheader.appendChild(iconAddToCart);
        cardheader.appendChild(iconRate);
        // product photo
        var img = document.createElement('img');
        img.src = item.img;
        // product name
        var productName = document.createElement('h4');
        productName.className = 'itemName';
        productName.innerText = item.name;
        // price product
        var priceItem = document.createElement('p');
        priceItem.id = 'priceItem';
        priceItem.innerText = item.price;

        itemcard.appendChild(cardheader)
        itemcard.appendChild(img)
        itemcard.appendChild(productName)
        itemcard.appendChild(priceItem)
        cards.appendChild(itemcard)
    });

    southIndianData.map(item => {
        var cards = document.querySelector('.southIndian #cards')
        var itemcard = document.createElement('div');
        itemcard.setAttribute('id', 'itemCard');

        var cardheader = document.createElement('div');
        cardheader.setAttribute('id', 'headerProduct');

        var iconAddToCart = document.createElement('i');
        iconAddToCart.className = 'fa-solid fa-bag-shopping';
        iconAddToCart.setAttribute('id', 'addToCart');

        var iconRate = document.createElement('i');
        iconRate.className = 'fa-solid fa-star';
        iconRate.setAttribute('id', 'rate');
        iconRate.innerText = ' ' + item.rating;

        cardheader.appendChild(iconAddToCart);
        cardheader.appendChild(iconRate);
        // product photo
        var img = document.createElement('img');
        img.src = item.img;
        // product name
        var productName = document.createElement('h4');
        productName.className = 'itemName';
        productName.innerText = item.name;
        // price product
        var priceItem = document.createElement('p');
        priceItem.id = 'priceItem';
        priceItem.innerText = item.price;

        itemcard.appendChild(cardheader)
        itemcard.appendChild(img)
        itemcard.appendChild(productName)
        itemcard.appendChild(priceItem)
        cards.appendChild(itemcard)
    });
};
displaysItems()




// const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
// console.log(categoryListData);

// function categoryLists() {
//     var categoryList = document.querySelector('.cartOptions');
//     categoryListData.map(item => {
//         var listItems = document.querySelector('.listItems')
//         var itemCard = document.createElement('div');
//         itemCard.id = 'item';

//         var img = document.createElement('img');
//         img.src = item.img
//         var linstName = document.createElement('a');
//         linstName.className = 'linstName'
//         linstName.innerText = item.category;
//         linstName.setAttribute('href', '#' + item.category);

//         itemCard.appendChild(img);
//         itemCard.appendChild(linstName);
//         listItems.appendChild(itemCard)
//     });
// };
// categoryLists();



// add Element to cart




document.querySelectorAll('#addToCart').forEach(item => {
    item.addEventListener('click', addToCart);
})

var cartData = []

function addToCart() {
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObject = foodItem.find(ele => ele.name == itemToAdd);

    var index = cartData.indexOf(itemObject);
    if (index === -1) {
        swal("Done", "Add In Your Shopinng Car", "success");
        cartData = [...cartData, itemObject];
        console.log(cartData);
    } else if (index > -1) {
        swal("sorry", "Chick Your Shopinng Car", "warning");
    };


    document.getElementById('orderCart').innerText = "Your orders " + cartData.length;
    totalAmount();
    cartItem();
}


function cartItem() {
    var bodyTable = document.querySelector('#bodyTable');
    bodyTable.innerHTML = '';
    cartData.map(item => {
        var tableRow = document.createElement('tr');

        var tableData = document.createElement('td')
        var img = document.createElement('img');
        img.src = item.img
        tableData.appendChild(img)

        var tableDataTwo = document.createElement('td');
        tableDataTwo.innerHTML = item.name;

        var tableDataThree = document.createElement('td');
        var btnOne = document.createElement('button');
        btnOne.className = 'decrese-item'
        btnOne.innerHTML = '-'
        var span = document.createElement('button');
        span.innerHTML = item.quantity
        var btnTwo = document.createElement('button');
        btnTwo.className = 'incease-item';
        btnTwo.innerHTML = '+';

        tableDataThree.appendChild(btnOne);
        tableDataThree.appendChild(span);
        tableDataThree.appendChild(btnTwo);

        var tableDataFour = document.createElement('td');
        tableDataFour.innerHTML = item.price;

        tableRow.append(tableData);
        tableRow.append(tableDataTwo);
        tableRow.append(tableDataThree);
        tableRow.append(tableDataFour);

        bodyTable.appendChild(tableRow)
    });

    document.querySelectorAll('.incease-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    });

    document.querySelectorAll('.decrese-item').forEach(item => {
        item.addEventListener('click', decreseItems)
    });
}


var currentPrice = 0;

function incrementItem() {
    let itemsToinc = this.parentNode.previousSibling.innerText;
    var incObj = cartData.find(element => element.name == itemsToinc);
    incObj.quantity += 1;

    currentPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1)
    incObj.price = currentPrice * incObj.quantity;

    totalAmount();
    cartItem();
}




function decreseItems() {
    let itemsToDnc = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(ele => ele.name == itemsToDnc);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        currentPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currentPrice * decObj.quantity;
    } else {
        cartData.splice(ind, 1);
        document.getElementById('orderCart').innerHTML = ' ' + cartData.length + 'itemss';
        document.getElementById('addToCart').innerHTML = ' ' + cartData.length;
        if (cartData.length < 1 && flag) {
            document.getElementById('foodsELements').classList.toggle('foodsELements');
            document.getElementById('cartPage').classList.toggle('carttoggle');
            document.getElementById('header').classList.toggle('.carttoggle');
            document.getElementById('chickOut').classList.toggle('carttoggle');
            flag = false;
            swal("sorry", "currently no Thing in car", "warning")
        }
    }
    totalAmount()
    cartItem()
}

function totalAmount() {
    var sum = 0;
    cartData.map(item => {
        sum += item.price
    })
    document.getElementById('totalItensOrders').innerHTML = 'total items order : ' + cartData.length;
    document.getElementById('totlaPriceOrders').innerHTML = 'total price : ' + sum;
}

document.getElementById('orderCart').addEventListener('click', cartToggle);
var flag = false

function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('foodsELements').classList.toggle('foodsELements');
        document.getElementById('cartPage').classList.toggle('carttoggle');
        document.getElementById('chickOut').classList.toggle('carttoggle');
        flag = true;
    } else {
        swal("sorry", "currently no Thing in car", "warning")
    }
}

// event on click
let alert = document.querySelector('#chickOut .alert')
document.querySelector('.cartBtn').addEventListener('click', (event) => {
    alert.style.display = 'block'
})