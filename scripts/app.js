'use strict';
//
// var projectArray = [];
//
// function Project(myProjects){
//   this.name = myProjects.name;
//   this.url = myProjects.url;
//   this.describe = myProjects.describe;
// }
// console.log(projectArray);

$('.scrollMenu').hide(); //to hide the menu button items buttons on default position
$('.menu').hide(); //to hide the menu button on default position
$(window).scroll(function(){ //function to control the scrolling
  if($(document).scrollTop() > 0) {
    $('.nav-bar').css({'position' : 'fixed'}); //changes the position of the nav-bar to fixed
    $('.button').hide(); //hides the other buttons in the menu
    $('.menu').fadeIn(); //shows the menu button after scrolled
    $('ul').hide(); //ensures the list of the buttons is hidden till clicked
  }
  else if ($(document).scrollTop() == 0){
    $('.nav-bar').css({'position' : 'relative'}); //Changes the menu position to relative so the nav-bar will show back up when the page is back at default view
    $('.button').fadeIn(); //Brings the nav-bar back to the page
    $('.menu').hide(); //hides the menu button that is no longer needed since at default view
  }
});

$('.menu').on('click', function() { //function that listens for the menu button click
  $('ul').css({'display' : 'block'}); //shows the hidden ul element
  $('.menu').fadeIn(); //fades the slim menu in
});
