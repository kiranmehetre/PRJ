import { Component, OnInit, Renderer2 } from '@angular/core';
import {Title} from "@angular/platform-browser";
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-singular-plural-nouns-worksheet9',
  templateUrl: './std01-singular-plural-nouns-worksheet9.component.html',
  styleUrls: ['./std01-singular-plural-nouns-worksheet9.component.scss']
})
export class Std01SingularPluralNounsWorksheet9Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body,'background','#fee684')
   }

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
$(document).ready(function(){
  var inputField;
        var inputValue;
        var ClickAnswer=[];
  var HelpBox=[];
        var Text="";
        var inputs=$('input');
        $(inputs).attr('readonly','readonly');
  $(inputs).css('cursor','pointer');

        $(inputs).click(function(){
            inputField=$(this);
            $(inputs).removeClass('bd');
            $(this).addClass('bd');
    inputValue=$(inputField).val();
    ClickAnswer = $.grep(ClickAnswer, function(value) {
              return value != inputValue;
            });
    $(".option").filter(function() {
      return $(this).text().trim() === inputValue;
    }).removeClass('click');
    $(this).val("");
        });
  $('.option').click(function(){
            if(inputField !== undefined){
                inputValue=$(inputField).val();
      Text=$(this).text().trim();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
        $(".option").filter(function() {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
      }
      $(this).addClass('click');
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
        });
  
  $('.button').click(function(){
            if($('.button').hasClass('playAgain'))
    {
      window.location.href = window.location.href;
    }
    else
    {
                var InputCount=$('input').filter(function () {return !!$(this).val()}).length;
            // var pluralCount=$('.plural_slide input').filter(function () {return !!this.value;}).length;
            var Correct_Answers_Count=0;
            if(InputCount >= 4){
      $(inputs).removeClass('bd');
                var singularInputs=$('.singular_slide input');
                var pluralInputs=$('.plural_slide input');
            var inputArray=[singularInputs,pluralInputs];
            var Correct_Answers=[];
                Correct_Answers[0]=["sea-saw","tree","bench","bicycle"];
                Correct_Answers[1]=["boys","girls","swings","bushes"];
                for(var j=0;j<=1;j++){
                    var Wrong_Answers=[];
                    var inputField_Array=[];
                    var inputValues=[];
                    $(inputArray[j]).each(function(){
                        if(Correct_Answers[j].indexOf($(this).val()) < 0){
                            inputField_Array.push($(this));
                        }
                        else
                        {
                            inputValues.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    
                    Correct_Answers[j].filter(function(el) {
                      if ($.inArray(el, inputValues) == -1) Wrong_Answers.push(el);
                   });	
                    var inputBlock=[".singular_slide",".plural_slide"];
                    for(var i=0; i< Wrong_Answers.length;i++){
                        var strClass=$(inputField_Array[i]).attr('class');
                        var Block=inputBlock[j];
                        var strBlock=Block+' .correct_answer.'+strClass;
                        console.log(strBlock);
                        $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                        $(strBlock).find('span').text(Wrong_Answers[i]);
                        $(strBlock).css('display','inline-block');
                    }
                }
                $('input,.options span').css('pointer-events','none');
                var percentage=	(Correct_Answers_Count * 100) / 8;
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
  
    });
    $('.result,.close').click(function(){
      $('.result').fadeOut();
      $('.close').show();
    });
            function setImages(){
var AllImages=['assets/images/keep-practicing.gif','assets/images/outstanding.gif','assets/images/brilliant.gif',
'assets/images/good-work.gif','assets/images/fabulous.gif'];
  $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
  });
}
  }

}
