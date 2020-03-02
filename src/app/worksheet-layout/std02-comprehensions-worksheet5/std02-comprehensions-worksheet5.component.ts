import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-comprehensions-worksheet5',
  templateUrl: './std02-comprehensions-worksheet5.component.html',
  styleUrls: ['./std02-comprehensions-worksheet5.component.scss']
})
export class Std02ComprehensionsWorksheet5Component implements OnInit {

  loadAPI: Promise<any>;
  constructor() {

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });

  }
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
    $(document).ready(function () {
      var BackgroundImagesLandscapeArr = ["url(assets/std02-comprehensions-worksheet5/img/slide1_bg.jpg)", "url(assets/std02-comprehensions-worksheet5/img/slide2_bg.jpg)", "url(assets/std02-comprehensions-worksheet5/img/slide3_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std02-comprehensions-worksheet5/img/slide1_bg_portrait.jpg)", "url(assets/std02-comprehensions-worksheet5/img/slide2_bg_portrait.jpg)", "url(assets/std02-comprehensions-worksheet5/img/slide3_bg_portrait.jpg)"];
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
      var FourthBlockClickAnswer = [];
      var FourthBlockHelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var inputNumber = "";
      var optionNumber = "";
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');
      var optionDataText = "";
      var inputDataText = "";

      $('.question.three input').click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        inputDataText = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputDataText;
        });
        $(".question.three .helpbox-container .col-sm-6 div").filter(function () {
          return $(this).attr('data-text') === inputDataText;
        }).removeClass('click');
        $(inputField).attr('data-text', "");
        $(this).val("");
        inputNumber = $(this).closest('.Question_Row').find('.number').text().trim();
      });
      $('.question.three .helpbox-container .col-sm-6 div').click(function () {
        optionNumber = $(this).closest('.Question_Row').find('.number').text().trim();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          inputDataText = $(inputField).attr('data-text');
          Text = $(this).text().trim();
          optionDataText = $(this).attr('data-text');
          HelpBox.push(optionDataText);
          if (HelpBox.indexOf(inputDataText) > -1 && ClickAnswer.indexOf(optionDataText) < 0) {
            $(".question.three .helpbox-container .col-sm-6 div").filter(function () {
              return $(this).attr('data-text') === inputDataText;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(optionDataText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputDataText;
            });
            $(inputField).val(Text);
            $(inputField).attr('data-text', optionDataText);
            ClickAnswer.push(optionDataText);
          }
        }
      });
      $('.question.four input').click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        FourthBlockClickAnswer = $.grep(FourthBlockClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".third .helpbox-q4 .col-4 div").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
        inputNumber = $(this).closest('.Question_Row').find('.number').text().trim();
      });
      $('.third .helpbox-q4 .col-4 div').click(function () {
        optionNumber = $(this).closest('.Question_Row').find('.number').text().trim();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          FourthBlockHelpBox.push(Text);
          if (FourthBlockHelpBox.indexOf(inputValue) > -1 && FourthBlockClickAnswer.indexOf(Text) < 0) {
            $(".third .helpbox-q4 .col-4 div").filter(function () {
              return $(this).text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (FourthBlockClickAnswer.indexOf(Text) > -1) {

          }
          else {
            FourthBlockClickAnswer = $.grep(FourthBlockClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
            FourthBlockClickAnswer.push(Text);
          }
        }
      });
      $('.question.six input').click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".question.six .option").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
        inputNumber = $(this).closest('.Question_Row').find('.number').text().trim();
      });
      $('.question.six .option').click(function () {
        optionNumber = $(this).closest('.Question_Row').find('.number').text().trim();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".question.six .option").filter(function () {
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

      $('.question.two .option-question,.question.five .option-question').click(function () {
        
          if($(this).hasClass('green')){
            $(this).removeClass('green');
          }
          else{
            $(this).parents().eq(1).find('.option-question').removeClass('green');
            $(this).addClass('green');
          }
      });
      $('.question.one .help').click(function () {
        if($(this).hasClass('green')){
          $(this).removeClass('green');
        }
        else{
          $(this).closest('.helpbox-container-1').find('.help').removeClass('green');
          $(this).addClass('green');
        }
      });
      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var inputCount = 0;
          $('.Question_Row').each(function (i) {
            if (i == 2 || i == 3 || i == 5) {
              if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
                inputCount++;
              }
            }
            else {
              if ($(this).find('.green').length > 0) {
                inputCount++;
              }
            }
          });
          if (inputCount >= 3) {
            var Correct_Answers_Count = 0;
            $(inputs).parent().removeClass('bd');
            var FourthBlockCorrect_Answers = ["corn", "bog", "luck", "nice", "take", "grow"];
            var SixthBlockCorrect_Answers = ["caw", "quack", "croak"];
            $('.question.four input').each(function (i) {
              if ($.trim($(this).val().toString()) !== FourthBlockCorrect_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.col-6').find('.answer').css('display', 'inline-block');
              }
            });
            $('.question.six input').each(function (i) {
              if ($.trim($(this).val().toString()) !== SixthBlockCorrect_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.answer').css('display', 'inline-block');
              }
            });
            var Correct_Answers = [["warm", "nice"], ["warm", "fair"]];
            $('.question.three .shift-bottom').each(function (i) {
              var inputRowValues = [];
              var Wrong_Answers = [];
              var inputField_Array = [];
              var inputRow = $(this).find('input');
              $(inputRow).each(function (j) {
                if (Correct_Answers[i].indexOf($(this).val().toString()) < 0) {
                  inputField_Array.push($(this));
                }
                else {
                  inputRowValues.push($(this).val());
                }
              });
              Correct_Answers[i].filter(function (el) {
                if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
              });
              console.log(Wrong_Answers);
              for (var x = 0; x < Wrong_Answers.length; x++) {
                $(inputField_Array[x]).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(inputField_Array[x]).parent().siblings('.answer').text(Wrong_Answers[x]);
                $(inputField_Array[x]).parent().siblings('.answer').css('display', 'inline-block');
              }
            });
            $('.option-question.green .circle').not('.correct').css('background-color', '#ab2323');
            $('.help.green').not('.correct').css('background-color', '#ab2323');
            $('.circle.correct').addClass('right');
            $('.help.correct').addClass('right');
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
            $('input,.option,.option-question,.third .helpbox-q4 .col-4 div,.question.three .helpbox-container .col-sm-6 div').css('pointer-events', 'none');
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
