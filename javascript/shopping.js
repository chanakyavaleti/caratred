const productcontainer=document.getElementById("products");
const cartcontainer=document.getElementById("mycart");
const feedback=document.getElementById("feedback");
const amount=document.getElementById("amount");

//data 
const products=[
   {
    id: 1,
    name: "Laptop - Dell Inspiron",
    price: 55000,
},
{
    id: 2,
    name: "Smartphone - Samsung Galaxy A15",
    price: 18000,
},
{
    id: 3,
    name: "Headphones - Sony WH-CH520",
    price: 3499,
},
{
    id: 4,
    name: "Smartwatch - Apple Watch SE",
    price: 29999,
},
{
    id: 5,
    name: "Tablet - Lenovo Tab M10",
    price: 15999,
},
{
    id: 6,
    name: "Bluetooth Speaker - JBL Flip 6",
    price: 8999,
},
{
    id: 7,
    name: "Monitor - LG 24-inch Full HD",
    price: 12500,
},
{
    id: 8,
    name: "Keyboard - Logitech MK215 Wireless",
    price: 1499,
},
{
    id: 9,
    name: "Printer - HP DeskJet 2331",
    price: 4299,
},
{
    id: 10,
    name: "Router - TP-Link Archer C6",
    price: 2599,
}

];

//cart container
const cart=[];

//getting data from the server and inserting in web site
products.forEach(function(data){
    const productdata = `
    <div class="product-rows">
                <p> ${data.name} - Rs ${data.price}.</p>
                <button onclick="addingcart(${data.id})">Add to cart</button>
            </div>`;
            // console.log(data.name);

            productcontainer.insertAdjacentHTML("beforeend",productdata);
});


//adding data to cart
function addingcart(id){

    // checking that the product is there or not in my cart
    const isthere=cart.some(function(data){
        return data.id === id;
    });
    if(isthere){
        console.log("item is there");
        feedbackpop("the product allready there","wrong");
        return;
    }

    // if item is not there in the cart then it will exicute 
   const correct=products.find(function(data){
    return id === data.id;
   });
   
   cart.push(correct);
//    console.log(correct);
   addingdata();
            
};

//adding in cart 
function addingdata(){
    cartcontainer.innerHTML="";
    cart.find(function(products){
  const productdata = `
    <div class="product-rows">
                <p> ${products.name} - Rs ${products.price}.</p>
                <button onclick="removingcart(${products.id})">Remove</button>
            </div>`;
            // console.log(data.name);
feedbackpop(`${products.name} is succesfully added to cart`,"correct");
            cartcontainer.insertAdjacentHTML("beforeend",productdata); 
    });

//adding the price
   let price=cart.reduce(function(pre,cur){
        return pre+cur.price;
    },0);
    amount.textContent=`Rs.${price}`;
};

function removingcart(id){
    const removee= cart.findIndex((products)=> id=== products.id);
    console.log(removee);
    cart.splice(removee,1);
    addingdata();
}



function  feedbackpop(msg,color){
    
    if (color == "correct"){
        feedback.style.backgroundColor="green";
        feedback.style.color="white";
        feedback.style.display="block";
    }
    if (color == "wrong"){
        feedback.style.backgroundColor="red";
        feedback.style.color="white";
        feedback.style.display="block";
    }

    feedback.innerHTML= msg;

    setTimeout(function(){
        feedback.style.display="none";
    },3000);

};



function clearr(){
    cart.length=0;
    addingdata();
};
function sort(){
    cart.sort(function(student1,student2){ return student1.price - student2.price;});
    addingdata();
};