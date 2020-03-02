import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-action-verbs-worksheet1',
  templateUrl: './std02-action-verbs-worksheet1.component.html',
  styleUrls: ['./std02-action-verbs-worksheet1.component.scss']
})
export class Std02ActionVerbsWorksheet1Component implements OnInit {

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
$('.text-container').click(function(){
  $(this).toggleClass('click');
  
});
$('.button').click(function(){
  if($('.button').hasClass('playAgain'))
  {
    window.location.href = window.location.href;
  }
  else
  {
    if($('.click').length >= 6)
    {
      $('.text-container.correct').addClass('right');
      $('.text-container.wrong-answer').addClass('wrong');
      $('.text-container').css('pointer-events','none');

      var DisplayResult=".fabulous"; 
      setTimeout(function(){
                $('.result').css('display','flex');
                $('.result .TextBox').hide();
                $(DisplayResult).removeClass('hide');
                $('.result .imgBox').show();
                $('.result').delay(2000).fadeOut('slow');
                $('.close').hide();
              },500);

      setTimeout(function(){
        $('.button').addClass('playAgain');
        $('.button.playAgain').text('solve again');
      },500);
    }
    else{
       setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please colour at least 6 cupcakes before submitting');
        },500);
    }

  }
});
$('.result,.close').click(function(){
$('.result').fadeOut();
$('.close').show();
});

function setImages(){
var AllImages=['assets/images/fabulous.gif'];
$('.imgBox img').each(function(i)
{
var t=new Date().getTime();
    $(this).attr("src", AllImages[i]+'?'+t);
});
}
  }

}
