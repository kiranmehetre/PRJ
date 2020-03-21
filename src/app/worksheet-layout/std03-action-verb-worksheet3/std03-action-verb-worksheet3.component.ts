import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-action-verb-worksheet3',
  templateUrl: './std03-action-verb-worksheet3.component.html',
  styleUrls: ['./std03-action-verb-worksheet3.component.scss']
})
export class Std03ActionVerbWorksheet3Component implements OnInit {

  constructor() { }

  ngOnInit() {

     $('.loadingDiv').hide();
      setImages();
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
    
    
    
    
    var Correct_Answer = ['chased', 'slammed', 'quit', 'wrecked', 'hit', 'whispered', 'fumbled', 'examined', 'peeks', 'wakes', 'creates', 'crumpled', 'threw'];
    var i = 0;
    for (i = 0; i <= Correct_Answer.length; i++) {
        $(".text-container span").filter(function () {
            return $(this).text() === Correct_Answer[i];
        }).addClass('right');
    }
    
    $('.text-container span').click(function () {
        var CheckUnderline = false;
        if ($(this).hasClass('underlined')) {
            CheckUnderline = true;
            $(this).removeClass('underlined');
        }
        var CountUnderlined = $(this).parent().find('.underlined').length;
        if (!CheckUnderline) {
            if (CountUnderlined < 2) {
                if ($(this).hasClass('underlined')) {
                    $(this).removeClass('underlined');
                }
                else {
                    // $(this).parent().find('span').removeClass("underlined");
                    $(this).addClass('underlined');
                }
            }
            else {
                alert('Please deselect any one')
            }
        }
    
    
    });
    
    
    
    
    $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
            window.location.href = window.location.href;
        }
        else {
            
            var underlinedCount = 0;
            $('.question').each(function(){
                if($(this).find('.underlined').length > 0){
                    underlinedCount++;
                }
            });
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
                $('.text-container').addClass('disabled');
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
