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




const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
console.log(categoryListData);

function categoryLists() {
    var categoryList = document.querySelector('.cartOptions');
    categoryListData.map(item => {
        var listItems = document.querySelector('.listItems')
        var itemCard = document.createElement('div');
        itemCard.id = 'item';

        var img = document.createElement('img');
        img.src = item.img
        var linstName = document.createElement('a');
        linstName.className = 'linstName'
        linstName.innerText = item.category;
        linstName.setAttribute('href', '#' + item.category);

        itemCard.appendChild(img);
        itemCard.appendChild(linstName);
        listItems.appendChild(itemCard)
    });
};
categoryLists()