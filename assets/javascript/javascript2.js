$(function(){
    createAnimalButtons(animalArray, 'animal-button', '#button-div');  
})

var animalArray = ['jaguar', 'sloth', 'seal', 'panda', 'koala', 'bat'];


function createAnimalButtons(animalArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (var i=0; i< animalArray.length; i++){
        var animalButton = $('<button>');
        animalButton.addClass(classToAdd);
        animalButton.attr('data-type', animalArray[i]);
        animalButton.text(animalArray[i]);
        $(areaToAddTo).append(animalButton);
    }
}
 $(document).on('click', '.animal-button', function(){
     $('#gif-display').empty();
     var animalType = $(this).data('type');
     var queryURLBase = 'http://api.giphy.com/v1/gifs/search';
     var apiKey = '5oyW4OXPzHKQclCSd2xmOslEccyBLO08';
     var queryURL = queryURLBase + '?q=' + animalType + '&api_key=' + apiKey + '&limit= 10';
     $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(giphyData) {
        for (var i =0; i <giphyData.data.length; i++){
            var searchDiv = $('<div class="search-item">');
            var rating = giphyData.data[i].rating
            var ratingPara = $('<p>').text('Rating:' + rating);
            var animated = giphyData.data[i].images.fixed_height.url;
            var still = giphyData.data[i].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animated', animated);
            image.attr('data-state', 'still');
            image.addClass('searchImage');
            searchDiv.append(ratingPara);
            searchDiv.append(image);
            $('#gif-display').append(searchDiv);
        }  

        })
})

$(document).on('dblclick', '.animal-button', function(){
    $(this).remove();
    var animalType = $(this).data('type');
    var index = animalArray.indexOf(animalType);
    console.log (animalType);
    console.log (index);
    animalArray.splice(index, 1)
   
})


$(document).on('click', '.searchImage', function (){
    var state = $(this).attr('data-state');
    if (state == 'still'){
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } 
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

$('#add-search-button').on('click', function(){
    var newSearch = $('input').eq(0).val();
    $('#search-input').val(" ");
    if (animalArray.indexOf(newSearch) === -1
    && newSearch.match(/[a-z]/i) ) {
    animalArray.push(newSearch);
    createAnimalButtons(animalArray, 'animal-button', '#button-div');
    }
    event.preventDefault();
})