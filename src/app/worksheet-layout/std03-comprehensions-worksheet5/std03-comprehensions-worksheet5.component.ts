import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-comprehensions-worksheet5',
  templateUrl: './std03-comprehensions-worksheet5.component.html',
  styleUrls: ['./std03-comprehensions-worksheet5.component.scss']
})
export class Std03ComprehensionsWorksheet5Component implements OnInit {

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
      var BackgroundImagesLandscapeArr = ["url(assets/std03-comprehensions-worksheet5/img/slide1_bg.jpg)", "url(assets/std03-comprehensions-worksheet5/img/slide2_bg.jpg)", "url(assets/std03-comprehensions-worksheet5/img/slide3_bg.jpg)", "url(assets/std03-comprehensions-worksheet5/img/slide4_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std03-comprehensions-worksheet5/img/slide1_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet5/img/slide2_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet5/img/slide3_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet5/img/slide4_bg_portrait.jpg)"];
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
        if (ActiveSlideNumber > 3) {
          ActiveSlideNumber = 0;
        }
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
        if (ActiveSlideNumber == 0 || ActiveSlideNumber == 1) {
          $('.bg').addClass('addPadding');
        }
        else {
          $('.bg').removeClass('addPadding');
        }
      });
      $('.carousel-control-prev-icon').click(function () {
        ActiveSlideNumber--;
        if (ActiveSlideNumber < 0) {
          ActiveSlideNumber = 3;
        }
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
        if (ActiveSlideNumber == 0 || ActiveSlideNumber == 1) {
          $('.bg').addClass('addPadding');
        }
        else {
          $('.bg').removeClass('addPadding');
        }
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
        if (ActiveSlideNumber == 0 || ActiveSlideNumber == 1) {
          $('.bg').addClass('addPadding');
        }
        else {
          $('.bg').removeClass('addPadding');
        }
      });
      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var inputNumber = "";
      var optionNumber = "";
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $('.Question_Block.one input').click(function () {
        inputField = $(this);
        $('*').removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".Option_Row").filter(function () {
          return $(this).find('.number').text().trim().replace(")", "") === inputValue;
        }).removeClass('blue');
        $(this).val("");
        inputNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
      });
      $('.Option_Row').click(function () {
        optionNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).find('.number').text().trim().replace(")", "");
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".Option_Row").filter(function () {
              return $(this).find('.number').text().trim().replace(")", "") === inputValue;
            }).removeClass('blue');
          }
          $(this).addClass('blue');
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
      $('.Question_Block.four input').click(function () {
        inputField = $(this);
        $('*').removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".Question_Block.four .option").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
        inputNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
      });
      $('.Question_Block.four .option').click(function () {
        optionNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".Question_Block.four .option").filter(function () {
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
      $('.Question_Block.two .option').click(function () {
        if ($(this).hasClass('green')) {
          $(this).removeClass('green');
        }
        else {
          $(this).closest('.options').find('.option').removeClass('green');
          $(this).addClass('green');
        }
      });
      $('.Question_Block.three .Question .content span').click(function () {
        $(this).toggleClass("underlined");
        var numItems = $(this).parent().find('.underlined').length;
        if (numItems > 3) {
          alert('please deselect any one');
          $(this).removeClass('underlined');
        }
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var inputCount = 0;
          $('.Question_Block').each(function (i) {
            if (i == 0 || i == 3) {
              if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
                inputCount++;
              }
            }
            else if (i == 1) {
              if ($(this).find('.green').length > 0) {
                inputCount++;
              }
            }
            else if (i == 2) {
              if ($(this).find('.underlined').length > 0) {
                inputCount++;
              }
            }
          });
          if (inputCount >= 2) {
            var Correct_Answers_Count = 0;
            $('*').removeClass('bd');
            var Correct_Answers = ["C", "A", "E", "B", "D", "slowly", "cautiously", "towards", "loudly", "away"];
            var Wrong_Answers = [];
            var inputField_Array = [];
            var inputValues = [];
            $(inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'inline-block');
              }
              else {

              }
            });

            var Underline_Correct_Answers = [["good", "quiet"], ["hungry", "dear", "fast"]];
            var Correct_Answers_Count = 0;
            var limit = 0;
            $('.Question_Block.three .Question .content').each(function (i) {
              var isTrue = false;
              var underlined = $(this).find('.underlined');
              if (i == 0) {
                limit = 2;
              }
              else {
                limit = 3;
              }
              $(underlined).each(function (j) {
                if (Underline_Correct_Answers[i].indexOf($(this).text()) < 0) {
                  $(underlined[j]).css('color', 'red');
                }
              });
              //console.log(limit);
              for (var x = 0; x < limit; x++) {
                var Answer = $(this).find("span:contains(" + Underline_Correct_Answers[i][x] + ")");
                if ($(Answer).hasClass('underlined')) {
                  $(Answer).addClass('colorgreen_bordered');
                }
                else {
                  $(Answer).addClass('colorgreen');
                }
              }
            });
            $('.option.green').not('.right').css('background-color', '#ab2323');
            $('.option.right').css('background-color', '#20bb15');
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
            $('input,.option,.option-question,.option_div,.Option_Row,.Question_Block.three .Question .content span').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 2 questions before submitting');
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
