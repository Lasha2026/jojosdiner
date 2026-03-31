"use strict";

import { menuCategories, categoryData } from "./helper.js";


// MenuContainer is the second largest container since the body element itself.
const menuContainer = document.querySelector(".menu");





        // Creating the cart and total price elements
        let runningTotal = 0;
        let itemNumber = 1;
        const cart = document.createElement("div");
        const cartButton = document.createElement("button");
        cartButton.className = "cart-button";
        cartButton.textContent = "🛒";
        cartButton.style.backgroundColor = "green";
        cart.className = "cart";
        cart.style.display = "none";

        
        const totalPrice = document.createElement("p");
        totalPrice.className = "total-price";
        totalPrice.textContent = `Total: $0.00`;
        let cartItems = cart.querySelectorAll(".cart-item");
                        const confirmationMessage = document.createElement("p");
                confirmationMessage.className = "confirmation-message";
                confirmationMessage.textContent = "Are you sure you want to place this order?";
                const orderSum = document.createElement("p");
                orderSum.className = "order-sum";
                const closePayment = document.createElement("button");
                closePayment.className = "close-payment";
                closePayment.style.backgroundColor = "red";
                closePayment.style.color = "white";

                const yesButton = document.createElement("button");
                const noButton = document.createElement("button");
                const paymentTitle = document.createElement("p");       
                paymentTitle.className = "payment-title";
                paymentTitle.textContent = "Enter your details";
                const detailsModal = document.createElement("form");
                const cardNumber = document.createElement("input");
                const payButton = document.createElement("button");
                payButton.className = "pay-button";
                payButton.textContent = "Pay";
                payButton.addEventListener("click", (e)=>{
                    const currentItems = cart.querySelectorAll(".cart-items");
                    const itemsContainer = document.querySelector(".items-container");
                    const cardNumber = document.getElementById("card-number");
                    cartButton.style.display = "none";
                    // let entryToRemove = cart.querySelector(`[data-name="${item.name}"]`);
                    if(cardNumber.value.length !== 8){
                        e.preventDefault();
                        alert("please enter a valid card number");
                        return;
                    }else{
                    e.preventDefault();
                    itemsContainer.innerHTML = "";
                    itemsContainer.style.display = "none";
                    detailsModal.style.display = "none";
                    cart.style.display = "none";
                    const returnButton = document.createElement("button");
                    returnButton.className = "return-button";
                    returnButton.textContent = "Main Menu";
                    returnButton.style.display = "flex";
                    document.body.appendChild(returnButton);
                    const finalMessage = document.createElement("p");
                    let userName = nameInput.value;
                    finalMessage.className = 'final-message';
                    finalMessage.style.display = "flex";
                    finalMessage.textContent = `Thank you ${userName}, your order is on its way`;
                    document.body.appendChild(finalMessage);
                    detailsModal.reset();
                    firstModal.style.display = "none";
                       returnButton.addEventListener("click", () => {
                        window.location.reload();
                        // menuContainer.innerHTML = "";
                        menuContainer.style.display = "flex";
                        if(currentItems){
                        currentItems.remove();
                    }
                        cart.innerHTML = "";
                    })
                }




                    

                  

                    

                    

                    
                    
                    
                    // finalMessage.zIndex = '1000';
                    // finalMessage.fontSize = "2rem";
                    
                })





        const orderButton = document.createElement("button");
                const firstModal = document.createElement("div");
                firstModal.className = "first-modal";
                orderButton.addEventListener("click", () => {
                    
                    if(runningTotal > 0){

                        firstModal.style.display = "flex";
                        firstModal.style.boxShadow = "5px, 5px 10px";
                        document.body.style.overflow = "hidden";
                        orderSum.textContent = `${totalPrice.textContent}`;
                    }
                const backButton = document.querySelector(".back-button");
                backButton.style.display = "none";
                })


                
                cardNumber.type = "tel";
                cardNumber.className = "input-fields";
                cardNumber.placeholder = "Enter card number";
                cardNumber.name = "card-number";
                cardNumber.id = cardNumber.name;
                cardNumber.addEventListener("input", (e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if(value.length > 8) {
                        value = value.slice(0, 8)
                    }
                    e.target.value = value;
                })
                const nameInput = document.createElement("input");
                nameInput.type = "text";
                nameInput.placeholder = "Enter your name";
                nameInput.className = "input-fields";
                nameInput.name = "name-input";
                nameInput.id = nameInput.name;
                const inputDiv = document.createElement("div");
                inputDiv.className = "input-div";
                inputDiv.style.height = "100px";
                inputDiv.appendChild(nameInput);
                inputDiv.appendChild(cardNumber);

                

                yesButton.className = "yes-button";
                noButton.className = "no-button";
                yesButton.textContent = "Yes";
                noButton.textContent = "No";
                orderButton.className = "order-button";
                orderButton.textContent = "Order";
                detailsModal.style.display = "none";

                noButton.addEventListener("click", () => {
                    firstModal.style.display = "none";
                    backButton.style.display = "flex";
                })

                yesButton.addEventListener("click", () => {
                
                    // detailsModal.className = "details";
                    detailsModal.style.display = "flex";
                    detailsModal.style.flexDirection = "column";
                    detailsModal.style.justifyContent = "space-evenly";
                    detailsModal.style.border = "5px solid black";
                    detailsModal.style.backgroundColor = "white";
                    detailsModal.style.width = "500px";
                    detailsModal.style.height = "fit-content";
                    detailsModal.style.padding = "20px";
                    detailsModal.style.zIndex = "1000";
                    detailsModal.style.position = "absolute";
                    detailsModal.style.marginTop = "15%";
                    paymentTitle.style.fontSize = "large";
                    paymentTitle.style.textAlign = "center";
                    nameInput.style.display = "flex";
                    cardNumber.style.display = "flex";
                    payButton.style.display = "flex";
                    payButton.style.marginTop = "20px";
                    paymentTitle.style.marginLeft = "170px";
                    paymentTitle.style.display = "flex";
                    
                })
            

                // Close button dedicated to the cart div so that the user can exit the cart and return to the category items.
                const closeButton = document.createElement("button");
                closeButton.className = "close-button";
                closeButton.textContent = "X";
                closeButton.addEventListener("click", () => {
                cartButton.textContent = "🛒";
                cartButton.style.display = "none";
                cart.style.display = "none";
                const cartItems = cart.querySelectorAll(".cart-item");
                cartItems.forEach(item => item.remove());
                runningTotal = 0;
                totalPrice.textContent = `Total: $0.00`;
            });




// Creating the specific categories included in the restaurant menu.
    menuCategories.forEach(item => {
    const menuCategory = document.createElement("div");
    menuCategory.className = "category";
    menuCategory.id = item.title.toLowerCase();
    
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = `${item.title} Image`;
    img.className = "image";
    
    const title = document.createElement("p");
    title.className = "title";
    title.textContent = item.title;


    menuCategory.appendChild(img);
    menuCategory.appendChild(title);
    
    menuContainer.appendChild(menuCategory);


    // Listening for clicks on each of the categories to display the items within that category.
    menuCategory.addEventListener("click", (event) => {
        menuContainer.style.display = "none";
        const categoryItems = categoryData[item.title];
        // Creating the back button so that the user can exit the category and return to the main menu.
        const backButton = document.createElement("button");

            backButton.className = "back-button";
            backButton.textContent = "Back to Menu";
            if(window.matchMedia("(max-width: 600px)").matches){
                menuContainer.style.flexDirection = "column";
                const detailsClose = document.createElement("button");
                detailsClose.className = "details-close";
                // detailsModal.appendChild(detailsClose);
                backButton.textContent = "🔙";
                backButton.style.backgroundColor = "white";
                backButton.style.fontSize = "x-large";
                backButton.style.border = "2px solid black";
                backButton.style.marginTop = "-10px";
                cartButton.style.marginTop = "600px";
                cartButton.style.width = "50px";
                cartButton.style.height = "50px";
                cartButton.style.fontSize = "medium";
                cartButton.style.border = "yellowgreen, 4px, solid";
                cartButton.style.position = "fixed";
                cartButton.style.marginBottom = "10px";
                cartButton.style.marginRight = "10px";
                confirmationMessage.textContent = "Are you sure?";
                yesButton.style.width = "50%";
                yesButton.style.fontSize = "medium";
                detailsModal.style.width = "50%";
                yesButton.addEventListener("click", () => {
                    menuCategories.style.display = "none";
                    firstModal.style.display = "none";
                    const finalMessageSmall = document.querySelector(".final-message");
                    finalMessageSmall.textContent = "Thank you {userName}, your order is on its way";
                    
                })
                noButton.style.width = "50%";
                noButton.style.fontSize = "medium";
                const header = document.querySelector(".header");
                header.style.marginBottom = "100%";
            backButton.addEventListener("click", () => {
                header.style.marginBottom = "0%";
            })

            }



            backButton.addEventListener("click", () => {
            // 1. Hide the items and modals
            itemsContainer.style.display = "none";
            firstModal.style.display = "none";
            cart.style.display = "none";
            cartButton.style.display = "flex";
            detailsModal.style.display = "none";
            cartButton.textContent = "🛒";

            // 2. SHOW the main menu and language options
            menuContainer.style.display = "flex"; // INSERT THIS LINE
            languageChanger.style.display = "flex"; // INSERT THIS LINE
    
            // 3. Optional: Reset overflow if the modal was open
            document.body.style.overflow = "auto";
            itemCard.style.display = "none";
});





        // refining website UX by adding language options.
        const languageChanger = document.querySelector(".language-changer");
        languageChanger.style.display = "none";
        

        // Creating the container out of each of the menu categories that have their own subcategories like burgers, pastries, etc. 
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "items-container";
        categoryItems.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "item-card";
            itemCard.id = item.name.toLowerCase().replace(/\s/g, "-");


            const itemButtonDivider = document.createElement("div");
            itemButtonDivider.className = "item-divider";
            itemButtonDivider.style.backgroundColor = "red";
            // Populating the item cards with images and names and prices of the items in each category.
            const itemImage = document.createElement("img");
            itemImage.src = item.img;
            itemImage.alt = `${item.name} Image`;
            itemImage.className = "item-image";
            const itemName = document.createElement("p");
            itemName.className = "item-name";
            itemName.textContent = item.name;

            const itemPrice = document.createElement("p");
            itemPrice.className = "item-price";
            itemPrice.textContent = item.price;


            // Adding the add and remove buttons functionality to the items so that the user can actually buy them.
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            const addButton = document.createElement("button");
            addButton.textContent = "+";
            addButton.className = "add-button";
            addButton.addEventListener("click", () => {
            if(cart.style.display === "none"){
                cart.style.display = "flex"
                cartButton.textContent = "➡️";
            }
            
    
    // 1. Check if this item is already in the cart
            let existingEntry = cart.querySelector(`[data-name="${item.name}"]`);

            if (existingEntry) {
                    // 2. If it exists, pull the current quantity from its dataset and add 1
                    let qty = parseInt(existingEntry.dataset.quantity) + 1;
                    existingEntry.dataset.quantity = qty;
                    existingEntry.textContent = `${item.name} - ${item.price} (x${qty})`;
            } else {
                    // 3. If it's new, create it and set initial quantity to 1
                    const itemEntry = document.createElement("p");
                    itemEntry.className = "cart-item";
                    itemEntry.dataset.name = item.name;
                    itemEntry.dataset.quantity = 1; // Store the number here
                    itemEntry.textContent = `${item.name} - ${item.price} (x1)`;
        
                    cart.insertBefore(itemEntry, totalPrice);
                }

                    // 4. Update the math (this part stays the same)
                    runningTotal += parseFloat(item.price.replace("$", ""));
                    totalPrice.textContent = `Total: $${runningTotal.toFixed(2)}`;
                });
            
                    const removeButton = document.createElement("button");
                    removeButton.textContent = "-";
                    removeButton.className = "remove-button";
                    removeButton.addEventListener("click", () => {
                    let entryToRemove = cart.querySelector(`[data-name="${item.name}"]`);
                if (entryToRemove) {
                    runningTotal -= parseFloat(item.price.replace("$", ""));
                    totalPrice.textContent = `Total: $${Math.max(0, runningTotal).toFixed(2)}`;
                    let qty = parseInt(entryToRemove.dataset.quantity) - 1;
                    if(qty > 0){
                        entryToRemove.dataset.quantity = qty;
                        entryToRemove.textContent = `${item.name} - ${item.price} (x${qty})`
                    }else{
                        entryToRemove.remove();
                    }

                    if (cart.querySelectorAll(".cart-item").length === 0) {
                        cart.style.display = "none";
                    }
                    
                }
            })






            

            // Appending everything to the main document of the app so it becomes functional.
            itemCard.appendChild(itemImage);
            itemCard.appendChild(itemName);
            itemCard.appendChild(itemPrice);
            buttonContainer.appendChild(addButton);
            buttonContainer.appendChild(removeButton);
            itemCard.appendChild(buttonContainer);
            itemsContainer.appendChild(itemCard);
            itemsContainer.appendChild(backButton);
            cart.appendChild(totalPrice);
            // cart.appendChild(orderButton);
            
        })

                
        

        document.body.appendChild(itemsContainer);
        document.body.appendChild(cart);
        firstModal.appendChild(confirmationMessage);
        firstModal.appendChild(orderSum);
        firstModal.appendChild(yesButton);
        firstModal.appendChild(noButton);
        document.body.appendChild(firstModal);
        document.body.appendChild(detailsModal);
        detailsModal.appendChild(closePayment);
        detailsModal.appendChild(paymentTitle);
        detailsModal.appendChild(inputDiv);
        detailsModal.appendChild(payButton);
        cart.appendChild(closeButton);
        cart.appendChild(orderButton);
        document.body.appendChild(cartButton);
    })
}) // This here, closes the menuCategories.forEach loop. now as you can see in the breadcrumb bar the backBUtton and cartButton are in the global scope so why won't it still run?













cartButton.addEventListener("click", () => {
    if(cartButton.textContent === "🛒"){
        cart.style.display = "flex";
        cartButton.textContent = "➡️"
    }else {
        cart.style.display = "none"
        cartButton.textContent = "🛒"
    }
});

