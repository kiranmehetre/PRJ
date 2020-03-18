import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-compound-words-worksheet8',
  templateUrl: './std02-compound-words-worksheet8.component.html',
  styleUrls: ['./std02-compound-words-worksheet8.component.scss']
})
export class Std02CompoundWordsWorksheet8Component implements OnInit {

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
var inputField;
        var inputValue;
        var ClickAnswer=[""];
        var inputs=$('input');
        $('.helpbox input').on('click',function() {
            inputField = $(this); 
            inputValue=$(this).val();
            $(inputs).removeClass('bd');
            $(this).addClass('bd');

            ClickAnswer = $.grep(ClickAnswer, function(value) {
                                        return value != inputValue;
                                    });
            $("table span").filter(function() {
                return $(this).text() === inputValue;
            }).removeClass('click');
            $(this).val("");
        });
        var Text = '';
        var HelpBox=[];
        $('input').attr('readonly','readonly');
     //   $('td span:contains("more")').css({'color':'#0da6d1','pointer-events':'none'});
        $('td span').each(function() {
            $(this).on('click',function(event)
            {
                var inputCount=$('input[type="text"]').filter(function () {
							return !!$(this).val();
						}).length;
                if (inputField !== undefined) {
                    inputValue=$(inputField).val();
                    Text=$(this).text();
                    HelpBox.push(Text);
                    if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
                        $("table span").filter(function() {
                            return $(this).text() === inputValue;
                        }).removeClass('click');
                    }
                    $(this).addClass('click');
                    var Text = $(this).text();
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
            })
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
                    if(inputCount >= 5){
                        var Correct_Answers_Count=0;
                        var IndoorInputs=$('.helpbox.one input');
                        var OutdoorInputs=$('.helpbox.two input');
                        var WaterInputs=$('.helpbox.three input');
                        var inputArray=[IndoorInputs,OutdoorInputs,WaterInputs];
                        var Correct_Answers=[];
                        Correct_Answers[0]=["more","way","where","body"];
                        Correct_Answers[1]=["ache","master","light","phones"];
                        Correct_Answers[2]=["stand","ground","line","weight"];
                        
                        for(var j=0;j<=2;j++){
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
                            for(var i=0; i< Wrong_Answers.length;i++){
                                var dataText=$(inputField_Array[i]).attr('data-text');
                                $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                                $(inputField_Array[i]).siblings('.correct_answer.'+dataText).text(Wrong_Answers[i]);
                                $(inputField_Array[i]).siblings('.correct_answer.'+dataText).css('display','inline-block');
                            }
                        }
                        $(inputs).removeClass('bd');
                        $('input,td span').css('pointer-events','none');
                        var percentage=	(Correct_Answers_Count * 100) / 12;
                        var DisplayResult="";    
                        if(percentage > 80){
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
