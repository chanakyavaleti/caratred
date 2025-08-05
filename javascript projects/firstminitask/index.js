const hyd_container=document.getElementById("hyderabad-hotels");
const ben_container=document.getElementById("bengalur-hotels");
const goa_container=document.getElementById("goa-hotels");
const pune_container=document.getElementById("pune-hotels");
const chitt_container=document.getElementById("chittoor-hotels");
const pudu_container=document.getElementById("puducherry-hotels");
const visa_container=document.getElementById("visakhapatnam-hotels");
const rang_container=document.getElementById("rangareddy-hotels");

const hyderabad = [
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
  }
];

const bengalur = [
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
  }
];

const goa = [
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
  }
];

const pune = [
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
  }
];

const chittoor = [
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
  }
];

const puducherry = [
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
  }
];

const visakhapatnam = [
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
  }
];

const rangareddy = [
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





// inserting data from the server 
hyderabad.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    
                    hyd_container.insertAdjacentHTML("beforeend",hotels_data);
});



bengalur.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    ben_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
goa.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    goa_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
pune.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    pune_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
chittoor.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    chitt_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
puducherry.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    pudu_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
visakhapatnam.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    visa_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
rangareddy.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >  
    <a href="part2.html?image_name=${hotels.image}">
               <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                        <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                            
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price} ${hotels.price_details} ${hotels.rating}</h6>
                            
                        </div>
                      </a>
                    </div>`
                    rang_container.insertAdjacentHTML("beforeend",hotels_data);
});