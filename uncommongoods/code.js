//const vegetarian = {};
//const data = {food: vegetarian};
const api = '';

document.addEventListener("DOMContentLoaded", function(event) {
    // fetch("/mack's_vegan_backend")
    // .then((response) => response.json())
    // .then((data) => {
    //   const businesses = data["businesses"]
// 
    const data = {
      "total": 8228,
      "businesses": [
        {
          "rating": 4,
          "price": "$",
          "phone": "+14152520800",
          "id": "E8RJkjfdcwgtyoPMjQ_Olg",
          "alias": "four-barrel-coffee-san-francisco",
          "is_closed": false,
          "categories": [
            {
              "alias": "coffee",
              "title": "Coffee & Tea"
            }
          ],
          "review_count": 1738,
          "name": "Four Barrel Coffee",
          "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
          "coordinates": {
            "latitude": 37.7670169511878,
            "longitude": -122.42184275
          },
          "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
          "location": {
            "city": "San Francisco",
            "country": "US",
            "address2": "",
            "address3": "",
            "state": "CA",
            "address1": "375 Valencia St",
            "zip_code": "94103"
          },
          "distance": 1604.23,
          "transactions": ["pickup", "delivery"]
        },
      {
        "rating": 3,
        "price": "$",
        "phone": "+14152520800",
        "id": "E8RJkjfdcwgtyoPMjQ_Olg",
        "alias": "four-barrel-coffee-san-francisco",
        "is_closed": false,
        "categories": [
          {
            "alias": "vegan",
            "title": "Vegan"
          }
        ],
        "review_count": 1738,
        "name": "Vegan Cheese",
        "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
        "coordinates": {
          "latitude": 37.7670169511878,
          "longitude": -122.42184275
        },
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
        "location": {
          "city": "San Francisco",
          "country": "US",
          "address2": "",
          "address3": "",
          "state": "CA",
          "address1": "375 Valencia St",
          "zip_code": "94103"
        },
        "distance": 1604.23,
        "transactions": ["pickup", "delivery"]
      },
      {
        "rating": 3,
        "price": "$",
        "phone": "+14152520800",
        "id": "E8RJkjfdcwgtyoPMjQ_Olg",
        "alias": "four-barrel-coffee-san-francisco",
        "is_closed": false,
        "categories": [
          {
            "alias": "vegan",
            "title": "Vegan"
          }
        ],
        "review_count": 1738,
        "name": "Brooklyn Bistro",
        "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
        "coordinates": {
          "latitude": 37.7670169511878,
          "longitude": -122.42184275
        },
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
        "location": {
          "city": "San Francisco",
          "country": "US",
          "address2": "",
          "address3": "",
          "state": "CA",
          "address1": "916 Prospect Place",
          "zip_code": "11213"
        },
        "distance": 1604.23,
        "transactions": ["pickup", "delivery"]
      }
    ],
    "region": {
      "center": {
        "latitude": 37.767413217936834,
        "longitude": -122.42820739746094
      }
    }
    };
    const businesses = data.businesses;
    for (i = 0; i < businesses.length; i++) {
      const business = businesses[i]
      let rating = business["rating"]
      let phone = business["phone"]
      let restaurant = document.createElement('li');
      let name = business["name"]
      debugger;
      restaurant.innerHTML = business["name"] + business["rating"]
    //   <div>
    //     <h3 id='name'>Name</h3>
    //     <span id='open-hours'>hours</span>
    //     <a target="_blank" href="https://catchrestaurants.com/catchsteaknyc/wp-content/uploads/2019/10/Gluten-Free-Menu-10.21-1.pdf">Download Menu</a>
    //     <h4 id='menus'>menu</h4>
    //     <picture>
    //         <img id="image_url">
    //     </picture>
    // </div>
      restaurant.innerHTML = `
        <div>
          <h3>${name}</h3>
        </div>`

      document.getElementById('more-destinations').appendChild(restaurant);
    }
});

