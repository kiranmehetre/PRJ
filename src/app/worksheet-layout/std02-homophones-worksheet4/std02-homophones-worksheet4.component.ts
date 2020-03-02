import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-homophones-worksheet4',
  templateUrl: './std02-homophones-worksheet4.component.html',
  styleUrls: ['./std02-homophones-worksheet4.component.scss']
})
export class Std02HomophonesWorksheet4Component implements OnInit {

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
var clickAnswer=[];
var inputValue;
$( ".Question" ).each(function( i ) {

$(this).attr('id', 'question' + i);

var id=$(this).attr('id', 'question' + i);
});
$('input').attr('readonly','readonly');
    var inputs = document.querySelectorAll('input');
var inputField;
 $('.Question input').on('click',function() {
    inputField = $(this);
    inputValue=$(this).val();
            $(inputs).removeClass('bd');
            $(this).addClass('bd');

            clickAnswer = $.grep(clickAnswer, function(value) {
                                    return value != inputValue;
                                });
            $(".option span").filter(function() {
                return $(this).text() === inputValue;
            }).removeClass('click');
            $(this).val("");
});
var Text = '';
    var HelpBox=[];

$('.option span').each(function() {

   $(this).on('click',function(event)
  {
      inputValue=$(inputField).val();
    if (inputField !== undefined) {
                inputValue=$(inputField).val();
                Text=$(this).text();
                HelpBox.push(Text);
                if(HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0){
                    $(".option span").filter(function() {
                        return $(this).text() === inputValue;
                    }).removeClass('click');
                }
                $(this).addClass('click');
                if(clickAnswer.indexOf(Text)>-1){
                }
                else{
                    clickAnswer = $.grep(clickAnswer, function(value) {
                                return value != inputValue;
                            });
                    $(inputField).val(Text);
                    clickAnswer.push(Text);
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
                var inputCount=$('input[type="text"]').filter(function () {
                            return !!$(this).val();
                        }).length;
        var Correct_Answers_Count=0;

  var Correct_answer=["wood","bored","grate","knight","steak","serial","steal","witch","ferry","threw","root","scent"];

  if(inputCount >= 6){
    var ctr=0;
    $('.Question input').each(function(){
      if($(this).val().toString().trim() !== Correct_answer[ctr]){
        $(this).css(
          {
            'color' : '#ed1a1a',
            'border-color' : '#fff'
          }
        );
            $(this).siblings('.correct_answer').css('display','inline-block');
      }
                else{
                    Correct_Answers_Count++;
                }
      ctr++;
    });
            $(inputs).removeClass('bd');
            $('input,.option').css('pointer-events','none');
            var percentage=	(Correct_Answers_Count * 100) / 12;
            var DisplayResult="";    
            if(percentage > 80)
    {
                DisplayResult='.outstanding';
            }
            else if(percentage > 60){
                DisplayResult='.brilliant';
            }
            else if(percentage > 50){
                DisplayResult='.good-work';
            }
            else if(percentage <= 50){
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
                    $('.result .TextBox h1').text('Please solve at least 6 blanks before submitting');
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
