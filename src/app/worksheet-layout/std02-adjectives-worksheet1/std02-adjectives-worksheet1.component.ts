import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-adjectives-worksheet1',
  templateUrl: './std02-adjectives-worksheet1.component.html',
  styleUrls: ['./std02-adjectives-worksheet1.component.scss']
})
export class Std02AdjectivesWorksheet1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.loadingDiv').hide();
    setImages();
	window.onload = function () { 
   
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
        $(document).ready(function(){
          var Correct_Answers_Count=0;
          var imgUrl="";
    $('.adjective').click(function(){
              $(this).toggleClass('click');
              if($(this).hasClass('click')){
                  imgUrl="/assets/std02-adjectives-worksheet1/img/"+$(this).find('img').attr('data-text')+'-right.png';
                  $(this).find('img').attr('src',imgUrl);
              }
              else{
                  imgUrl="/assets/std02-adjectives-worksheet1/img/"+$(this).find('img').attr('data-text')+'.png';
                  $(this).find('img').attr('src',imgUrl);
              }
          });
    
    $('.button').click(function(){
      if($(this).hasClass('playAgain')){
        window.location.href=window.location.href;
      }
      else{
        if($('.click').length >= 6){
                      $('.adjective').each(function(){
                          if($(this).hasClass('wrong')){
                              imgUrl="/assets/std02-adjectives-worksheet1/img/"+$(this).find('img').attr('data-text')+'-wrong.png';
                              $(this).find('img').attr('src',imgUrl);
                          }
                          else{
                              imgUrl="/assets/std02-adjectives-worksheet1/img/"+$(this).find('img').attr('data-text')+'-right.png';
                              $(this).find('img').attr('src',imgUrl);
                          }
                      });
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
          $('input,.option,.adjective').css('pointer-events','none');
        }
        else{
          setTimeout(function(){
            $('.result').css('display','flex');
            $('.result .TextBox h1').text('Please colour at least 6 frames before submitting');
          },500);
        }
      }
      $('.result,.close').click(function(){
        $('.result').fadeOut();
        $('.close').show();
      });
    });
    
      });
  function setImages(){
          var t=new Date().getTime();
          $('.imgBox img').attr("src", 'assets/images/fabulous.gif'+'?'+t);
      }
  }

}
