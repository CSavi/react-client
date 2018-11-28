REQUIREMENTS:

- ES6
- 1 HTML pg to render react-redux app
- 2 container components
- 5 stateless components
- 3 routes
- react-router and RESTful routing
- Redux middleware (responds/modifies state)
- make use of async actions to send data to/receive from server
- Rails API handles data persistence; fetch() w/i actions to GET/POST data from API (no jQuery)
- client-side app handles data display w minimal data manipulation
- minimal styling; react-bootstrap


const listings = [
    {
        name: "Hip Luxury",
        price: 65,
        img_url: "https://a0.muscache.com/im/pictures/c692b4a6-1e11-4d15-acb3-dc946b58de02.jpg?aki_policy=xx_large",
        street: "Manor St.",
        city: "Nashville",
        state: "TN",
        postal_code: 25201,
        description: "Entire condominium",
        host: "Mar Newman" 
    },

    {
        name: "Sleek & Contemporary",
        price: 54,
        img_url: "https://a0.muscache.com/im/pictures/1c37c0bd-8edb-4051-b323-38d7747e2d0f.jpg?aki_policy=xx_large",
        street: "Old Hamilton Rd",
        city: "Nashville",
        state: "TN",
        postal_code: 25201,
        description: "Entire apartment",
        host: "Allison Williams" 
    },

    {
        name: "Stroll to E. Nashville",
        price: 76,
        img_url: "https://a0.muscache.com/im/pictures/1e0f876a-6083-495f-9ae7-1409419157b1.jpg?aki_policy=xx_large",
        street: "Reston Ct",
        city: "Nashville",
        state: "TN",
        postal_code: 25201,
        description: "Entire guest suite",
        host: "Martin and Cass" 
    },
]