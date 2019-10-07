$(function(){
    console.log("page loaded") 
    createAnimalButtons(animalArray, 'animal-button', '#button-div');  
})

var animalArray = ['jaguar', 'parrot', 'panda', 'whale'];

function createAnimalButtons(animalArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (var i=0; i< animalArray.length; i++){
        var animalButton = $('<button>');
        animalButton.addClass(classToAdd);
        animalButton.attr('data-animal', animalArray[i]);
        animalButton.text(animalArray[i]);
        console.log(animalArray[i]);
        $(areaToAddTo).append(animalButton);


    }
}
