import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-antonyms-worksheet4',
  templateUrl: './std01-antonyms-worksheet4.component.html',
  styleUrls: ['./std01-antonyms-worksheet4.component.scss']
})
export class Std01AntonymsWorksheet4Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;

    
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
		var clickAnswer=[];
		var inputValue;
		var inputs=$('input');
		var inputFieldValues=["","","",""];

	   $(inputs).on('click',function() {
			inputField = $(this);
			inputValue=$(this).val();
			$(inputs).parent().removeClass("bd");
			$(this).parent().addClass('bd');

			clickAnswer = $.grep(clickAnswer, function(value) {
									return value != inputValue;
								
								});
			$(".helpbox-ans").filter(function() {
				return $(this).find('span').text().trim() === inputValue;
			}).removeClass('black');
			$(this).val("");
		});

		$('input').attr('readonly','readonly');
		var Text = '';
		var HelpBox=[];

		$('.helpbox-ans').click(function() {
				inputValue=$(inputField).val();
				if (inputField !== undefined) {
				Text=$(this).find('span').text().trim();
				HelpBox.push(Text);
				if(HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0){
					$(".helpbox-ans").filter(function() {
						return $(this).find('span').text().trim() === inputValue;
					}).removeClass('black');
				}
				$(this).addClass('black');
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
		});

		$('.button').click(function () {
				if($('.button').hasClass('playAgain'))
				{
					globalThis.commonWorksheet.reloadComponent();
				}
				else
				{
					var	Correct_Answers_Count=0;
					var Correct_answer=["beautiful","dirty","under","small"];
					var inputCount=$('input[type="text"]').filter(function () {
											return !!$(this).val();
										}).length;
					if(inputCount>=2){
						$(inputs).parent().removeClass("bd");
						$('input').each(function(i){
							if($(this).val() !== Correct_answer[i]){
								$(this).parent().next().css('display','block');
								$(this).css(
									{
										'color' : '#ed1a1a',
										'border-color' : '#000'
									}
								);
							}
							else{
								Correct_Answers_Count++;
							}
						});
						$('.answer-img').css('display','inline-block');
						$('.helpbox-ans,input').css('pointer-events','none');
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
					else{
						setTimeout(function(){
							$('.result').css('display','flex');
							$('.result .TextBox h1').text('Please solve at least 2 blanks before submitting');
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
    	$('.imgBox img').each(function(i){
                var t=new Date().getTime();
                $(this).attr("src", AllImages[i]+'?'+t);
			});
}		
  }

}
