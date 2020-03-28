import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-quotation-marks-worksheet1',
  templateUrl: './std03-quotation-marks-worksheet1.component.html',
  styleUrls: ['./std03-quotation-marks-worksheet1.component.scss']
})
export class Std03QuotationMarksWorksheet1Component implements OnInit {

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
    $(".input-span").each(function (i) {
    
        $(this).attr('id', 'question' + i);
    
        var id = $(this).attr('id', 'question' + i);
    });
    var inputField;
    $('input').attr('readonly', 'readonly');
    $('input').on('click', function () {
        inputField = $(this);
        $('input').parent().removeClass('bd');
        $(this).parent().addClass('bd');
        $(this).val("");
    });
    var Text = '';
    
    $('.helpbox-container .col-6 div div').on('click', function (event) {
        var Text = $(this).text();
        if (inputField !== undefined) {
            var Text = $(this).text();
            $(inputField).val(Text.trim());
        }
    });
    
    
    $('.button').click(function () {
    
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
            var i = 0;
            var Correct_Answers_Count = 0;
    
    
            var inputCount = 0;
            var input;
            var isCorrectAnswer = true;
            var isFill = true;
    
            var inputCount = $('input[type="text"]').filter(function () {
                return !!$(this).val();
            }).length;
    
            if (inputCount >= 11) {
    
                var FirstInputs;
                var SecondInputs;
                $('.question').each(function () {
                    FirstInputs = $(this).find('input.first');
                    SecondInputs = $(this).find('input.second');
                    isFill = true;
                    $(FirstInputs).each(function () {
                        if (isFill === true) {
                            if (($(this).val().toString() === '“')) {
                            }
                            else {
                                isFill = false;
                                $(this).css({ 'color': 'red', 'border-color': '#000' });
                                $(this).parent().next().css('display', 'initial');
                            }
                        }
                        else {
                            if (($(this).val().toString() !== '“')) {
                                $(this).css({ 'color': 'red', 'border-color': '#000' });
                                $(this).parent().next().css('display', 'initial');
                            }
                        }
                    });
                    $(SecondInputs).each(function () {
                        if (isFill === true) {
                            if (($(this).val().toString() === '”')) {
                            }
                            else {
                                isFill = false;
                                $(this).css({ 'color': 'red', 'border-color': '#000' });
                                $(this).parent().next().css('display', 'initial');
                            }
                        }
                        else {
                            if (($(this).val().toString() !== '”')) {
                                $(this).css({ 'color': 'red', 'border-color': '#000' });
                                $(this).parent().next().css('display', 'initial');
                            }
                        }
                    });
                    if (isFill === true) {
                        Correct_Answers_Count++;
                    }
                });
                var percentage = (Correct_Answers_Count * 100) / 10;
                $('input').parent().removeClass('bd');
                var DisplayResult = "";
    
                DisplayResult = '.fabulous';
    
    
    
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
    
                $('input,.helpbox-container').css('pointer-events', 'none');
    
            }
            else {
                setTimeout(function () {
                    $('.result').css('display', 'flex');
                    $('.result .TextBox h1').text('Please solve at least 11 boxes before submitting');
                }, 500);
            }
        }
    
    });
    
    $('.result,.close').click(function () {
        $('.result').fadeOut();
        $('.close').show();
    });
    
    function setImages() {
        var t = new Date().getTime();
        $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
