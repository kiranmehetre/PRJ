import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-compound-words-worksheet3',
  templateUrl: './std02-compound-words-worksheet3.component.html',
  styleUrls: ['./std02-compound-words-worksheet3.component.scss']
})
export class Std02CompoundWordsWorksheet3Component implements OnInit {

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


$( ".QuestionRow" ).each(function( i ) {
		
  $(this).attr('id', 'question' + i);

  var id=$(this).attr('id', 'question' + i);
  });
  
  var inputField;
  var inputValue;
  var ClickAnswer=[];
  var HelpBox=[];
   $('.Answer input').on('click',function() {
    inputField = $(this);
    inputValue=$(this).val();
    $('input').removeClass('bd');
    $(this).addClass('bd');

    ClickAnswer = $.grep(ClickAnswer, function(value) {
                return value != inputValue;
              });
    $("td span").filter(function() {
      return $(this).text() === inputValue;
    }).removeClass('white');
    $(this).val("");
  });

  var Text = '';
  
  $('input').attr('readonly','readonly');
  $('.option span').each(function() {
     $(this).on('click',function(event)
    {
      inputValue=$(inputField).val();
      if (inputField !== undefined) {
       Text = $(this).text();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
        $("td span").filter(function() {
          return $(this).text() === inputValue;
        }).removeClass('white');
      }
      $(this).addClass('white');
      if(ClickAnswer.indexOf(Text) > -1){
      }
      else{
        ClickAnswer = $.grep(ClickAnswer, function(value) {
                                  return value != inputValue;
                              });
        $(inputField).val(Text);
        ClickAnswer.push(Text);
      }
    }
    } );

  
  });


  $('.button').click(function () {
    if($('.button').hasClass('playAgain'))
    {
      window.location.href = window.location.href;
    }
    else
    {
      var Correct_answer=["flowerpot","toothbrush","timetable","wheelchair","handwriting","keyboard","dishwasher","crossroad"];
      var inputCount=$('input[type="text"]').filter(function () {
                  return !!$(this).val();
                }).length;
      if(inputCount>=4){
        
        var ctr=0;
        var Correct_Answer_Count=0;
        $('.Answer input').each(function(){
          if($(this).val().toString().trim() !== Correct_answer[ctr]){
            $(this).css({'color' : '#ed1a1a','border-color' : '#000'});
            $(this).next().css('display','inline-block');
          
          }
          else{
            Correct_Answer_Count++;
          }
          ctr++;
        });
        // $('.correct_answer').css('display','inline-block');
        $('.option span,input').css('pointer-events','none');
        $('input').removeClass('bd');
        var percentage=	(Correct_Answer_Count * 100) /8;
        var DisplayResult="";    
        if(percentage > 80){
          DisplayResult='.outstanding';
        }
        else if(percentage > 60){
          DisplayResult='.brilliant';
        }
        else if(percentage >= 50){
          DisplayResult='.good-work';
        }
        else if(percentage < 50){
          DisplayResult='.keep-practicing';
        }
      
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
          $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
        },500);
      }
    }
      });

$('.result,.close').click(function(){
  $('.result').fadeOut();
  $('.close').show();
});
function setImages(){
  var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
  'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
    $('.imgBox img').each(function(i){
              var t=new Date().getTime();
              $(this).attr("src", AllImages[i]+'?'+t);
    });
}
  }

}
