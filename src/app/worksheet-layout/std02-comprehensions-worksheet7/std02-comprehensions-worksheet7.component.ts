import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-comprehensions-worksheet7',
  templateUrl: './std02-comprehensions-worksheet7.component.html',
  styleUrls: ['./std02-comprehensions-worksheet7.component.scss']
})
export class Std02ComprehensionsWorksheet7Component implements OnInit {

  loadAPI: Promise<any>;constructor(private commonWorksheet: CommonWorksheetService){

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });}
  public loadScript() {
    var dynamicScripts = ["https://code.jquery.com/jquery-3.3.1.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
    for (var i = 0; i < dynamicScripts.length; i++) {
      let node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

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
    $(document).ready(function () {
      var BackgroundImagesLandscapeArr = ["url(assets/std02-comprehensions-worksheet7/img/slide1_bg.jpg)", "url(assets/std02-comprehensions-worksheet7/img/slide2_bg.jpg)", "url(assets/std02-comprehensions-worksheet7/img/slide3_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std02-comprehensions-worksheet7/img/slide1_bg_portrait.jpg)", "url(assets/std02-comprehensions-worksheet7/img/slide2_bg_portrait.jpg)", "url(assets/std02-comprehensions-worksheet7/img/slide3_bg_portrait.jpg)"];
      var BackgroundImagesArr = [];
      var orientation = window.screen.orientation;
      if (orientation.type == "landscape-primary") {
        BackgroundImagesArr = BackgroundImagesLandscapeArr;
      }
      else {
        BackgroundImagesArr = BackgroundImagesPortraitArr;
      }
      var ActiveSlideNumber;
      ActiveSlideNumber = $('li.active').attr('data-slide-to');
      ActiveSlideNumber = parseInt(ActiveSlideNumber);
      $('.carousel-control-next-icon').click(function () {
        ActiveSlideNumber++;
        if (ActiveSlideNumber > 2) {
          ActiveSlideNumber = 0;
        }
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
      });
      $('.carousel-control-prev-icon').click(function () {
        ActiveSlideNumber--;
        if (ActiveSlideNumber < 0) {
          ActiveSlideNumber = 2;
        }
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
      });
      $('.carousel-indicators li').click(function () {
        var ActiveList = $(this).text().trim();
        ActiveSlideNumber = parseInt(ActiveList) - 1;
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
      });

      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var FirstBlockClickAnswer = [];
      var FirstBlockHelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var FirstBlockInputs = $('.Question_Block.one input');
      var RemainingInputs = $('.Question_Block').not('.one').find('input');
      var inputNumber = "";
      var optionNumber = "";
      var FirstBlockOptions = $('.Question_Block.one .option');
      var RemainingOptions = $('.Question_Block').not('.one').find('.option');;
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(RemainingInputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(RemainingOptions).filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
        inputNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
      });
      $(RemainingOptions).click(function () {
        optionNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
        if (inputField !== undefined && inputNumber === optionNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".option").filter(function () {
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
      $(FirstBlockInputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        FirstBlockClickAnswer = $.grep(FirstBlockClickAnswer, function (value) {
          return value != inputValue;
        });
        $(FirstBlockOptions).filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
        inputNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
      });
      $(FirstBlockOptions).click(function () {
        optionNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
        if (inputField !== undefined && inputNumber === optionNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          FirstBlockHelpBox.push(Text);
          if (FirstBlockHelpBox.indexOf(inputValue) > -1 && FirstBlockClickAnswer.indexOf(Text) < 0) {
            $(".option").filter(function () {
              return $(this).text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (FirstBlockClickAnswer.indexOf(Text) > -1) {
          }
          else {
            FirstBlockClickAnswer = $.grep(FirstBlockClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
            FirstBlockClickAnswer.push(Text);
          }
        }
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var inputCount = 0;
          $('.Question_Block').each(function (i) {
            if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
              inputCount++;
            }
          });
          if (inputCount >= 3) {
            var Correct_Answers_Count = 0;
            $(inputs).removeClass('bd');
            var Correct_Answers = ["Ottawa", "Great Bear Lake", "Mackenzie River", "Mount Slogan", "Canadian dollar", "English and French", "stunning", "wonderful", "exotic"];
            var Wrong_Answers = [];
            var inputField_Array = [];
            var inputValues = [];
            var SingleInputs = $('.Question_Block').not('.one,.four,.five').find('input');
            $(SingleInputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'block');
              }
            });
            var Correct_Answers_Array = [];
            Correct_Answers_Array[0] = ["Toronto", "Quebec", "Vancouver", "Ottawa"];
            Correct_Answers_Array[1] = ["cycling", "climbing", "sledging", "ice-skating"];
            Correct_Answers_Array[2] = ["grizzly bear", "bison", "bobcat", "polar bear", "gray wolf", "moose"];
            $('.Question_Block').not('.two,.three').each(function (i) {
              var inputRowValues = [];
              var Wrong_Answers = [];
              var inputField_Array = [];
              var inputRow = $(this).find('input');
              $(inputRow).each(function (j) {
                if (Correct_Answers_Array[i].indexOf($(this).val()) < 0) {
                  inputField_Array.push($(this));
                }
                else {
                  inputRowValues.push($(this).val());
                }
              });
              Correct_Answers_Array[i].filter(function (el) {
                if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
              });
              for (var i = 0; i < Wrong_Answers.length; i++) {
                $(inputField_Array[i]).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(inputField_Array[i]).siblings('.correct_answer').find('span').text(Wrong_Answers[i]);
                $(inputField_Array[i]).siblings('.correct_answer').css('display', 'block');
              }
            });
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
            $('input,.option').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 3 questions before submitting');
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
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
