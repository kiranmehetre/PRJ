import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-helping-verbs-worksheet4',
  templateUrl: './std01-helping-verbs-worksheet4.component.html',
  styleUrls: ['./std01-helping-verbs-worksheet4.component.scss']
})
export class Std01HelpingVerbsWorksheet4Component implements OnInit {

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
// str

var selectext=false;
$( ".answer-background" ).each(function( i ) {
	$(this).attr('id', 'question' + i);
	
	});
	

	$('.answer-background span').click(function () {
				if($(this).hasClass('underlined')){
					var click=$(this).parent().attr('id');
					$("#"+click+" span").removeClass("underlined");
				}
				else{
					var click=$(this).parent().attr('id');
					$("#"+click+" span").removeClass("underlined");
					$(this).addClass("underlined");
				}
	});
	
	
	$('.button').click(function () {
				if($('.button').hasClass('playAgain'))
				{
					window.location.href = window.location.href;
				}
				else
				{
					if($('.underlined').length>=4)
					{	var Correct_Answers_Count=0;
						var i=0;
						var Correct_Answers=["was","were","was","were","were","was","were","was"];
						// $('.question').each(function(i){
						// 	var Spans;
						// 	var underlined=$(this).find('.underlined');
						// 	if(underlined !== undefined){
						// 		if(underlined.text() !==Correct_Answers[i] ){
						// 			$(underlined).css('color','red');
						// 		}
						// 		else{
						// 			Correct_Answers_Count++;
						// 		}
						// 	}
						// 	$('.answer').css({"color":"#20bb15","text-decoration":"underline","text-shadow":"0px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"});
							
						// });
						$('.answer').each(function(){
							if($(this).hasClass('underlined')){
								$(this).addClass('correct');
							}
							else{
								$(this).addClass('correct_white');
							}
						});
                  		  $('.underlined').not('.answer').css('color', '#ed1a1a');
						var Correct_Answers_Count=$('.underlined.answer').length;
						var percentage=	(Correct_Answers_Count * 100) / 8;
						$('.answer-background span').css('pointer-events','none');
						var DisplayResult="";    
						if(percentage > 80)
						{
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
							$('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
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
    // ens
  }

}
