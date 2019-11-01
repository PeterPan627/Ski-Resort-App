
 var where = "Poconos";

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + where + "&term=ski+resort" ;

    $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        Authorization: "Bearer K5vhwq6zYBL4NEpBTf2KN1b7BKB3P1ofVlp_BVJxNVWTxOZpQT05QQv3qKrYyW0hu7sHEBbtd-fVHpx3nu3bGtp2OjcJVUVC8isF-RlthbBF_2ZoJYUWAGHGzRe7XXYx"
    }
  }).then(function(response) {

    //Using jQuery, creates a div that will eventually be sent to the html site under "resortDiv"
    var resortsDisplay = $("<div class='col-md-2'> Why isn't this an empty column </div>");

    console.log(response);

    //builds (should build, but the bootstrap syntax must be off) the html for the div that displays the first 4 resorts' names, phone #, rating, and coords
    for(var i=0; i<4; i++){
        var name = response.businesses[i].name;
        var longitude = response.businesses[i].coordinates.latitude;
        var latitude = response.businesses[i].coordinates.longitude;
        var imageURL = response.businesses[i].image_url;
        var phone = response.businesses[i].display_phone;
        var rating = response.businesses[i].rating;
        resortsDisplay.append("<div class='col-md-2'>")
        resortsDisplay.append("<strong>" + name + "</strong> <br/>");
      //  resortsDisplay.append("<img src= '" + imageURL + "'> <br/>");
      //I have the image tag above commented out because they're too large and need to be resized. Should be fairly straightforward bootstrap/css to add?
        resortsDisplay.append(phone + "<br />");
        resortsDisplay.append("Rating: " + rating + "<br/>");
        resortsDisplay.append("Lat: " + latitude + "<br/>");
        resortsDisplay.append("Long: " + longitude + "<br />");
        resortsDisplay.append("</div> This is adding so the /div should be adding");
    }
    resortsDisplay.append("</div>");
    
    
    console.log(resortsDisplay);

    $("#resortDiv").append(resortsDisplay);



});
// });





//     // $("#movies-view").text(JSON.stringify(response));
//   });
