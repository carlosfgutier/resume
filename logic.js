//hide and show sections
$("#searchLink").click(function() {
    if ($("#searchUI").hasClass('hidden')) {
        $("#searchUI").removeClass('hidden');
    } else {
        $("#searchUI").addClass('hidden');
    };
});

$("#skillsLink").click(function() {
    if ($("#skillsGrid").hasClass('hidden')) {
        $("#skillsGrid").removeClass('hidden');
    } else {
        $("#skillsGrid").addClass('hidden');
    };
});

//search function and provide match score
$("#runSearch").click(function(wordsAr) {
    //clear all previous highlights
    //create an array of words to search from the search box using "," as a delimiter
    //loop through doc one word at a time
        //assign the highligth class to matching words
});