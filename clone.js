let bagItems ;
onLoad();
function onLoad(){

    let bagStr=localStorage.getItem('bagItems');
    bagItems = bagStr ? JSON.parse(bagStr):[] ;
    displayItem();
    displayIconUpdate();

}

function addBagItem(itemName) {
    bagItems.push(itemName);
    // console.log(bagItems); // Added for debugging
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayIconUpdate();
}
function displayIconUpdate(){
    const cartIcon=document.querySelector('.bag-items');
    cartIcon.innerText=bagItems.length;
}


function displayItem() {
    let bagsContainerElement = document.querySelector(".bags-container");
    let watchContainerElement = document.querySelector(".watch-container");

    let bagsHTML = '';
    let watchHTML = '';

    items.forEach((item) => {
        bagsHTML += `
        <div>
            <a href="bags.html" target="_blank"> <img class="item1" src="${item.item_image}" alt=""></a>
            <div class="img-stuff" style="margin-left: 20px;">
                <div class="rating">${item.rating.stars} ⭐| ${item.rating.noOfRiviews}</div>
                <div class="brand">${item.brand}</div>
                <div class="product-name">${item.product_name}</div>
                <div class="price">
                    <span class="current-price">${item.price.current_price}</span>
                    <span class="original-price">${item.price.original_price}</span>
                    <span class="discount">|${item.price.discount}% off</span>
                </div>
                <button class="btn-add-bag" onclick="addBagItem('${item.product_name}')">add to bag</button>
            </div>
        </div>`;
    });

    bagsContainerElement.innerHTML = bagsHTML;

    products.forEach((item) => {
        watchHTML += `
        <div>
            <img class="item1" src="${item.item_image}" alt="">
            <div class="img-stuff" style="margin-left: 20px;">
                <div class="rating">${item.rating.stars} ⭐| ${item.rating.noOfRiviews}</div>
                <div class="brand">${item.brand}</div>
                <div class="product-name">${item.product_name}</div>
                <div class="price">
                    <span class="current-price">${item.price.current_price}</span>
                    <span class="original-price">${item.price.original_price}</span>
                    <span class="discount">|${item.price.discount}% off</span>
                </div>
                <button class="btn-add-bag" onclick="addBagItem('${item.product_name}')">add to bag</button>
            </div>
        </div>`;
    });

    watchContainerElement.innerHTML = watchHTML;
}






// ..instead of writing full code for each product or item write ne code and iterate it through foreach loop

//     */{/ <div >
//     <img class="item1" src="${item.item_image1}" alt="">
//         <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating1.stars} ⭐| ${item.rating1.noOfRiviews}</div>
//         <div class="brand">${item.brand1}</div>
//         <div class="product-name">${item.product_name1}</div>
//         <div class="price">
//         <span class="current-price">${item.price1.current_price}</span>
//         <span class="original-price">${item.price1.original_price}</span>
//         <span class="discount">|${item.price1.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
//     </div> 
// <div >
//     <img class="item1" src="${item.item_image1}" alt="">
//         <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating1.stars} ⭐| ${item.rating1.noOfRiviews}</div>
//         <div class="brand">${item.brand1}</div>
//         <div class="product-name">${item.product_name1}</div>
//         <div class="price">
//         <span class="current-price">${item.price1.current_price}</span>
//         <span class="original-price">${item.price1.original_price}</span>
//         <span class="discount">|${item.price1.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
//     </div>
// });
// bagsContainerElement.innerHTML = 
// <div>
//     <img class="item1" src="${item.item_image2}" alt="">
//     <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating2.stars} ⭐| ${item.rating2.noOfRiviews}</div>
//         <div class="brand">${item.brand2}</div>
//         <div class="product-name">${item.product_name2}</div>
//         <div class="price">
//         <span class="current-price">${item.price2.current_price}</span>
//         <span class="original-price">${item.price2.original_price}</span>
//         <span class="discount">|${item.price2.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
// </div>



// <div>
//     <img class="item1" src="${item.item_image3}" alt="">
//     <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating3.stars} ⭐| ${item.rating3.noOfRiviews}</div>
//         <div class="brand">${item.brand3}</div>
//         <div class="product-name">${item.product_name3}</div>
//         <div class="price">
//         <span class="current-price">${item.price3.current_price}</span>
//         <span class="original-price">${item.price3.original_price}</span>
//         <span class="discount">|${item.price3.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
// </div>



// <div>
//     <img class="item1" src="${item.item_image4}" alt="">
//     <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating4.stars} ⭐| ${item.rating4.noOfRiviews}</div>
//         <div class="brand">${item.brand4}</div>
//         <div class="product-name">${item.product_name4}</div>
//         <div class="price">
//         <span class="current-price">${item.price4.current_price}</span>
//         <span class="original-price">${item.price4.original_price}</span>
//         <span class="discount">|${item.price4.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
// </div>`;


// watchContainerElement.innerHTML = `
// <div>
//         <img class="item1" src="${item.item_image5}" alt="">
//         <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating5.stars} ⭐| ${item.rating5.noOfRiviews}</div>
//         <div class="brand">${item.brand5}</div>
//         <div class="product-name">${item.product_name5}</div>
//         <div class="price">
//         <span class="current-price">${item.price5.current_price}</span>
//         <span class="original-price">${item.price5.original_price}</span>
//         <span class="discount">|${item.price5.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
        
//     </div>

//     <div>
//         <img class="item1" src="${item.item_image6}" alt="">
//         <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating6.stars} ⭐| ${item.rating6.noOfRiviews}</div>
//         <div class="brand">${item.brand6}</div>
//         <div class="product-name">${item.product_name6}</div>
//         <div class="price">
//         <span class="current-price">${item.price6.current_price}</span>
//         <span class="original-price">${item.price6.original_price}</span>
//         <span class="discount">|${item.price6.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>

//     </div>

//     <div>
//     <img class="item1" src="${item.item_image7}" alt="">
//     <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating7.stars} ⭐| ${item.rating7.noOfRiviews}</div>
//         <div class="brand">${item.brand7}</div>
//         <div class="product-name">${item.product_name7}</div>
//         <div class="price">
//         <span class="current-price">${item.price7.current_price}</span>
//         <span class="original-price">${item.price7.original_price}</span>
//         <span class="discount">|${item.price7.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
//     </div>
//     <div>
//         <img class="item1" src="${item.item_image8}" alt="">
//         <div class="img-stuff" style="margin-left: 20px;">
//             <div class="rating">${item.rating8.stars} ⭐| ${item.rating8.noOfRiviews}</div>
//         <div class="brand">${item.brand8}</div>
//         <div class="product-name">${item.product_name8}</div>
//         <div class="price">
//         <span class="current-price">${item.price8.current_price}</span>
//         <span class="original-price">${item.price8.original_price}</span>
//         <span class="discount">|${item.price8.discount}% off </span>
//         </div>
//         <button  class="btn-add-bag">add to bag</button>
//         </div>
//     </div>`; */}