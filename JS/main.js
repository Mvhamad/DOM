// Like Button
var likeButton = document.querySelector('.heart');
var likeButton1 = document.querySelector('.heart1');
var likeButton2 = document.querySelector('.heart2');
function like() {
    if (likeButton.style.color == "red") {
        likeButton.style.color = "grey";
    } else {
        likeButton.style.color = "red";
    }
}
function like1() {
    if (likeButton1.style.color == "red") {
        likeButton1.style.color = "grey";
    } else {
        likeButton1.style.color = "red";
    }
}
function like2() {
    if (likeButton2.style.color == "red") {
        likeButton2.style.color = "grey";
    } else {
        likeButton2.style.color = "red";
    }
}


// increase or decrease the quantity
var plus0 = document.querySelector('.plus0');
var minus0 = document.querySelector('.minus0');
var num0 = document.querySelector('.num0');
plus0.addEventListener("click", function () {
    num0.innerHTML = parseInt(num0.innerHTML) + 1
    total()
    finalprice()
})
minus0.addEventListener("click", () => {
    if (num0.innerHTML > 1) {
        num0.innerHTML = parseInt(num0.innerHTML) - 1
        total()
        finalprice()
    }   
})
var plus1 = document.querySelector('.plus1');
var minus1 = document.querySelector('.minus1');
var num1 = document.querySelector('.num1');
plus1.addEventListener("click", function () {
    num1.innerHTML = parseInt(num1.innerHTML) + 1
    total1()
    finalprice()
})
minus1.addEventListener("click", () => {
    if (num1.innerHTML > 1) {
        num1.innerHTML = parseInt(num1.innerHTML) - 1
        total1()
        finalprice()
    }   
})
var plus2 = document.querySelector('.plus2');
var minus2 = document.querySelector('.minus2');
var num2 = document.querySelector('.num2');
plus2.addEventListener("click", function () {
    num2.innerHTML = parseInt(num2.innerHTML) + 1
    total2()
    finalprice()
})
minus2.addEventListener("click", () => {
    if (num2.innerHTML > 1) {
        num2.innerHTML = parseInt(num2.innerHTML) - 1
        total2()
        finalprice()
    }   
})

// total price for one item
const unitPrice0 = document.querySelector('.uprice0')
var totalPrice0 = document.querySelector('.tprice0')
totalPrice0.innerHTML = unitPrice0.innerHTML
function total() {
    totalPrice0.innerHTML = parseInt(num0.innerHTML) * parseInt(unitPrice0.innerHTML) + "FCFA"
}
const unitPrice1 = document.querySelector('.uprice1')
var totalPrice1 = document.querySelector('.tprice1')
totalPrice1.innerHTML = unitPrice1.innerHTML
function total1() {
    totalPrice1.innerHTML = parseInt(num1.innerHTML) * parseInt(unitPrice1.innerHTML) + "FCFA"
}
const unitPrice2 = document.querySelector('.uprice2')
var totalPrice2 = document.querySelector('.tprice2')
totalPrice2.innerHTML = unitPrice2.innerHTML
function total2() {
    totalPrice2.innerHTML = parseInt(num2.innerHTML) * parseInt(unitPrice2.innerHTML) + "FCFA"
}
// remove ok
var removeButton = document.querySelectorAll('.trash')
for (i = 0; i <= removeButton.length; i++) {
    supp = removeButton[i]
    supp.addEventListener('click', function (event) {
        var suppClicked = event.target
        suppClicked.parentElement.parentElement.remove()
    })
}

// total price for all item
var tot = document.querySelector('#tot')
var tableBody = document.getElementById('bodytable')
var row = document.tableBody.getElementsByClassName('row')
var sum = 0
function finalprice(){
    for (i = 0; i <= row.length; i++){
        row = row[i]
        var oneprice = row.getElementsByClassName('num')
        
    }
    tot.innerHTML = sum + 'FCFA'
}


