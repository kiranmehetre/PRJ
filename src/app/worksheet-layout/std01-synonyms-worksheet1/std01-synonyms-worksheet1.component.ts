import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-synonyms-worksheet1',
  templateUrl: './std01-synonyms-worksheet1.component.html',
  styleUrls: ['./std01-synonyms-worksheet1.component.scss']
})
export class Std01SynonymsWorksheet1Component implements OnInit {

  constructor() { }

  ngOnInit() {
        
	window.onload = function () { 
    $('.loadingDiv').hide();
    setImages();
}
var theToggle = document.getElementById('toggle');
// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
theToggle.onclick = function() {
    toggleClass(this, 'on');
    $('.menu-block #menu').show();
    $('#toggle span img').toggleClass('up');
    return false;
}
$(document).ready(function () {
  var imgUrl = "";
  $('.Main_Container img').click(function () {
      if ($(this).hasClass('click')) {
          imgUrl = "assets/std01-synonyms-worksheet1/img/" + $(this).attr('data-text') + ".png";
          $(this).attr('src', imgUrl);
          $(this).removeClass('click');
      }
      else {
          imgUrl = "assets/std01-synonyms-worksheet1/img/" + $(this).attr('data-text') + "-right.png";
          $(this).attr('src', imgUrl);
          $(this).addClass('click');
      }
  });
  $('.button').click(function () {
      if($('.button').hasClass('playAgain'))
{
window.location.reload();
}
else
{
          if ($('.click').length >= 5) {
              
              $('.right img').each(function () {
                  imgUrl = "assets/std01-synonyms-worksheet1/img/" + $(this).attr('data-text') + "-right.png";
                  $(this).attr('src', imgUrl);
          
              });
              $('.wrong img').each(function () {
                  imgUrl = "assets/std01-synonyms-worksheet1/img/" + $(this).attr('data-text') + "-wrong.png";
                  $(this).attr('src', imgUrl);
              
              });
              //debugger;
              $('.Main_Container').css('pointer-events', 'none');
              setTimeout(function(){
                  $('.result').css('display','flex');
                  $('.result .TextBox').hide();
                  $('.fabulous').removeClass('hide');
                  $('.result .imgBox').show();
                  $('.result').delay(2000).fadeOut('slow');
                  $('.close').hide();
              },500);

              setTimeout(function(){
                  $('.button').addClass('playAgain');
                  $('.button.playAgain').text('solve again');
              },500);
          }
          else {
              setTimeout(function () {
                  $('.result').css('display', 'flex');
                  $('.result .TextBox h1').text('Please colour at least 5 umbrellas before submitting');
              }, 500);
          }
}
  });
});

$('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
      });

function setImages(){
var AllImages=['assets/images/fabulous.gif'];
$('.result_imgBox img').each(function(i){
      var t=new Date().getTime();
      $(this).attr("src", AllImages[i]+'?'+t);
});
}
  }

}
