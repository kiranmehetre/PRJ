import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-mixed-tense-worksheet4',
  templateUrl: './std03-mixed-tense-worksheet4.component.html',
  styleUrls: ['./std03-mixed-tense-worksheet4.component.scss']
})
export class Std03MixedTenseWorksheet4Component implements OnInit {

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
    
    $(document).ready(function () {
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
            $(inputs).removeClass('bd');
            $(this).addClass('bd');
            inputValue = $(inputField).val();
            ClickAnswer = $.grep(ClickAnswer, function (value) {
                return value != inputValue;
            });
            $(".option").filter(function () {
                return $(this).text() === inputValue;
            }).removeClass('click');
            $(this).val("");
        });
        $('.option').click(function () {
            if (inputField !== undefined) {
                inputValue = $(inputField).val();
                Text = $(this).text();
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
                    $(".option").filter(function () {
                        return $(this).text() === inputValue;
                    }).removeClass('click');
                }
                $(this).addClass('click');
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
                if (inputCount >= 9) {
                    $(inputs).removeClass('bd');
                    var Correct_Answers_Count = 0;
                    var Correct_Answers_Present_Tense = ["is flowing", "am giving", "are studying", "are helping", "is running", "is talking"];
                    var Correct_Answers_Past_Tense = ["was going", "were flying", "were smiling", "were building", "was singing", "was carrying"];
                    var Correct_Answers_Future_Tense = ["will be doing", "will be growing", "will be eating", "will be walking", "will be drawing", "will be making"];
                    var Present_Tense_Answers = [];
                    var Past_Tense_Answers = [];
                    var Future_Tense_Answers = [];
                    $('.Answer_Block.Present_Tense input').each(function (i) {
                        if (Correct_Answers_Present_Tense.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Present_Tense_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    $('.Answer_Block.Past_Tense input').each(function (i) {
                        if (Correct_Answers_Past_Tense.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Past_Tense_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    $('.Answer_Block.Future_Tense input').each(function (i) {
                        if (Correct_Answers_Future_Tense.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Future_Tense_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    var Present_Tense_Wrong_Answers = [];
                    var Past_Tense_Wrong_Answers = [];
                    var Future_Tense_Wrong_Answers = [];
    
                    Correct_Answers_Present_Tense.filter(function (el) {
                        if ($.inArray(el, Present_Tense_Answers) == -1) Present_Tense_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Answer_Block.Present_Tense input').each(function (i) {
                        if (Correct_Answers_Present_Tense.indexOf($(this).val().toString()) == -1) {
                            $(this).siblings('.correct_answer').find('span').text(Present_Tense_Wrong_Answers[ctr]);
                            $(this).siblings('.correct_answer').css('display', 'inline-block');
                            ctr++;
                        }
                    });
    
                    Correct_Answers_Past_Tense.filter(function (el) {
                        if ($.inArray(el, Past_Tense_Answers) == -1) Past_Tense_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Answer_Block.Past_Tense input').each(function (i) {
                        if (Correct_Answers_Past_Tense.indexOf($(this).val().toString()) == -1) {
                            $(this).siblings('.correct_answer').find('span').text(Past_Tense_Wrong_Answers[ctr]);
                            $(this).siblings('.correct_answer').css('display', 'inline-block');
                            ctr++;
                        }
                    });
    
                    Correct_Answers_Future_Tense.filter(function (el) {
                        if ($.inArray(el, Future_Tense_Answers) == -1) Future_Tense_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Answer_Block.Future_Tense input').each(function (i) {
                        if (Correct_Answers_Future_Tense.indexOf($(this).val().toString()) == -1) {
                            $(this).siblings('.correct_answer').find('span').text(Future_Tense_Wrong_Answers[ctr]);
                            $(this).siblings('.correct_answer').css('display', 'inline-block');
                            ctr++;
                        }
                    });
                    $('input,.option').css('pointer-events', 'none');
                    var percentage = (Correct_Answers_Count * 100) / 18;
                    //console.log(Correct_Answers_Count);
                    //console.log(percentage);
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
                }
                else {
                    setTimeout(function () {
                        $('.result').css('display', 'flex');
                        $('.result .TextBox h1').text('Please solve at least 9 blanks before submitting');
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
