import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-present-tense-worksheet4',
  templateUrl: './std03-present-tense-worksheet4.component.html',
  styleUrls: ['./std03-present-tense-worksheet4.component.scss']
})
export class Std03PresentTenseWorksheet4Component implements OnInit {

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
    
    
    $('input').attr('readonly', 'readonly');
    $(document).ready(function () {
        var inputField;
        var inputValue;
        var clickAnswer = [];
        var Text = "";
        var HelpBox = [];
        $('input').click(function () {
            inputField = $(this);
            inputValue = $(this).val();
            $('input').removeClass('bd');
            $(this).addClass('bd');
            clickAnswer = $.grep(clickAnswer, function (value) {
                return value != inputValue;
            });
            $(".option").filter(function () {
                return $(this).text() === inputValue;
            }).removeClass('click');
            $(this).val("");
        });
        $('.option').click(function () {
            inputValue = $(inputField).val();
            if (inputField !== undefined) {
                Text = $(this).find('span').text();
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
                    $(".option").filter(function () {
                        return $(this).text() === inputValue;
                    }).removeClass('click');
                }
                $(this).addClass('click');
                if (clickAnswer.indexOf(Text) > -1) {
    
                }
                else {
                    clickAnswer = $.grep(clickAnswer, function (value) {
                        return value != inputValue;
                    });
                    $(inputField).val(Text);
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
                if (inputCount >= 5) {
                    $('input').removeClass('bd');
                    var Correct_Answers = ["is shivering", "are using", "is yelling", "is practising", "am planning", "are copying", "is speaking", "is ringing", "are going", "is tearing"];
                    $('input').each(function (i) {
                        if ($(this).val().toString() !== Correct_Answers[i]) {
                            $(this).css({ "color": "#ed1a1a", "border-color": "#000" });
                            $(this).next().css('display', 'block');
                        }
                        else {
                            Correct_Answers_Count++;
                        }
                    });
                    // $('.correct_answer').css('display','inline-block');
                    $('input,.option').css('pointer-events', 'none');
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
                        $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
                    }, 500);
                }
            }
        });
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
