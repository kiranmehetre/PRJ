import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-suffix-worksheet2',
  templateUrl: './std03-suffix-worksheet2.component.html',
  styleUrls: ['./std03-suffix-worksheet2.component.scss']
})
export class Std03SuffixWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();

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
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
theToggle.onclick = function () {
    toggleClass(this, 'on');
    $('.menu-block #menu').show();
    $('#toggle span img').toggleClass('up');
    return false;
}
var inputField;
var clickAnswer = [];
var inputValue;
var Text = "";
var HelpBox = [];
$('input').attr('readonly', 'readonly');
$('input').click(function () {
    inputField = $(this);
    inputValue = $(this).val();
    $('input').parent().removeClass('bd');
    $(this).parent().addClass('bd');
    if (inputValue != "" && inputValue != null) {
        inputValue = inputValue + ')';
    }

    clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue.replace(')', "");
    });
    $(".answer-container").filter(function () {
        return $(this).find('.alphabet span').text() === inputValue;
    }).removeClass('click');
    $(this).val("");

});
$('.answer-container').click(function () {
    if (inputField !== undefined) {
        inputValue = $(inputField).val();
        Text = $(this).find('.alphabet span').text().replace(')', '');
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".answer-container").filter(function () {
                return $(this).find('.alphabet span').text().replace(')', '') === inputValue;
            }).removeClass('click');
        }
        $(this).addClass('click');

        if (clickAnswer.indexOf(Text) > -1) {
        }
        else {
            $(inputField).val($(this).find('.alphabet span').text().replace(')', ''));
            clickAnswer = $.grep(clickAnswer, function(value) {
                            return value != inputValue;
                        });
            clickAnswer.push(Text);
        }
    }
});

$('.button').click(function () {



    if ($('.button').hasClass('playAgain')) {
        globalThis.commonWorksheet.reloadComponent();
    }
    else {
        var Correct_Answers_Count = 0;
        var inputCount=$('input[type="text"]').filter(function () {
                            return !!$(this).val();
                        }).length;
        if (inputCount>= 4) {
            var i = 0;
            var Correct_Answers = ["E", "H", "B", "G", "D", "A", "F", "C"];
            $('input').parent().removeClass('bd');
            $('input').each(function () {
                if ($(this).val().toString() !== Correct_Answers[i]) {
                    $(this).css({ 'color': '#ed1a1a' });
                    $(this).parent().prev().css({ 'visibility': 'visible' })
                }
                else {
                    Correct_Answers_Count++;
                }
                i++;
            });
            $('input,td,.answer-container').css('pointer-events', 'none');
            $('input,.alphabet').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 8;
            var ImgURL = "";
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

            //$('.answer').css({'display':'block'})
        }
        else {
            setTimeout(function () {
                $('.result').css('display', 'flex');
                $('.result .TextBox h1').text('Please solve at least 4 boxes before submitting');
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
