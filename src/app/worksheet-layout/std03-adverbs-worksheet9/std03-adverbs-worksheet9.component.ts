import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-adverbs-worksheet9',
  templateUrl: './std03-adverbs-worksheet9.component.html',
  styleUrls: ['./std03-adverbs-worksheet9.component.scss']
})
export class Std03AdverbsWorksheet9Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;

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
    $(document).ready(function () {
        var Correct_Answers = ["Yesterday", "extremely", "carefully", "tightly", "Slowly", "Once", "inside", "Then", "gently", "Soon"];
        var text = $('.information-block span').text();
        var $words = text.split(" ");
        var $newText = "";
       
        var inputField;
        var inputValue;
        var ClickAnswer = [];
        var HelpBox = [];
        var Text = "";
        var Correct_Answers_Count = 0;
        var inputs = $('input');
        $(inputs).attr('readonly', 'readonly');
        $(inputs).css('cursor', 'pointer');
    
        $(inputs).click(function () {
            inputField = $(this);
            $(inputs).parent().removeClass('bd');
            $(this).parent().addClass('bd');
            inputValue = $(inputField).val();
            ClickAnswer = $.grep(ClickAnswer, function (value) {
                return value != inputValue;
            });
            $(".information-block span").filter(function () {
                return $(this).text().trim() === inputValue;
            }).removeClass('underlined');
            $(this).val("");
        });
        $('.information-block span').click(function () {
            if (inputField !== undefined) {
                inputValue = $(inputField).val();
                Text = $(this).text().trim();
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
                    $(".information-block span").filter(function () {
                        return $(this).text().trim() === inputValue;
                    }).removeClass('underlined');
                }
                $(this).addClass('underlined');
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
    
        $('.button').click(function () {
    
            if ($('.button').hasClass('playAgain')) {
                globalThis.commonWorksheet.reloadComponent();
            }
            else {
                var Correct_Answers_Count = 0;
                var inputCount = $('input[type="text"]').filter(function () {
                    return !!$(this).val();
                }).length;
                if (inputCount >= 5) {
                    $(inputs).parent().removeClass('bd');
                    var Answers = [];
                    $('input').each(function (i) {
                        if (Correct_Answers.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    var Wrong_Answers = [];
    
                    Correct_Answers.filter(function (el) {
                        if ($.inArray(el, Answers) == -1) Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('input').each(function (i) {
                        if (Correct_Answers.indexOf($(this).val().toString()) == -1) {
                            $(this).parent().siblings('.ans-div').find('span').text(Wrong_Answers[ctr]);
                            $(this).parent().siblings('.ans-div').css('display', 'block');
                            ctr++;
                        }
                    });
                    $('.right').addClass('answer');
                    $('.underlined').not('.right').css('color', '#ed1a1a');
                    $('.right').not('.underlined').addClass('correct_white');
                    var percentage = (Correct_Answers_Count * 100) / 10;
                    var ImgURL = "";
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
    
                    $('input,.information-block span').css('pointer-events', 'none');
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
