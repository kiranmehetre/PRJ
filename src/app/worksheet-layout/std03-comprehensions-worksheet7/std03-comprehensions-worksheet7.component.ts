import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-comprehensions-worksheet7',
  templateUrl: './std03-comprehensions-worksheet7.component.html',
  styleUrls: ['./std03-comprehensions-worksheet7.component.scss']
})
export class Std03ComprehensionsWorksheet7Component implements OnInit {

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
      var BackgroundImagesLandscapeArr = ["url(assets/std03-comprehensions-worksheet7/img/slide1_bg.jpg) no-repeat right bottom fixed", "url(assets/std03-comprehensions-worksheet7/img/slide2_bg.jpg) no-repeat right bottom fixed", "url(assets/std03-comprehensions-worksheet7/img/slide3_bg.jpg) no-repeat right bottom fixed", "url(assets/std03-comprehensions-worksheet7/img/slide4_bg.jpg) no-repeat right bottom fixed"];
      var BackgroundImagesPortraitArr = ["url(assets/std03-comprehensions-worksheet7/img/slide1_bg_portrait.jpg) no-repeat right bottom fixed", "url(assets/std03-comprehensions-worksheet7/img/slide2_bg_portrait.jpg) no-repeat right bottom fixed", "url(assets/std03-comprehensions-worksheet7/img/slide3_bg_portrait.jpg) no-repeat right bottom fixed", "url(assets/std03-comprehensions-worksheet7/img/slide4_bg_portrait.jpg) no-repeat right bottom fixed"];
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
          'background': BackgroundImagesArr[ActiveSlideNumber],
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
        if (ActiveSlideNumber > 0) {
          $('.bg').removeClass('addPadding');
        }
        else {
          $('.bg').addClass('addPadding');
        }
      });
      $('.carousel-control-prev-icon').click(function () {
        ActiveSlideNumber--;
        if (ActiveSlideNumber < 0) {
          ActiveSlideNumber = 3;
        }
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber],
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
        if (ActiveSlideNumber > 0) {
          $('.bg').removeClass('addPadding');
        }
        else {
          $('.bg').addClass('addPadding');
        }
      });
      $('.carousel-indicators li').click(function () {
        var ActiveList = $(this).text().trim();
        ActiveSlideNumber = parseInt(ActiveList) - 1;
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber],
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
        if (ActiveSlideNumber > 0) {
          $('.bg').removeClass('addPadding');
        }
        else {
          $('.bg').addClass('addPadding');
        }
      });


      var inputField;
      var inputValue;
      var inputDataText = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var dataText = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var columns_inputs = $('.Question_Block_Three input,.Question_Block_Four input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');
      var inputNumber = "";
      var optionNumber = "";

      $('.Question_Block_One input').click(function () {
        inputField = $(this);
        $("*").removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        inputDataText = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputDataText;
        });
        $(".helpbox").filter(function () {
          return $(this).attr('data-text').trim() === inputDataText;
        }).removeClass('click');
        $(this).val("");
        $(inputField).attr("data-text", "");
        inputNumber = $(this).closest('.question').find('.number').text();
      });
      $('.helpbox').click(function () {
        optionNumber = $(this).closest('.question').find('.number').text();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          inputDataText = $(inputField).attr('data-text');
          Text = $(this).text().trim();
          dataText = $(this).attr('data-text').trim();
          HelpBox.push(dataText);
          if (HelpBox.indexOf(inputDataText) > -1 && ClickAnswer.indexOf(dataText) < 0) {
            $(".helpbox").filter(function () {
              return $(this).attr('data-text').trim() === inputDataText;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(dataText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputDataText;
            });
            $(inputField).val(Text);
            $(inputField).attr("data-text", dataText);
            ClickAnswer.push(dataText);
          }
        }
      });
      $('.Question_Block_Three input').click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        inputDataText = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputDataText;
        });
        $(".column_B_Click").filter(function () {
          return $(this).attr('data-text').trim() === inputDataText;
        }).removeClass('click');
        $(this).val("");
        $(inputField).attr("data-text", "");
        inputNumber = $(this).closest('.question').find('.number').text();
      });
      $('.Question_Block_Three .column_B_Click').click(function () {
        optionNumber = $(this).closest('.question').find('.number').text();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          inputDataText = $(inputField).attr('data-text');
          Text = $(this).closest('.input-answer-container').find('.alphabet.column_B_Click').text().trim().replace(")", "");
          dataText = $(this).attr('data-text').trim();
          HelpBox.push(dataText);
          if (HelpBox.indexOf(inputDataText) > -1 && ClickAnswer.indexOf(dataText) < 0) {
            $(".column_B_Click").filter(function () {
              return $(this).attr('data-text').trim() === inputDataText;
            }).removeClass('click');
          }
          $(this).closest('.input-answer-container').find('.column_B_Click').addClass('click');
          if (ClickAnswer.indexOf(dataText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputDataText;
            });
            $(inputField).val(Text);
            $(inputField).attr("data-text", dataText);
            ClickAnswer.push(dataText);
          }
        }
      });
      $('.Question_Block_Four input').click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        inputDataText = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputDataText;
        });
        $(".column-B-container").filter(function () {
          return $(this).attr('data-text') === inputDataText;
        }).removeClass('click');
        $(this).val("");
        $(inputField).attr("data-text", "");
        inputNumber = $(this).closest('.question').find('.number').text();
      });
      $('.Question_Block_Four .column-B-container').click(function () {
        optionNumber = $(this).closest('.question').find('.number').text();
        if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          inputDataText = $(inputField).attr('data-text');
          Text = $(this).find('.number').text().replace(")", "").trim();
          dataText = $(this).attr('data-text');
          HelpBox.push(dataText);
          if (HelpBox.indexOf(inputDataText) > -1 && ClickAnswer.indexOf(dataText) < 0) {
            $(".column-B-container").filter(function () {
              return $(this).attr('data-text') === inputDataText;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(dataText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputDataText;
            });
            $(inputField).val(Text);
            $(inputField).attr("data-text", dataText);
            ClickAnswer.push(dataText);
          }
        }
      });
      $('.true-false-option > div').click(function () {
        if ($(this).hasClass('green')) {
          $(this).removeClass('green');
        }
        else {
          $(this).closest('.true-false-option').find('.option').removeClass('green');
          $(this).addClass('green');
        }
      });


      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var inputCount = 0;
          $('.question').each(function (i) {
            if (i != 1) {
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
          if (inputCount >= 2) {

            var Single_Correct_Answers = ["poor", "cheap", "sad", "big", "loud", "sell", "E", "H", "B", "F", "A", "D", "C", "G", "C", "D", "A", "B", "F", "E"];
            $('input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Single_Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct-answer').addClass('showAnswer');
              }

            });
            $(inputs).parent().removeClass('bd');
            // $('.circle').not('right').addClass('wrong');
            $('.option.green').not('right').addClass('wrong');
            $('.option.right').addClass('correct');
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
            $('input,.option,.helpbox,.option-question,.third .helpbox-q4 .col-4 div,.question.three .helpbox-container .col-sm-6 div,.column_B_Click,.column-B-container').css('pointer-events', 'none');
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
