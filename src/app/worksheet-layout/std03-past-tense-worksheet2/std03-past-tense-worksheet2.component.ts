import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-past-tense-worksheet2',
  templateUrl: './std03-past-tense-worksheet2.component.html',
  styleUrls: ['./std03-past-tense-worksheet2.component.scss']
})
export class Std03PastTenseWorksheet2Component implements OnInit {

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
    
    
    var inputField;
    var OptionList = "";
    var QuestionNumber = "";
    var inputValue;
    var question_number_check;
    var click_question_number;
    var HelpBox = [];
    $(".question").each(function (i) {
        $(this).attr('id', 'question' + i);
        var id = $(this).attr('id', 'question' + i);
    
    });
    $(".helbox-container").each(function (i) {
        $(this).attr('id', 'helpbox-container' + i);
    });
    $('input').attr('readonly', 'readonly');
    
    $('input').click(function () {
    
        $('input').parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputField = $(this);
        QuestionNumber = $(this).parent().parent().parent().attr('id');
        var OptionNumber = QuestionNumber[QuestionNumber.length - 1];
        question_number_check = QuestionNumber;
        OptionList = $('#helpbox-container' + OptionNumber).text();
        $(this).val('');
        $(this).closest('.question').find('.click').removeClass('click');
    });
    
    $('.option').click(function () {
        if (inputField !== undefined) {
    
            click_question_number = $(this).parent().parent().parent().attr('id');
            if (OptionList.indexOf($(this).text()) > -1 && click_question_number === question_number_check) {
                $(inputField).val($(this).text().replace(",", ""));
                HelpBox.push($(this).text().trim());
                var Optionclass = $(this).parent().parent().attr('class');
                var Option = $(this).parent().parent();
                $(Option).find('.option').removeClass('click');
                $(this).addClass('click');
            }
        }
    });
    
    $('.button').click(function () {
    
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
            var i = 0;
            var Correct_answers_count = 0;
            var inputCount=$('input[type="text"]').filter(function () {
                                return !!$(this).val();
                            }).length;
            var Correct_answers = ["flew", "drank", "cut", "caught", "wrote", "drove", "hurt", "spoke", "burst", "bit"]
            if (inputCount >= 5) {
                $('input').each(function () {
                    if ($(this).val().toString().trim() !== Correct_answers[i]) {
                        $(this).css({ 'color': '#ed1a1a' });
                        $(this).parent().siblings('.answer-div').find('span').css('visibility', 'visible');
                    }
                    else {
                        Correct_answers_count++;
                    }
                    i++;
                });
                $('input,.option').css('pointer-events', 'none');
                $('input').parent().removeClass('bd');
                var percentage = (Correct_answers_count * 100) / 10;
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
                    $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
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
