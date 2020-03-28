import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-present-tense-worksheet3',
  templateUrl: './std03-present-tense-worksheet3.component.html',
  styleUrls: ['./std03-present-tense-worksheet3.component.scss']
})
export class Std03PresentTenseWorksheet3Component implements OnInit {

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
    
    
    var Correct_Answer = ['is cooking', 'is writing', 'are cycling', 'are swimming', 'is travelling', 'is crying', 'are making', 'is drawing', 'am meeting', 'are dancing'];
    var i = 0;
    for (i = 0; i <= Correct_Answer.length; i++) {
        $(".text-container span").filter(function () {
            return $(this).text() === Correct_Answer[i];
        }).addClass('right');
    }
    
    $('.text-container span').click(function () {
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
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
    
            var underlinedCount = $('.underlined').length;
            if (underlinedCount >= 5) {
    
                $('.right').each(function () {
                    if ($(this).hasClass('underlined')) {
                        $(this).addClass('correct');
                    }
                    else {
                        $(this).addClass('correct_white');
                    }
                });
    
                var Correct_Answers_Count = 0;
                $('.text-container').each(function () {
                    var CountRightUnderline = $(this).find('.underlined.right').length;
                    if (CountRightUnderline > 0) {
                        Correct_Answers_Count++;
                    }
    
                });
                // debugger;
                $('.underlined').not('.right').css('color', '#ed1a1a');
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
                $('.text-container').addClass('disabled');
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
