import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-homophones-worksheet6',
  templateUrl: './std02-homophones-worksheet6.component.html',
  styleUrls: ['./std02-homophones-worksheet6.component.scss']
})
export class Std02HomophonesWorksheet6Component implements OnInit {

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
		var OptionList = "";
		var QuestionNumber = "";
		var inputValue;
		var question_number_check;
		var click_question_number;
		var HelpBox = [];
		$(".Main_Container > .row").each(function (i) {
			$(this).attr('id', 'question' + i);
		

		});
		$(".Option").each(function (i) {
			$(this).attr('id', 'Option' + i);
		});
		$('input').attr('readonly', 'readonly');

		$('input').click(function () {
			$('input').removeClass('bd');
			$(this).addClass('bd');
			inputField = $(this);
			QuestionNumber = $(this).parent().parent().parent().attr('id');
			var OptionNumber = QuestionNumber[QuestionNumber.length - 1];
			question_number_check = QuestionNumber;
			OptionList = $('#Option' + OptionNumber).text();
			// $(this).closest('Question').find('.hint').removeClass('click');
			var Hints=$(this).closest('.Question').find('.hint');
			$(Hints).filter(function(){
				return $(this).text() == $(inputField).val();
			}).removeClass('click');
			$(this).val('');
		});

	

		$('.hint').click(function () {
			if (inputField !== undefined) {

				click_question_number = $(this).parent().parent().parent().parent().attr('id');
				if (OptionList.indexOf($(this).text()) > -1 && click_question_number === question_number_check) {
					$(inputField).val($(this).text());
					HelpBox.push($(this).text().trim());
					var Optionclass = $(this).parent().parent().attr('class');
					// var Option = $(this).parent().parent().parent();
					var Option = $(this).closest('.Question');
					$(Option).find('.hint').removeClass('click');
					$(this).addClass('click');
				}
			}
		});

			

		$('.button').click(function () {

			if ($('.button').hasClass('playAgain')) {
				globalThis.commonWorksheet.reloadComponent();
			}
			else {
			
        let inputCount=$('input[type="text"]').filter(function () {
          return !! $(this).val();
      }).length;

        if (inputCount >= 4) 
        {
          var i = 0;
          var Correct_answers_count = 0;
          $('input').removeClass('bd');
        
          var Correct_answers = ["bear", "plane", "hole", "made", "Beet", "pail", "hour", "meat"]
					$('input').each(function () {
						if ($(this).val().toString().trim() !== Correct_answers[i]) {
							// $(this).css({ 'color': '#ed1a1a' });
							$(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
							$(this).parent().find('.answer').css('display', 'inline-block');

						}
						else {
							Correct_answers_count++;
						}
						i++;
					});
					$('input,.hint').css('pointer-events', 'none');
					var percentage = (Correct_answers_count * 100) / 8;
					var DisplayResult = "";
					if (percentage > 80) {
						DisplayResult = '.outstanding';
					}
					else if (percentage > 60) {
						DisplayResult = '.brilliant';
					}
					else if (percentage >= 50) {
						DisplayResult = '.good-work';
					}
					else if (percentage < 50) {
						DisplayResult = '.keep-practicing';
					}

					setTimeout(function () {
						$('.result').css('display', 'flex');
						$('.result .TextBox').hide();
						$(DisplayResult).removeClass('hide');
						$('.result .imgBox').show();
						$('.result').delay(2000).fadeOut('slow');
						$('.close').hide();
					}, 500);

					setTimeout(function () {
						$('.button').addClass('playAgain');
						$('.button.playAgain').text('solve again');
					}, 500);

				}
				else {
					setTimeout(function () {
						$('.result').css('display', 'flex');
						$('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
					}, 500);
				}
			}
		});

		$('.result,.close').click(function () {
			$('.result').fadeOut();
			$('.close').show();
		});

		function setImages() {
			var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
			$('.imgBox img').each(function (i) {
				var t = new Date().getTime();
				$(this).attr("src", AllImages[i] + '?' + t);
			});
		}    

  }

}
