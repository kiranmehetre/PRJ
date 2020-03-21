import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-adverbs-worksheet7',
  templateUrl: './std03-adverbs-worksheet7.component.html',
  styleUrls: ['./std03-adverbs-worksheet7.component.scss']
})
export class Std03AdverbsWorksheet7Component implements OnInit {

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
            $(inputs).parent().removeClass('bd');
            $(this).parent().addClass('bd');
            inputValue = $(inputField).val();
            ClickAnswer = $.grep(ClickAnswer, function (value) {
                return value != inputValue;
            });
            $(".helpbox-container span").filter(function () {
                return $(this).text().trim() === inputValue;
            }).removeClass('click');
            $(this).val("");
        });
        $('.helpbox-container span').click(function () {
            if (inputField !== undefined) {
                inputValue = $(inputField).val();
                Text = $(this).text().trim();
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
                    $(".helpbox-container span").filter(function () {
                        return $(this).text().trim() === inputValue;
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
                window.location.href = window.location.href;
            }
            else {
                var inputCount = $('input[type="text"]').filter(function () {
                    return !!$(this).val();
                }).length;
                $(inputs).parent().removeClass('bd');
                if (inputCount >= 12) {
                    $(inputs).removeClass('bd');
                    var Correct_Answers_Count = 0;
                    var Correct_Answers_Manner = ["well", "urgently", "greatly", "thoughtfully", "jealously", "cheerfully"];
                    var Correct_Answers_Place = ["anywhere", "nearby", "inside", "downstairs", "abroad", "northwards"];
                    var Correct_Answers_Time = ["now", "currently", "late", "today", "afterwards", "early"];
                    var Correct_Answers_Frequency = ["daily", "never", "hardly", "seldom", "quite", "often"];
                    var Manner_Answers = [];
                    var Place_Answers = [];
                    var Time_Answers = [];
                    var Frequency_Answers = [];
                    $('.Manner input').each(function (i) {
                        if (Correct_Answers_Manner.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Manner_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    $('.Place input').each(function (i) {
                        if (Correct_Answers_Place.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Place_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    $('.Time input').each(function (i) {
                        if (Correct_Answers_Time.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Time_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    $('.Frequency input').each(function (i) {
                        if (Correct_Answers_Frequency.indexOf($(this).val().toString()) == -1) {
                            $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                        }
                        else {
                            Frequency_Answers.push($(this).val());
                            Correct_Answers_Count++;
                        }
                    });
                    var Manner_Wrong_Answers = [];
                    var Place_Wrong_Answers = [];
                    var Time_Wrong_Answers = [];
                    var Frequency_Wrong_Answers = [];
    
                    Correct_Answers_Manner.filter(function (el) {
                        if ($.inArray(el, Manner_Answers) == -1) Manner_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Manner input').each(function (i) {
                        if (Correct_Answers_Manner.indexOf($(this).val().toString()) == -1) {
                            $(this).parent().siblings('.ans-div').find('span').text(Manner_Wrong_Answers[ctr]);
                            $(this).parent().siblings('.ans-div').css('display', 'block');
                            ctr++;
                        }
                    });
    
                    Correct_Answers_Place.filter(function (el) {
                        if ($.inArray(el, Place_Answers) == -1) Place_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Place input').each(function (i) {
                        if (Correct_Answers_Place.indexOf($(this).val().toString()) == -1) {
                            $(this).parent().siblings('.ans-div').find('span').text(Place_Wrong_Answers[ctr]);
                            $(this).parent().siblings('.ans-div').css('display', 'block');
                            ctr++;
                        }
                    });
    
                    Correct_Answers_Time.filter(function (el) {
                        if ($.inArray(el, Time_Answers) == -1) Time_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Time input').each(function (i) {
                        if (Correct_Answers_Time.indexOf($(this).val().toString()) == -1) {
                            $(this).parent().siblings('.ans-div').find('span').text(Time_Wrong_Answers[ctr]);
                            $(this).parent().siblings('.ans-div').css('display', 'block');
                            ctr++;
                        }
                    });
    
                    Correct_Answers_Frequency.filter(function (el) {
                        if ($.inArray(el, Frequency_Answers) == -1) Frequency_Wrong_Answers.push(el);
                    });
                    var ctr = 0;
                    $('.Frequency input').each(function (i) {
                        if (Correct_Answers_Frequency.indexOf($(this).val().toString()) == -1) {
                            $(this).parent().siblings('.ans-div').find('span').text(Frequency_Wrong_Answers[ctr]);
                            $(this).parent().siblings('.ans-div').css('display', 'block');
                            ctr++;
                        }
                    });
                    var percentage = (Correct_Answers_Count * 100) / 24;
                    console.log(Correct_Answers_Count);
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
    
                    $('input,.helpbox-container span').css('pointer-events', 'none');
                }
                else {
                    setTimeout(function () {
                        $('.result').css('display', 'flex');
                        $('.result .TextBox h1').text('Please solve at least 12 blanks before submitting');
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
