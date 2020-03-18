import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-vocabulary-worksheet10',
  templateUrl: './std02-vocabulary-worksheet10.component.html',
  styleUrls: ['./std02-vocabulary-worksheet10.component.scss']
})
export class Std02VocabularyWorksheet10Component implements OnInit {

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
var ClickAnswer = [];
var HelpBox = [];
var inputValue;
var Correct_Answers_Count = 0;
var inputField;
$('input').attr('readonly', 'readonly');

$('input').on('click', function () {
    inputField = $(this);
    inputValue = $(this).val();
    $('input').removeClass('bd');
    $(this).addClass('bd');
    ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
    });
    $(".helpbox-ans span").filter(function () {
        return $(this).text() === inputValue;
    }).removeClass('white');
    $(this).val("");

});

var Text = '';

$('.helpbox-ans').each(function () {
    $(this).on('click', function (event) {
        inputValue = $(inputField).val();
        if (inputField !== undefined) {
            inputValue = $(inputField).val();
            Text = $(this).text().trim();
            HelpBox.push(Text);
            if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
                $(".helpbox-ans span").filter(function () {
                    return $(this).text() === inputValue;
                }).removeClass('white');
            }
            $(this).find('span').addClass('white');
            if (ClickAnswer.indexOf(Text) > -1) {

            }
            else {
                ClickAnswer = $.grep(ClickAnswer, function (value) {
                    return value != inputValue;
                });
                $(inputField).val(Text);
                ClickAnswer.push(Text);
            }
        }
    });
});

    $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
            window.location.href = window.location.href;
        }
        else {
            var inputCount = $('input[type="text"]').filter(function () {
                return !!$(this).val();
            }).length;
            if (inputCount >= 4) {
                $('input').removeClass('bd');
                var Correct_Answers = ["veterinarian", "tailor", "waiter", "gardener", "banker", "postman", "butcher", "sailor"];
                $('input').each(function (i) {
                    if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                        $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        $(this).siblings('.correct-answer').css('visibility', 'visible');
                    }
                    else {
                        Correct_Answers_Count++;
                    }
                });
                $('input,.helpbox-ans').css('pointer-events', 'none');
                var ImgURL = "";
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
