
 var where = "Philadelphia, PA";
var queryURL = "http://api.foursquare.com/v2/venues/search?near=" + where + "&categoryId=4bf58dd8d48988d1e9941735&client_id=SY05YPJRULEYP3Q5GJBEB2LI1MB20332I05CP4CGUHHKTTM1&client_secret=RUPCC30MW4NHIDHKNPFLKQWVRC4REW1HYPXMZMYS3TZN0DGJ&v=20191031";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);



    // $("#movies-view").text(JSON.stringify(response));
  });
