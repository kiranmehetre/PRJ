import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-prepositions-worksheet1',
  templateUrl: './std01-prepositions-worksheet1.component.html',
  styleUrls: ['./std01-prepositions-worksheet1.component.scss']
})
export class Std01PrepositionsWorksheet1Component implements OnInit {

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
var Spans = $('.question').find('.text-container span');
$(Spans).click(function () {
    if ($(this).hasClass('underlined')) {
        $(this).removeClass('underlined');
    }
    else {
        $(this).parent().find('span').removeClass("underlined");
        $(this).addClass('underlined');
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
        $('.text-container').each(function () {
            if ($(this).find('.underlined').length > 0) {
                underlinedCount++;
            }
        });
        if (underlinedCount >= 4) {
            $('.text-container').each(function () {
                if ($(this).find('.underlined.correct-ans').length > 0) {
                    Correct_Answers_Count++;
                }
            });

            $('.correct-ans').each(function () {
                if ($(this).hasClass('underlined')) {
                    $(this).addClass('correct_bordered');
                }
                else {
                    $(this).addClass('correct');
                }
            });
            $('.underlined').not('.correct-ans').css('color', '#ed1a1a');
            $('input,.text-container span').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 10;

            var DisplayResult = "";
            if (percentage > 80) {
                DisplayResult = '.outstanding';
            }
            else if (percentage > 60) {
                DisplayResult = '.brilliant';
            }
            else if (percentage > 50) {
                DisplayResult = '.good-work';
            }
            else if (percentage <= 50) {
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
                $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
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
