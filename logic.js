//hide and show sections
$("#searchLink").click(function() {
    if ($("#searchUI").hasClass('hidden')) {
        $("#searchUI").removeClass('hidden');
        console.log($("#searchUI").classList);
    } else {
        $("#searchUI").addClass('hidden');
    };
});

$("#skillsLink").click(function() {
    if ($("#skillsGrid").hasClass('hidden')) {
        $("#skillsGrid").removeClass('hidden');
        console.log($("#searchUI").classList);
    } else {
        $("#skillsGrid").addClass('hidden');
    };
});

//copy template HTML template

//search function and provide match score