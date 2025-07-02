const hyd_container=document.getElementById("hyderabad-hotels");
const ben_container=document.getElementById("bengalur-hotels");
const goa_container=document.getElementById("goa-hotels");
const pune_container=document.getElementById("pune-hotels");
const chitt_container=document.getElementById("chittoor-hotels");
const pudu_container=document.getElementById("puducherry-hotels");
const visa_container=document.getElementById("visakhapatnam-hotels");
const rang_container=document.getElementById("rangareddy-hotels");

const hyderabad=[
  {
    image: "hyderabad1.avif",
    name: "Luxury Stay at Banjara Hills",
    price: "₹14,800 for 2 nights 4.89"
  },
  {
    image: "hyderabad2.avif",
    name: "Budget Hotel near Charminar",
    price: "₹5,499 for 2 nights 4.42"
  },
  {
    image: "hyderabad3.avif",
    name: "Premium Suite in Hitech City",
    price: "₹18,250 for 2 nights 4.91"
  },
  {
    image: "hyderabad4.avif",
    name: "Family Room in Gachibowli",
    price: "₹9,300 for 2 nights 4.68"
  },
  {
    image: "hyderabad5.avif",
    name: "Boutique Hotel in Jubilee Hills",
    price: "₹13,999 for 2 nights 4.77"
  },
  {
    image: "hyderabad6.avif",
    name: "Modern Apartment near Tank Bund",
    price: "₹11,450 for 2 nights 4.61"
  },
  {
    image: "hyderabad7.avif",
    name: "Eco Stay at Shamirpet",
    price: "₹8,600 for 2 nights 4.53"
  },
];


const bengalur=[
  {
    image: "bengaluru1",
    name: "Luxury Stay at MG Road",
    price: "₹16,500 for 2 nights 4.88"
  },
  {
    image: "bengaluru2",
    name: "Modern Suite in Indiranagar",
    price: "₹13,800 for 2 nights 4.76"
  },
  {
    image: "bengaluru3",
    name: "Boutique Hotel in Koramangala",
    price: "₹11,999 for 2 nights 4.79"
  },
  {
    image: "bengaluru4",
    name: "Business Room near Whitefield",
    price: "₹10,450 for 2 nights 4.69"
  },
  {
    image: "bengaluru5",
    name: "Skyview Apartment near Hebbal",
    price: "₹14,200 for 2 nights 4.81"
  },
  {
    image: "bengaluru6",
    name: "Tech Hub Stay in Electronic City",
    price: "₹9,800 for 2 nights 4.64"
  },
  {
    image: "bengaluru7",
    name: "Green Retreat in Jayanagar",
    price: "₹12,300 for 2 nights 4.75"
  },
];

const goa=[
  {
    image: "goa1",
    name: "Beachside Villa in Anjuna",
    price: "₹22,800 for 2 nights 4.91"
  },
  {
    image: "goa2",
    name: "Luxury Resort in Calangute",
    price: "₹27,500 for 2 nights 4.88"
  },
  {
    image: "goa3",
    name: "Cozy Cottage in Palolem",
    price: "₹14,200 for 2 nights 4.67"
  },
  {
    image: "goa4",
    name: "Sea View Apartment in Baga",
    price: "₹18,900 for 2 nights 4.74"
  },
  {
    image: "goa5",
    name: "Boutique Stay near Vagator",
    price: "₹19,500 for 2 nights 4.82"
  },
  {
    image: "goa6",
    name: "Private Pool Villa in Candolim",
    price: "₹35,000 for 2 nights 4.95"
  },
  {
    image: "goa7",
    name: "Budget Hostel in Panjim",
    price: "₹6,800 for 2 nights 4.39"
  }
];

const pune=[
  {
    image: "pune1",
    name: "Luxury Suite in Koregaon Park",
    price: "₹16,700 for 2 nights 4.85"
  },
  {
    image: "pune2",
    name: "Boutique Hotel in Viman Nagar",
    price: "₹12,400 for 2 nights 4.73"
  },
  {
    image: "pune3",
    name: "Business Stay near Hinjewadi",
    price: "₹14,800 for 2 nights 4.78"
  },
  {
    image: "pune4",
    name: "Skyline View Apartment in Kothrud",
    price: "₹11,950 for 2 nights 4.66"
  },
  {
    image: "pune5",
    name: "Cozy Studio in Baner",
    price: "₹10,200 for 2 nights 4.59"
  },
  {
    image: "pune6",
    name: "Modern Room near FC Road",
    price: "₹9,600 for 2 nights 4.63"
  },
  {
    image: "pune7",
    name: "Budget Stay in Swargate",
    price: "₹6,900 for 2 nights 4.45"
  }
];

const chittoor=[
  {
    image: "chittoor1",
    name: "Temple View Stay near Kanipakam",
    price: "₹5,500 for 2 nights 4.52"
  },
  {
    image: "chittoor2",
    name: "Luxury Hotel in Tirupati Road",
    price: "₹8,900 for 2 nights 4.78"
  },
  {
    image: "chittoor3",
    name: "Budget Lodge near Railway Station",
    price: "₹3,400 for 2 nights 4.26"
  },
  {
    image: "chittoor4",
    name: "Farm Stay on Palamaner Highway",
    price: "₹7,600 for 2 nights 4.63"
  },
  {
    image: "chittoor5",
    name: "Peaceful Retreat in Gangadhara Nellore",
    price: "₹6,200 for 2 nights 4.49"
  },
  {
    image: "chittoor6",
    name: "Family Stay near Horsley Hills",
    price: "₹9,300 for 2 nights 4.74"
  },
  {
    image: "chittoor7",
    name: "Comfort Inn near Collector Office",
    price: "₹5,800 for 2 nights 4.57"
  }
];


const puducherry=[
  {
    image: "puducherry1",
    name: "French Villa in White Town",
    price: "₹13,800 for 2 nights 4.84"
  },
  {
    image: "puducherry2",
    name: "Beachside Stay in Serenity Beach",
    price: "₹15,600 for 2 nights 4.89"
  },
  {
    image: "puducherry3",
    name: "Boutique Hotel near Aurobindo Ashram",
    price: "₹11,200 for 2 nights 4.73"
  },
  {
    image: "puducherry4",
    name: "Cozy Cottage near Rock Beach",
    price: "₹9,500 for 2 nights 4.65"
  },
  {
    image: "puducherry5",
    name: "Luxury Retreat in Auroville",
    price: "₹17,900 for 2 nights 4.91"
  },
  {
    image: "puducherry6",
    name: "Budget Stay near Heritage Town",
    price: "₹6,800 for 2 nights 4.42"
  },
  {
    image: "puducherry7",
    name: "Garden View Room in Lawspet",
    price: "₹10,300 for 2 nights 4.68"
  }
];

const visakhapatnam=[
  {
    image: "visakhapatnam1",
    name: "Beachfront Stay near RK Beach",
    price: "₹14,500 for 2 nights 4.86"
  },
  {
    image: "visakhapatnam2",
    name: "Luxury Hotel in Siripuram",
    price: "₹18,200 for 2 nights 4.89"
  },
  {
    image: "visakhapatnam3",
    name: "Cozy Inn near Kailasagiri",
    price: "₹9,800 for 2 nights 4.61"
  },
  {
    image: "visakhapatnam4",
    name: "Budget Hotel near Railway Station",
    price: "₹5,400 for 2 nights 4.38"
  },
  {
    image: "visakhapatnam5",
    name: "Sea View Apartment in MVP Colony",
    price: "₹12,900 for 2 nights 4.74"
  },
  {
    image: "visakhapatnam6",
    name: "Boutique Stay in Waltair Uplands",
    price: "₹11,600 for 2 nights 4.69"
  },
  {
    image: "visakhapatnam7",
    name: "Hilltop Resort near Araku Valley",
    price: "₹16,300 for 2 nights 4.92"
  }
];

const rangareddy=[
  {
    image: "rangareddy1",
    name: "Farm Stay near Shankarpalli",
    price: "₹9,200 for 2 nights 4.68"
  },
  {
    image: "rangareddy2",
    name: "Luxury Villa in Mokila",
    price: "₹17,500 for 2 nights 4.84"
  },
  {
    image: "rangareddy3",
    name: "Resort Getaway near Moinabad",
    price: "₹15,800 for 2 nights 4.79"
  },
  {
    image: "rangareddy4",
    name: "Nature Retreat in Chevella",
    price: "₹12,300 for 2 nights 4.66"
  },
  {
    image: "rangareddy5",
    name: "Budget Room near Shamshabad Airport",
    price: "₹6,500 for 2 nights 4.43"
  },
  {
    image: "rangareddy6",
    name: "Private Pool Stay in Gandipet",
    price: "₹19,200 for 2 nights 4.91"
  },
  {
    image: "rangareddy7",
    name: "Peaceful Cottage near Himayat Sagar",
    price: "₹10,900 for 2 nights 4.58"
  }
];



// inserting data from the server 
hyderabad.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels" >
                       <img src="./images/${hotels.image}">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    hyd_container.insertAdjacentHTML("beforeend",hotels_data);
});


bengalur.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    ben_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
goa.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    goa_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
pune.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    pune_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
chittoor.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    chitt_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
puducherry.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    pudu_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
visakhapatnam.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    visa_container.insertAdjacentHTML("beforeend",hotels_data);
});


// inserting data from the server 
rangareddy.forEach(function(hotels){
    const hotels_data=
    ` <div class="hotels">
                        <img src="./images/${hotels.image}.avif">
                        <div class="hyderabad-hotels-data">
                            <h5>${hotels.name}</h5>
                            <h6>${hotels.price}</h6>
                            <i class="bi bi-heart heartcolor"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart heartcolor"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                <div class="popup">
                                    <h5>Guest favourite</h5>
                                </div>
                            </svg>
                        </div>
                    </div>`
                    rang_container.insertAdjacentHTML("beforeend",hotels_data);
});