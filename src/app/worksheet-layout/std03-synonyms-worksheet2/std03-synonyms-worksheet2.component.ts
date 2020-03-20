import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-synonyms-worksheet2',
  templateUrl: './std03-synonyms-worksheet2.component.html',
  styleUrls: ['./std03-synonyms-worksheet2.component.scss']
})
export class Std03SynonymsWorksheet2Component implements OnInit {

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
        var clickAnswer = [];
        var inputValue;
        var inputs = $('input');
        $(inputs).on('click', function () {
            inputField = $(this);
            inputValue = $(this).val();
            $('input').parent().removeClass('bd');
            $(this).parent().addClass('bd');
            clickAnswer = $.grep(clickAnswer, function (value) {
                return value != inputValue;
            });
            $(".Option").filter(function () {
                return $(this).find('.alpha').text().replace(')', '') === inputValue;
            }).removeClass('click');
            $(this).val("");
        });
        $('input').attr('readonly', 'readonly');
        var Text = '';
        var HelpBox = [];
        $('.Option').click(function () {
            if (inputField !== undefined) {
                inputValue = $(inputField).val().toString().trim();
                Text = $(this).find('.alpha').text().replace(')', '');
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
                    $(".Option").filter(function () {
                        return $(this).find('.alpha').text().replace(')', '') === inputValue;
                    }).removeClass('click');
                }
                $(this).addClass('click');
    
    
                if (clickAnswer.indexOf($(this).find('.alpha').text().replace(')', '')) > -1) {
    
                }
                else {
    
                    clickAnswer = $.grep(clickAnswer, function (value) {
                        return value != inputValue;
                    });
                    $(inputField).val($(this).find('.alpha').text().replace(')', ''));
                    clickAnswer.push($(this).find('.alpha').text().replace(')', ''));
                }
            }
        });
    
        $('.button').click(function () {
    
            if ($('.button').hasClass('playAgain')) {
                window.location.href = window.location.href;
            }
            else {
                var Correct_Answers_Count = 0;
                var inputCount=$('input[type="text"]').filter(function () {
                                    return !!$(this).val();
                                }).length;
                if (inputCount >= 5) {
                    var Correct_Answers = ["I", "D", "G", "J", "F", "C", "A", "E", "H", "B"];
                    $('input').each(function (i) {
                        if ($(this).val().toString() !== Correct_Answers[i]) {
                            $(this).css('color', '#ed1a1a');
                            $(this).parent().next().css('display', 'inline-block');
                        }
                        else {
                            Correct_Answers_Count++;
                        }
                    });
                    $('input').parent().removeClass('bd');
                    // start
                    var percentage = (Correct_Answers_Count * 100) / 10;
                    var ImgURL = '';
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
                    //$('.correct_answer').css('display','inline-block');
                    $('input,.Option').css('pointer-events', 'none');
                }
                else {
                    setTimeout(function () {
                        $('.result').css('display', 'flex');
                        $('.result .TextBox h1').text('Please solve at least 5 boxes before submitting');
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
