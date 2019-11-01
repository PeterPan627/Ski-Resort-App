
 var where = "Poconos";
//  var queryURLfoursquare = "http://api.foursquare.com/v2/venues/search?near=" + where + "&categoryId=4bf58dd8d48988d1e9941735&client_id=SY05YPJRULEYP3Q5GJBEB2LI1MB20332I05CP4CGUHHKTTM1&client_secret=RUPCC30MW4NHIDHKNPFLKQWVRC4REW1HYPXMZMYS3TZN0DGJ&v=20191031";

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + where + "&term=ski+resort" ;

// console.log("Is this thing working?");

// $.ajax({
//     url: queryURLfoursquare,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
//     var name = response.response.venues[0].name;

//     var lat = response.response.venues[0].location.lat;
//     var long = response.response.venues[0].location.lng;
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + name + "&latitude=" + lat + "&longitude=" + long;

    $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        Authorization: "Bearer K5vhwq6zYBL4NEpBTf2KN1b7BKB3P1ofVlp_BVJxNVWTxOZpQT05QQv3qKrYyW0hu7sHEBbtd-fVHpx3nu3bGtp2OjcJVUVC8isF-RlthbBF_2ZoJYUWAGHGzRe7XXYx"
    }
  }).then(function(response) {

    // console.log("How about now?");

    console.log(response);


});
// });





//     // $("#movies-view").text(JSON.stringify(response));
//   });
