
//Global variables ====================================================

var queryURLBase = "http://api.giphy.com/v1/gifs/search";
var apiKey = "5oyW4OXPzHKQclCSd2xmOslEccyBLO08";
var queryURL = queryURLBase + "?q=" + searchTerm + "&api_key=" + apiKey;
var searchTerm = $("#search-input").val().trim();
console.log(searchTerm);

var animalArray = ["jaguar", "parrot", "panda", "whale"];
console.log(animalArray);




//functions ====================================================
// function addToTheArc(searchTerm, animalArray){
//     animalArray.push(searchTerm);
// }
$(function()

)

//make this a click event
$("#search-button").on("click", function() {
    console.log(searchTerm);
})


//creates a button for each animal in the array
function createGifButtons (animalArray){
    for (var i=0; i < animalArray.length; i++){
    i = animal;
    console.log(animal);
    var animalButtons = $("<button class ='animal-button' data-animal ='" +animalArray[i]+ "' id='button-'" + animalArray[i] + "'>")
    animalBu
    $("#button-div").append(animalButtons);
    }
} 



$(document.body).on("click", ".animal-button", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(giphyData) {
          console.log(giphyData);
          for (var i = 0; i < 10; i ++){
            console.log(giphyData.data[i]);
    
            //create a button for each search term
            $("#gif-display").text(giphyData.data[i].embed_url);
            $("#gif-display").text(giphyData.data[i].rating);
    
        }
    
      })

    }) 



  // calling functions======================================================
// $("#search-button").click(createGifButtons);

//Takes user input from form and creates a button of a corresponding animal
//when the button is clicked, 10 gifs are loaded to the page.
// Create click events for each gif loaded. The gifs play only upon userClick
// click again and it stops
//ratings are listed below the thumbnail of the video


//bonus? make buttons disapear when they are clicked on again