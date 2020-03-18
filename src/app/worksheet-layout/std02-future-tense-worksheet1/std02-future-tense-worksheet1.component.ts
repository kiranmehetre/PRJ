import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-future-tense-worksheet1',
  templateUrl: './std02-future-tense-worksheet1.component.html',
  styleUrls: ['./std02-future-tense-worksheet1.component.scss']
})
export class Std02FutureTenseWorksheet1Component implements OnInit {

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
var Spans=$('.Question').not('.fourth').find('.text-left span');
$(Spans).click(function () {
    if ($(this).hasClass('underlined')) {
        $(this).removeClass('underlined');
    }
    else {
        $(this).parent().find('span').removeClass("underlined");
        $(this).addClass('underlined');
    }
});
$('.Question.fourth .text-left span').click(function () {
    var Text=$(this).text();
    if(Text=="Will" || Text=="plant"){
        if ($(this).hasClass('underlined')) {
            $('.Question.fourth .text-left').find("span:contains(Will)").removeClass('underlined');
            $('.Question.fourth .text-left').find("span:contains(plant)").removeClass('underlined');
        }
        else {
            $(this).parent().find('span').removeClass("underlined");
            $('.Question.fourth .text-left').find("span:contains(Will)").addClass('underlined');
            $('.Question.fourth .text-left').find("span:contains(plant)").addClass('underlined');
        }
    }
    else{
        if ($(this).hasClass('underlined')) {
            $(this).removeClass('underlined');
        }
        else {
            $(this).parent().find('span').removeClass("underlined");
            $(this).addClass('underlined');
        }
    }
});

$('.button').click(function () {
    if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
    }
    else {
        var i = 0;
        var underlinedCount = 0;
        var Correct_Answers_Count = 0;
        $('.text-left').each(function () {
            if ($(this).find('.underlined').length > 0) {
                underlinedCount++;
            }
        });
        if (underlinedCount >= 4) {
            $('.text-left').each(function () {
                if ($(this).find('.underlined.correct-ans').length > 0) {
                    Correct_Answers_Count++;
                }
            });
            
            $('.correct-ans').each(function(){
                if($(this).hasClass('underlined')){
                    $(this).addClass('correct_bordered');
                }
                else{
                    $(this).addClass('correct');
                }
            });
            $('.underlined').not('.correct-ans').css('color', '#ed1a1a');
            $('input,.text-left span').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 8;

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
                $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
            }, 500);
        }
    }


});

$('input').attr('readonly', 'readonly');

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
