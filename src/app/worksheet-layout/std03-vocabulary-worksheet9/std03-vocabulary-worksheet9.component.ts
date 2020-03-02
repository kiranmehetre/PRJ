import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-vocabulary-worksheet9',
  templateUrl: './std03-vocabulary-worksheet9.component.html',
  styleUrls: ['./std03-vocabulary-worksheet9.component.scss']
})
export class Std03VocabularyWorksheet9Component implements OnInit {

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
    
    // window.onload = function () { $('.loadingDiv').hide();}
    var inputField;
    var clickAnswer = [];
    var inputValue;
    var inputs = $('input');
    $(inputs).on('click', function () {
        inputField = $(this);
        inputValue = $(this).val();
        $('input').parent().parent().removeClass('bd');
        $(this).parent().parent().addClass('bd');
        clickAnswer = $.grep(clickAnswer, function (value) {
            return value != inputValue;
        });
        $(".answer-container").filter(function () {
            return $(this).find('.alphabet span').text().replace(')', '') === inputValue;
        }).removeClass('click');
        $(this).val("");
    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];
    $('.answer-container').click(function () {
        if (inputField !== undefined) {
            inputValue = $(inputField).val().toString().trim();
            Text = $(this).find('.alphabet span').text().replace(')', '');
            HelpBox.push(Text);
            if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
                $(".answer-container").filter(function () {
                    return $(this).find('.alphabet span').text().replace(')', '') === inputValue;
                }).removeClass('click');
            }
            $(this).addClass('click');
    
    
            if (clickAnswer.indexOf($(this).find('.alphabet span').text().replace(')', '')) > -1) {
    
            }
            else {
    
                clickAnswer = $.grep(clickAnswer, function (value) {
                    return value != inputValue;
                });
                $(inputField).val($(this).find('.alphabet span').text().replace(')', ''));
                clickAnswer.push($(this).find('.alphabet span').text().replace(')', ''));
            }
        }
    });
    //END
    $('.button').click(function () {
    
        if ($('.button').hasClass('playAgain')) {
            window.location.href = window.location.href;
        }
        else {
            var inputCount=$('input[type="text"]').filter(function () {
                                return !!$(this).val();
                            }).length;
    
            if (inputCount >= 5) {
                var i = 0;
                var Correct_Answers_Count = 0;
                var Correct_Answers = ["H", "E", "A", "J", "C", "G", "D", "I", "B", "F"];
                $('input').each(function () {
    
                    var checkText = $(this).val().toString().trim()
                    if ($(this).val().toString().trim() !== Correct_Answers[i]) {
                        $(this).css({ 'color': '#ed1a1a' });
                        $(this).parent().siblings('.answer').css({ 'display': 'block' });
                        //Correct_Answers_Count--;
                        //$('.answer').css({'display':'block'})
                    }
                    else {
                        Correct_Answers_Count++;
                    }
                    i++;
                });
    
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
                // $('.answer').show();
                $('input,.answer-container').css('pointer-events', 'none');
                $('.input-container').removeClass('bd');
            }
            else {
                setTimeout(function () {
                    $('.result').css('display', 'flex');
                    $('.result .TextBox h1').text('Please solve at least 5 hexagons before submitting');
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
