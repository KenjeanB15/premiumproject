const vegetarian = {};
const data = {food: vegetarian};
const api = '';

fetch('https://api.yelp.com/v3/autocomplete?text=vegetarian&latitude=40.7128&longitude=74.0060', {
method: 'get',
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${api}` 
},
body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('success:', data);  
})
.catch((error) => {
    console.error('Error:', error);
});