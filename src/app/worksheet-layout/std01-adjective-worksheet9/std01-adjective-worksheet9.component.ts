import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-adjective-worksheet9',
  templateUrl: './std01-adjective-worksheet9.component.html',
  styleUrls: ['./std01-adjective-worksheet9.component.scss']
})
export class Std01AdjectiveWorksheet9Component implements OnInit {

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
// js
$(document).ready(function(){
			
  // $('.option.active').click(function(){
        //     $(this).toggleClass('click');
        // });
  

        $('.option.active').click(function () {
        $(this).toggleClass('click');
        if($(this).hasClass('click'))
        {
          var clickHelpbox=$(this).attr('word-click');
          var checkHelpBoxText=$(this).attr('data-text').toLowerCase().trim();
          if(clickHelpbox.indexOf(',')>0)
          {
            var SplitHelpbox=clickHelpbox.split(',');
            var i;
            for (i = 0; i < SplitHelpbox.length; ++i) {
                $('.'+SplitHelpbox[i]+'.'+checkHelpBoxText).addClass('green-color');
            }
          }
          else{
             
              var CheckIsThere=$(this).attr('class');
              if(clickHelpbox.indexOf('triangular')>-1 && (CheckIsThere.indexOf('r1') > -1 || CheckIsThere.indexOf('r2') > -1) || (CheckIsThere.indexOf('a1') > -1 || CheckIsThere.indexOf('a2') > -1))
              {
                 if(CheckIsThere.indexOf('r1')>-1)
                 {
                    $('.round-text .r1').addClass('green-color');
                 }
                 else if(CheckIsThere.indexOf('r2')>-1)
                 {
                    $('.round-text  .r2').addClass('green-color');
                 }
                 else if(CheckIsThere.indexOf('a1')>-1)
                 {
                    $('.round-text  .a1').addClass('green-color');
                 }
                 else if(CheckIsThere.indexOf('a2')>-1)
                 {
                    $('.round-text  .a2').addClass('green-color');
                 }
              }
              else if(clickHelpbox.indexOf('green')>-1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1))
              {
                    if(CheckIsThere.indexOf('e1')>-1)
                    {
                        $('.color-text .e1').addClass('green-color');
                    }
                    else{
                        $('.color-text  .e2').addClass('green-color');
                    }
              }
              else if(clickHelpbox.indexOf('yellow')>-1 && (CheckIsThere.indexOf('l1') > -1 || CheckIsThere.indexOf('l2') > -1))
              {
                    if(CheckIsThere.indexOf('l1')>-1)
                    {
                        $('.color-text .l1').addClass('green-color');
                    }
                    else{
                        $('.color-text  .l2').addClass('green-color');
                    }
              }
              else if(clickHelpbox.indexOf('purple')>-1 && (CheckIsThere.indexOf('p1') > -1 || CheckIsThere.indexOf('p2') > -1))
              {
                    if(CheckIsThere.indexOf('p1')>-1)
                    {
                        $('.color-text .p1').addClass('green-color');
                    }
                    else{
                        $('.color-text  .p2').addClass('green-color');
                    }
              }
              else{
                $('.'+clickHelpbox+'.'+checkHelpBoxText).addClass('green-color');
              }
          }
        }
        else{
            var clickHelpbox=$(this).attr('word-click');
            var checkHelpBoxText=$(this).attr('data-text').toLowerCase().trim();
            if(clickHelpbox.indexOf(',')>0)
            {
                var SplitHelpbox=clickHelpbox.split(',');
                var i;
                for (i = 0; i < SplitHelpbox.length; ++i) {
                    $('.'+SplitHelpbox[i]+'.'+checkHelpBoxText).removeClass('green-color');
                }
            }
            else{
                var CheckIsThere=$(this).attr('class');
                if(clickHelpbox.indexOf('triangular')>-1 && (CheckIsThere.indexOf('r1') > -1 || CheckIsThere.indexOf('r2') > -1) || (CheckIsThere.indexOf('a1') > -1 || CheckIsThere.indexOf('a2') > -1))
                {
                    if(CheckIsThere.indexOf('r1')>-1)
                    {
                        $('.round-text .r1').removeClass('green-color');
                    }
                    else if(CheckIsThere.indexOf('r2')>-1)
                    {
                        $('.round-text  .r2').removeClass('green-color');
                    }
                    else if(CheckIsThere.indexOf('a1')>-1)
                    {
                        $('.round-text  .a1').removeClass('green-color');
                    }
                    else if(CheckIsThere.indexOf('a2')>-1)
                    {
                        $('.round-text  .a2').removeClass('green-color');
                    }
                }
                else if(clickHelpbox.indexOf('green')>-1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1))
                {
                    if(CheckIsThere.indexOf('e1')>-1)
                    {
                        $('.color-text .e1').removeClass('green-color');
                    }
                    else{
                        $('.color-text  .e2').removeClass('green-color');
                    }
                }
                else if(clickHelpbox.indexOf('yellow')>-1 && (CheckIsThere.indexOf('l1') > -1 || CheckIsThere.indexOf('l2') > -1))
                 {
                    if(CheckIsThere.indexOf('l1')>-1)
                    {
                        $('.color-text .l1').removeClass('green-color');
                    }
                    else{
                        $('.color-text  .l2').removeClass('green-color');
                    }
                 }
              else if(clickHelpbox.indexOf('purple')>-1 && (CheckIsThere.indexOf('p1') > -1 || CheckIsThere.indexOf('p2') > -1))
                 {
                    if(CheckIsThere.indexOf('p1')>-1)
                    {
                        $('.color-text .p1').removeClass('green-color');
                    }
                    else{
                        $('.color-text  .p2').removeClass('green-color');
                    }
                 }
                else{
                    $('.'+clickHelpbox+'.'+checkHelpBoxText).removeClass('green-color');
                }
            }
        }
    });



































  $('.button').click(function(){
            if($('.button').hasClass('playAgain'))
    {
      window.location.href = window.location.href;
    }
    else
    {
                var inputCount=0;
    for(var j=0;j<=9;j++){
      var classNames=['.first.click','.second.click','.third.click','.fourth.click','.fifth.click','.sixth.click','.seventh.click','.eighth.click','.nineth.click','.tenth.click'];
      if($(classNames[j]).length > 0){
        inputCount++;
      }
    }
    if(inputCount >= 5){
                var DisplayResult="";  
                DisplayResult='.fabulous';
                $('.line').show();
                $('.option.active').css('pointer-events','none');
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
        $('.result .TextBox h1').text('Please mark at least 5 words before submitting');
      },500);
    }
    }
  });
  
    });
    $('.result,.close').click(function(){
      $('.result').fadeOut();
      $('.close').show();
    });
            function setImages(){
var AllImages=['assets/images/fabulous.gif'];
  $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
  });
}
// js



  }

}
