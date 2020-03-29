import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-synonyms-worksheet5',
  templateUrl: './std03-synonyms-worksheet5.component.html',
  styleUrls: ['./std03-synonyms-worksheet5.component.scss']
})
export class Std03SynonymsWorksheet5Component implements OnInit {

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
    
    
    
    var clickAnswer = [];
    var inputValue;
    var inputField;
    var HelpBox = [];
    $('input').click(function () {
        inputField = $(this);
        inputValue = $(this).val();
        $('input').parent().removeClass('bd');
        $(this).parent().addClass('bd');
        clickAnswer = $.grep(clickAnswer, function (value) {
            return value != inputValue;
        });
        $(".helpbox div").filter(function () {
            var this_text = $(this).text().trim();
            var input_Text = inputValue;
            return $(this).find('span').text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
    
    });
    
    $('.helpbox div').click(function () {
        if (inputField !== undefined) {
            inputValue = $(inputField).val();
            var Text = $(this).text().trim();
    
            HelpBox.push(Text);
            if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
                // $(".helpbox div").filter(function() {
                // 	return $(this).text() === inputValue;
                // }).removeClass('click');
                $(".helpbox div").filter(function () {
                    return $(this).find('span').text().trim() === inputValue;
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
    $('.myButton').click(function () {
    
    
        if ($('.myButton').hasClass('playAgain')) {
            globalThis.commonWorksheet.reloadComponent();
        }
        else {
            var Correct_answers_count = 0;
            var inputCount = $('input[type="text"]').filter(function () {
                return !!$(this).val();
            }).length;
            if (inputCount >= 8) {
                $('input').parent().removeClass('bd');
                var Correct_answers = ["tired", "sunrise", "pleasant", "expand", "untrue", "melodious", "uncommon", "instruct", "delicious", "powerful", "chuckle", "bunny", "pal", "marvelous", "chubby", "happy"];
    
                $('.input-span input').each(function (i) {
                    if ($(this).val().toString() !== Correct_answers[i]) {
                        $(this).css({ 'color': '#ed1a1a', 'border-color': '#fff' });
                        $(this).parent().next().css('display', 'inline-block');
                    }
                    else {
                        Correct_answers_count++;
                    }
                });
                // $('.answer').css('display','unset');
                $('input,.help-box,.helpbox div,.helpbox-container').css('pointer-events', 'none');
                var percentage = (Correct_answers_count * 100) / 16;
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
                    $('.myButton').addClass('playAgain');
                    $('.myButton.playAgain').text('solve again');
                }, 500);
                // $('.answer-div').css('display','inline-block');
    
            }
            else {
                setTimeout(function () {
                    $('.result').css('display', 'flex');
                    $('.result .TextBox h1').text('Please solve at least 8 blanks before submitting');
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
