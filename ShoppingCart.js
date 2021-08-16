// SHOPPING CART BUTTONS
//adding to the cart

var smallPBtn = document.querySelector(".small.plusBtn");
var medPBtn = document.querySelector(".medium.plusBtn");
var largePBtn = document.querySelector(".large.plusBtn");

//substracting from the cart

var smallMinusBtn = document.querySelector(".small.minusBtn");
var medMinusBtn = document.querySelector(".medium.minusBtn");
var largeMinusBtn = document.querySelector(".large.minusBtn");

//buttons for buying pizzas 

const smallBuy = document.querySelector(".plusBtn.small.buy");
const medBuy = document.querySelector(".plusBtn.medium.buy");
const largeBuy = document.querySelector(".plusBtn.large.buy");

//reference for pizaa quantities

const pizzaQtySmall = document.querySelector(".pizzaQtySmall")
const pizzaQtyMedium = document.querySelector(".pizzaQtyMedium")
const pizzaQtyLarge = document.querySelector(".pizzaQtyLarge")

//reference for all totals 

var smallPizzaTotal = document.querySelector(".smallPizzaTotal");
var medPizzaTotal = document.querySelector(".medPizzaTotal");
var largePizzaTotal = document.querySelector(".largePizzaTotal");
var cartTotal = document.querySelector(".cartTotal");
var checkOut = document.querySelector(".checkOut");

//payment button and message references

var payDue = document.querySelector(".payDue");
var message = document.querySelector(".message");
var payAmount = document.querySelector(".payAmount");
var payButton = document.querySelector(".payButton");

//variables to store Quantity
var totalCart = 0;
var smallQty = 0;
var medQty = 0;
var largeQty = 0;

function ClickButton(event){

    switch(event.target.className){

        case "small plusBtn":
        case "plusBtn small buy":{
        smallQty++;
        pizzaQtySmall.innerHTML = smallQty;
         break;
        }
        

        case "medium plusBtn":
        case "plusBtn medium buy":{
        medQty++;
        pizzaQtyMedium.innerHTML = medQty;
        break;

        }

        case "large plusBtn":
        case "plusBtn large buy":{
        largeQty++;
        pizzaQtyLarge.innerHTML = largeQty;
       break;

        }
           

        case "small minusBtn":{
            smallQty--;

            switch(true){

                case( smallQty < 0):
                {
                      smallQty = 0;
                }
            }
         pizzaQtySmall.innerHTML = smallQty;
         break;
        }

        case "medium minusBtn":{
            medQty--;
            switch(true){

                case( medQty < 0):{
                      medQty = 0;
                }
            
            }
            pizzaQtyMedium.innerHTML = medQty;
            break;
        }
            

        case "large minusBtn":{
            largeQty--;

            switch(true){

                case( largeQty < 0):{
                    largeQty = 0;
                }
                
            }
            pizzaQtyLarge.innerHTML = largeQty;
            break;
        }
        
        
        
    }

    smallPizzaTotal.innerHTML = (smallQty * 49).toFixed(2);
    medPizzaTotal.innerHTML = (medQty * 89).toFixed(2);
    largePizzaTotal.innerHTML = (largeQty * 129).toFixed(2);
    totalCart = smallQty * 49.00 + medQty * 89.00 + largeQty * 129.00;
    cartTotal.innerHTML = totalCart.toFixed(2);


    
    switch(true){

        case totalCart > 0:
        checkOut.classList.remove('hide');
        break;

        case false:
        checkOut.classList.add('hide');
        payDue.classList.add('hide');
        break;


    }

    
}

function checkOutClick() {
    checkOut.classList.add('hide');
    payDue.classList.remove('hide');
}

function payFunction() {
    message.classList.toggle('hide');
    var paymentAmt = Number(payAmount.value);

    switch(true){

        case (paymentAmt == totalCart):{

        smallPizzaTotal.innerHTML = (pizzaQtySmall.innerHTML * 49).toFixed(2);
        medPizzaTotal.innerHTML = (pizzaQtyMedium.innerHTML * 89).toFixed(2);
        largePizzaTotal.innerHTML = (pizzaQtyLarge.innerHTML * 129).toFixed(2);
        totalCart = pizzaQtySmall.innerHTML * 49.00 + pizzaQtyMedium.innerHTML * 89.00 + pizzaQtyLarge.innerHTML * 129.00;
        cartTotal.innerHTML = totalCart.toFixed(2);

        message.innerHTML = "Enjoy your Pizza!";
        
        setTimeout(function () {
            message.classList.toggle('hide');
            payDue.classList.add('hide');
            checkOut.classList.remove('hide');
            
        }, 5000);
        break;

        }

        case (paymentAmt > totalCart):{
            var change = paymentAmt - totalCart;

    
            smallPizzaTotal.innerHTML = (pizzaQtySmall.innerHTML * 49).toFixed(2);
            medPizzaTotal.innerHTML = (pizzaQtyMedium.innerHTML * 89).toFixed(2);
            largePizzaTotal.innerHTML = (pizzaQtyLarge.innerHTML * 129).toFixed(2);
            totalCart = pizzaQtySmall.innerHTML * 49.00 + pizzaQtyMedium.innerHTML * 89.00 + pizzaQtyLarge.innerHTML * 129.00;
            cartTotal.innerHTML = totalCart.toFixed(2);

            message.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2);
    
            setTimeout(function () {
                message.classList.toggle('hide');
                payDue.classList.add('hide');
                checkOut.classList.remove('hide');
                
            }, 5000);
            break;

        }

        case (paymentAmt < totalCart):{
            var differnce = totalCart - paymentAmt;
            message.innerHTML = "Sorry, that is not enough money! please add R" + differnce.toFixed(2);
            setTimeout(function () {
            message.classList.add('hide');
        }, 5000);
        break;
        }

    }
}

smallPBtn.addEventListener("click", ClickButton)
medPBtn.addEventListener("click", ClickButton)
largePBtn.addEventListener("click", ClickButton)

smallBuy.addEventListener("click", ClickButton)
medBuy.addEventListener("click", ClickButton)
largeBuy.addEventListener("click", ClickButton)

checkOut.addEventListener("click", checkOutClick)
payButton.addEventListener("click", payFunction)

largeMinusBtn.addEventListener("click", ClickButton)
medMinusBtn.addEventListener("click", ClickButton)
smallMinusBtn.addEventListener("click", ClickButton)




