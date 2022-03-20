$(function()
{
$("#MoveMe1").draggable();
$("#MoveMe2").draggable();
$("#MoveMe3").draggable();
$("#MoveMe4").draggable();
$("#MoveMe5").draggable();
$("#MoveMe6").draggable();
$("#MoveMe7").draggable();
$("#MoveMe8").draggable();
$("#MoveMe9").draggable();
$("#MoveMe10").draggable();
$("#MoveMe11").draggable();
$("#MoveMe12").draggable();
$("#MoveMe13").draggable();
});


$(document).ready(function(){
 $(".answer").hover(function(){
    $(this).css("color", "white");
     $(this).css("background-color", "#F2668B");
 });


 $(".answer").mouseout(function(){
    $(this).css("color", "white");
     $(this).css("background-color", "black");
 });
 
});