const image_container=document.getElementById("image-container");
const customer_name=document.getElementById("customer-name");
const hotel_name=document.querySelectorAll(".hotel-name");
const hotel_price=document.getElementById("price");
const rating1=document.getElementById("rating");


const hotels_data = [
  {
    image: "hyderabad1",
    name: "Luxury Stay at Banjara Hills",
    price: "₹14,800",
    price_details: "for 2 nights",
    rating: "4.89",
    photo_name: "hyderabad",
    customerdetails: "rakesh"
  },
  {
    image: "hyderabad2",
    name: "Budget Hotel near Charminar",
    price: "₹5,499",
    price_details: "for 2 nights",
    rating: "4.42",
    photo_name: "hyderabad",
    customerdetails: "anita"
  },
  {
    image: "hyderabad3",
    name: "Premium Suite in Hitech City",
    price: "₹18,250",
    price_details: "for 2 nights",
    rating: "4.91",
    photo_name: "hyderabad",
    customerdetails: "manish"
  },
  {
    image: "hyderabad4",
    name: "Family Room in Gachibowli",
    price: "₹9,300",
    price_details: "for 2 nights",
    rating: "4.68",
    photo_name: "hyderabad",
    customerdetails: "pooja"
  },
  {
    image: "hyderabad5",
    name: "Boutique Hotel in Jubilee Hills",
    price: "₹13,999",
    price_details: "for 2 nights",
    rating: "4.77",
    photo_name: "hyderabad",
    customerdetails: "krishna"
  },
  {
    image: "hyderabad6",
    name: "Modern Apartment near Tank Bund",
    price: "₹11,450",
    price_details: "for 2 nights",
    rating: "4.61",
    photo_name: "hyderabad",
    customerdetails: "deepak"
  },
  {
    image: "hyderabad7",
    name: "Eco Stay at Shamirpet",
    price: "₹8,600",
    price_details: "for 2 nights",
    rating: "4.53",
    photo_name: "hyderabad",
    customerdetails: "sneha"
  },
  {
    image: "bengaluru1",
    name: "Luxury Stay at MG Road",
    price: "₹16,500",
    price_details: "for 2 nights",
    rating: "4.88",
    photo_name: "bengaluru",
    customerdetails: "ravi"
  },
  {
    image: "bengaluru2",
    name: "Modern Suite in Indiranagar",
    price: "₹13,800",
    price_details: "for 2 nights",
    rating: "4.76",
    photo_name: "bengaluru",
    customerdetails: "manoj"
  },
  {
    image: "bengaluru3",
    name: "Boutique Hotel in Koramangala",
    price: "₹11,999",
    price_details: "for 2 nights",
    rating: "4.79",
    photo_name: "bengaluru",
    customerdetails: "neha"
  },
  {
    image: "bengaluru4",
    name: "Business Room near Whitefield",
    price: "₹10,450",
    price_details: "for 2 nights",
    rating: "4.69",
    photo_name: "bengaluru",
    customerdetails: "vishal"
  },
  {
    image: "bengaluru5",
    name: "Skyview Apartment near Hebbal",
    price: "₹14,200",
    price_details: "for 2 nights",
    rating: "4.81",
    photo_name: "bengaluru",
    customerdetails: "lavanya"
  },
  {
    image: "bengaluru6",
    name: "Tech Hub Stay in Electronic City",
    price: "₹9,800",
    price_details: "for 2 nights",
    rating: "4.64",
    photo_name: "bengaluru",
    customerdetails: "arun"
  },
  {
    image: "bengaluru7",
    name: "Green Retreat in Jayanagar",
    price: "₹12,300",
    price_details: "for 2 nights",
    rating: "4.75",
    photo_name: "bengaluru",
    customerdetails: "shivani"
  },
  {
    image: "goa1",
    name: "Beachside Villa in Anjuna",
    price: "₹22,800",
    price_details: "for 2 nights",
    rating: "4.91",
    photo_name: "goa",
    customerdetails: "amit"
  },
  {
    image: "goa2",
    name: "Luxury Resort in Calangute",
    price: "₹27,500",
    price_details: "for 2 nights",
    rating: "4.88",
    photo_name: "goa",
    customerdetails: "priya"
  },
  {
    image: "goa3",
    name: "Cozy Cottage in Palolem",
    price: "₹14,200",
    price_details: "for 2 nights",
    rating: "4.67",
    photo_name: "goa",
    customerdetails: "karan"
  },
  {
    image: "goa4",
    name: "Sea View Apartment in Baga",
    price: "₹18,900",
    price_details: "for 2 nights",
    rating: "4.74",
    photo_name: "goa",
    customerdetails: "sneha"
  },
  {
    image: "goa5",
    name: "Boutique Stay near Vagator",
    price: "₹19,500",
    price_details: "for 2 nights",
    rating: "4.82",
    photo_name: "goa",
    customerdetails: "ajay"
  },
  {
    image: "goa6",
    name: "Private Pool Villa in Candolim",
    price: "₹35,000",
    price_details: "for 2 nights",
    rating: "4.95",
    photo_name: "goa",
    customerdetails: "disha"
  },
  {
    image: "goa7",
    name: "Budget Hostel in Panjim",
    price: "₹6,800",
    price_details: "for 2 nights",
    rating: "4.39",
    photo_name: "goa",
    customerdetails: "akash"
  },
  {
    image: "pune1",
    name: "Luxury Suite in Koregaon Park",
    price: "₹16,700",
    price_details: "for 2 nights",
    rating: "4.85",
    photo_name: "pune",
    customerdetails: "akshay"
  },
  {
    image: "pune2",
    name: "Boutique Hotel in Viman Nagar",
    price: "₹12,400",
    price_details: "for 2 nights",
    rating: "4.73",
    photo_name: "pune",
    customerdetails: "neha"
  },
  {
    image: "pune3",
    name: "Business Stay near Hinjewadi",
    price: "₹14,800",
    price_details: "for 2 nights",
    rating: "4.78",
    photo_name: "pune",
    customerdetails: "vikram"
  },
  {
    image: "pune4",
    name: "Skyline View Apartment in Kothrud",
    price: "₹11,950",
    price_details: "for 2 nights",
    rating: "4.66",
    photo_name: "pune",
    customerdetails: "ravi"
  },
  {
    image: "pune5",
    name: "Cozy Studio in Baner",
    price: "₹10,200",
    price_details: "for 2 nights",
    rating: "4.59",
    photo_name: "pune",
    customerdetails: "priya"
  },
  {
    image: "pune6",
    name: "Modern Room near FC Road",
    price: "₹9,600",
    price_details: "for 2 nights",
    rating: "4.63",
    photo_name: "pune",
    customerdetails: "manish"
  },
  {
    image: "pune7",
    name: "Budget Stay in Swargate",
    price: "₹6,900",
    price_details: "for 2 nights",
    rating: "4.45",
    photo_name: "pune",
    customerdetails: "komal"
  },
  {
    image: "chittoor1",
    name: "Temple View Stay near Kanipakam",
    price: "₹5,500",
    price_details: "for 2 nights",
    rating: "4.52",
    photo_name: "chittoor",
    customerdetails: "laxman"
  },
  {
    image: "chittoor2",
    name: "Luxury Hotel in Tirupati Road",
    price: "₹8,900",
    price_details: "for 2 nights",
    rating: "4.78",
    photo_name: "chittoor",
    customerdetails: "naveen"
  },
  {
    image: "chittoor3",
    name: "Budget Lodge near Railway Station",
    price: "₹3,400",
    price_details: "for 2 nights",
    rating: "4.26",
    photo_name: "chittoor",
    customerdetails: "neelima"
  },
  {
    image: "chittoor4",
    name: "Farm Stay on Palamaner Highway",
    price: "₹7,600",
    price_details: "for 2 nights",
    rating: "4.63",
    photo_name: "chittoor",
    customerdetails: "karthik"
  },
  {
    image: "chittoor5",
    name: "Peaceful Retreat in Gangadhara Nellore",
    price: "₹6,200",
    price_details: "for 2 nights",
    rating: "4.49",
    photo_name: "chittoor",
    customerdetails: "yogita"
  },
  {
    image: "chittoor6",
    name: "Family Stay near Horsley Hills",
    price: "₹9,300",
    price_details: "for 2 nights",
    rating: "4.74",
    photo_name: "chittoor",
    customerdetails: "ram"
  },
  {
    image: "chittoor7",
    name: "Comfort Inn near Collector Office",
    price: "₹5,800",
    price_details: "for 2 nights",
    rating: "4.57",
    photo_name: "chittoor",
    customerdetails: "ravi"
  },
  {
    image: "puducherry1",
    name: "French Villa in White Town",
    price: "₹13,800",
    price_details: "for 2 nights",
    rating: "4.84",
    photo_name: "puducherry",
    customerdetails: "asha"
  },
  {
    image: "puducherry2",
    name: "Beachside Stay in Serenity Beach",
    price: "₹15,600",
    price_details: "for 2 nights",
    rating: "4.89",
    photo_name: "puducherry",
    customerdetails: "yash"
  },
  {
    image: "puducherry3",
    name: "Boutique Hotel near Aurobindo Ashram",
    price: "₹11,200",
    price_details: "for 2 nights",
    rating: "4.73",
    photo_name: "puducherry",
    customerdetails: "bhuvanesh"
  },
  {
    image: "puducherry4",
    name: "Cozy Cottage near Rock Beach",
    price: "₹9,500",
    price_details: "for 2 nights",
    rating: "4.65",
    photo_name: "puducherry",
    customerdetails: "anjali"
  },
  {
    image: "puducherry5",
    name: "Luxury Retreat in Auroville",
    price: "₹17,900",
    price_details: "for 2 nights",
    rating: "4.91",
    photo_name: "puducherry",
    customerdetails: "rahul"
  },
  {
    image: "puducherry6",
    name: "Budget Stay near Heritage Town",
    price: "₹6,800",
    price_details: "for 2 nights",
    rating: "4.42",
    photo_name: "puducherry",
    customerdetails: "ritu"
  },
  {
    image: "puducherry7",
    name: "Garden View Room in Lawspet",
    price: "₹10,300",
    price_details: "for 2 nights",
    rating: "4.68",
    photo_name: "puducherry",
    customerdetails: "sandeep"
  },
  {
    image: "visakhapatnam1",
    name: "Beachfront Stay near RK Beach",
    price: "₹14,500",
    price_details: "for 2 nights",
    rating: "4.86",
    photo_name: "visakhapatnam",
    customerdetails: "deepika"
  },
  {
    image: "visakhapatnam2",
    name: "Luxury Hotel in Siripuram",
    price: "₹18,200",
    price_details: "for 2 nights",
    rating: "4.89",
    photo_name: "visakhapatnam",
    customerdetails: "anu"
  },
  {
    image: "visakhapatnam3",
    name: "Cozy Inn near Kailasagiri",
    price: "₹9,800",
    price_details: "for 2 nights",
    rating: "4.61",
    photo_name: "visakhapatnam",
    customerdetails: "manju"
  },
  {
    image: "visakhapatnam4",
    name: "Budget Hotel near Railway Station",
    price: "₹5,400",
    price_details: "for 2 nights",
    rating: "4.38",
    photo_name: "visakhapatnam",
    customerdetails: "raj"
  },
  {
    image: "visakhapatnam5",
    name: "Sea View Apartment in MVP Colony",
    price: "₹12,900",
    price_details: "for 2 nights",
    rating: "4.74",
    photo_name: "visakhapatnam",
    customerdetails: "ravi"
  },
  {
    image: "visakhapatnam6",
    name: "Boutique Stay in Waltair Uplands",
    price: "₹11,600",
    price_details: "for 2 nights",
    rating: "4.69",
    photo_name: "visakhapatnam",
    customerdetails: "suman"
  },
  {
    image: "visakhapatnam7",
    name: "Hilltop Resort near Araku Valley",
    price: "₹16,300",
    price_details: "for 2 nights",
    rating: "4.92",
    photo_name: "visakhapatnam",
    customerdetails: "sonali"
  },
  {
    image: "rangareddy1",
    name: "Farm Stay near Shankarpalli",
    price: "₹9,200",
    price_details: "for 2 nights",
    rating: "4.68",
    photo_name: "rangareddy",
    customerdetails: "raghu"
  },
  {
    image: "rangareddy2",
    name: "Luxury Villa in Mokila",
    price: "₹17,500",
    price_details: "for 2 nights",
    rating: "4.84",
    photo_name: "rangareddy",
    customerdetails: "pankaj"
  },
  {
    image: "rangareddy3",
    name: "Resort Getaway near Moinabad",
    price: "₹15,800",
    price_details: "for 2 nights",
    rating: "4.79",
    photo_name: "rangareddy",
    customerdetails: "shiva"
  },
  {
    image: "rangareddy4",
    name: "Nature Retreat in Chevella",
    price: "₹12,300",
    price_details: "for 2 nights",
    rating: "4.66",
    photo_name: "rangareddy",
    customerdetails: "naveen"
  },
  {
    image: "rangareddy5",
    name: "Budget Room near Shamshabad Airport",
    price: "₹6,500",
    price_details: "for 2 nights",
    rating: "4.43",
    photo_name: "rangareddy",
    customerdetails: "arvind"
  },
  {
    image: "rangareddy6",
    name: "Private Pool Stay in Gandipet",
    price: "₹19,200",
    price_details: "for 2 nights",
    rating: "4.91",
    photo_name: "rangareddy",
    customerdetails: "deepali"
  },
  {
    image: "rangareddy7",
    name: "Peaceful Cottage near Himayat Sagar",
    price: "₹10,900",
    price_details: "for 2 nights",
    rating: "4.58",
    photo_name: "rangareddy",
    customerdetails: "rajesh"
  }
];


// image: "hyderabad3",
//     name: "Premium Suite in Hitech City",
//     price: "₹18,250",
//     price_details: "for 2 nights",
//     rating: "4.91",
//     photo_name: "hyderabad",
//     customerdetails: "manish"

const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);


  // Access individual parameters
const imagename=params.get("image_name");
  console.log(imagename)






// getting data from the array 

hotels_data.forEach((data)=>{
  if(data.image === imagename){
    console.log(data)



    // hotel name 
hotel_name.forEach((span)=>{
  span.innerText=data.name;
})

// hotel price 
hotel_price.innerHTML= `<u><b> ${data.price} </b></u>`;

// rating 
rating1.innerText=data.rating;

// customer name 
customer_name.innerText=data.customerdetails;




// random images displaying in the grid 
const image_grid= `<div class="images-top">
                    <img src="./images2/${data.photo_name}${Math.floor(Math.random()*6)+1}.avif" id="hyderabad1">
                    <img src="./images2/${data.photo_name}${Math.floor(Math.random()*6)+1}.avif" id="hyderabad2">
                    <img src="./images2/${data.photo_name}${Math.floor(Math.random()*6)+1}.avif" id="hyderabad3">
                    <img src="./images2/${data.photo_name}${Math.floor(Math.random()*6)+1}.avif" id="hyderabad4">
                    <img src="./images2/${data.photo_name}${Math.floor(Math.random()*6)+1}.avif" id="hyderabad5">
                </div> `

image_container.insertAdjacentHTML("beforeend",image_grid);



  };
});


// ----------------------------------------------------------------middle customer -------------------------------------------------------------------------------------------------------------------
const middle_customers=document.getElementById("middle-customers");

const middle_data=[
  {image:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
</svg>`,
heading:"Self check-in",
discription:"Check yourself in with the lockbox."
},


{
  image:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-tree-fill" viewBox="0 0 16 16">
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
</svg>`,
heading:"14-min walk to the beach",
discription:"This home is by Candolim Beach."
},


{
  image:`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>`,
  heading:"Exceptional check-in experience",
discription:"Recent guests gave the check-in process a 5-star rating."
}];

const random=(Math.floor(Math.random()* (middle_data.length)))+1;
console.log(random);

for(let i=0; i<random; i++){
  const data= ` <div class="first">
                                    <span> ${middle_data[i].image}</span>
                                    <span>
                                        <h2>${middle_data[i].heading}</h2>
                                        <h3>${middle_data[i].discription}</h3>
                                    </span>
                                </div>`
middle_customers.insertAdjacentHTML("beforeend",data);
                                
}

  const display=document.getElementsByClassName("hidedata");
  const button2=document.querySelector(".button2");
  const button1=document.querySelector(".button1");

  // popup 
  function display1(){
    button2.classList.add("buttonoff");
    for(let i=0;i<2;i++){
      display[i].classList.add("hidedata-off");
      
    }
    button1.classList.add("buttonoff");
    button2.classList.remove("buttonoff");

  };

  function display_off() {
  for (let i = 0; i < display.length; i++) {
    display[i].classList.remove("hidedata-off");
  }
  button1.classList.remove("buttonoff");
    button2.classList.add("buttonoff");
  }