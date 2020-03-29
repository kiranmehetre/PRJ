import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-comprehensions-worksheet9',
  templateUrl: './std01-comprehensions-worksheet9.component.html',
  styleUrls: ['./std01-comprehensions-worksheet9.component.scss']
})
export class Std01ComprehensionsWorksheet9Component implements OnInit {

  loadAPI: Promise<any>;
  constructor(private commonWorksheet: CommonWorksheetService){

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });

  }
  public loadScript() {   
        var dynamicScripts = ["https://code.jquery.com/jquery-3.3.1.min.js","https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
  } 

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


    $(document).ready(function () {
      var BackgroundImagesLandscapeArr = ["url(assets/std01-comprehensions-worksheet9/img/slide1_bg.jpg)", "url(assets/std01-comprehensions-worksheet9/img/slide2_bg.jpg)", "url(assets/std01-comprehensions-worksheet9/img/slide3_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std01-comprehensions-worksheet9/img/slide1_bg_portrait.jpg)", "url(assets/std01-comprehensions-worksheet9/img/slide2_bg_portrait.jpg)", "url(assets/std01-comprehensions-worksheet9/img/slide3_bg_portrait.jpg)"];
      var BackgroundImagesArr = [];
      var orientation = window.screen.orientation;
      var ActiveList;
      var ActiveSlideNumber;
      if (orientation.type == "landscape-primary") {
        BackgroundImagesArr = BackgroundImagesLandscapeArr;
      }
      else {
        BackgroundImagesArr = BackgroundImagesPortraitArr;
      }
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
        ActiveList = $(this).text().trim();
        ActiveSlideNumber = parseInt(ActiveList) - 1;
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
      });



      $('.question').each(function () {
        var options = $(this).find('.option');
        $(options).each(function () {
          $(this).click(function () {
            if ($(this).hasClass('click')) {
              $(this).removeClass('click');
            }
            else {
              $(options).removeClass('click');
              $(this).addClass('click');
            }

          })
        });
      });

      var inputField;
      var inputValue;
      var dataText = "";
      var inputdataText = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var single_answer_inputs = $('.Question_Block_Four input,.Question_Block_Seven input')
      var InputNo;
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        inputdataText = $(inputField).attr("data-text");
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputdataText;
        });
        $(".helpbox").filter(function () {
          return $(this).attr("data-text").trim() === inputdataText;
        }).removeClass('click');
        $(this).val("");
        $(this).attr("data-text", "");
        InputNo = $(this).closest('.question').find('.number').text();
      });
      $('.helpbox').click(function () {
        var HelpBoxQuestionNumber = $(this).closest('.question').find('.number').text();
        if (inputField !== undefined && HelpBoxQuestionNumber == InputNo) {
          inputValue = $(inputField).val();
          inputdataText = $(inputField).attr("data-text");
          dataText = $(this).attr("data-text");
          Text = $(this).find('span').text().trim();
          dataText = $(this).attr("data-text");
          HelpBox.push(dataText);
          if (HelpBox.indexOf(inputdataText) > -1 && ClickAnswer.indexOf(dataText) < 0) {
            $(".helpbox").filter(function () {
              return $(this).attr("data-text").trim() === inputdataText;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(dataText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputdataText;
            });
            $(inputField).val(Text);
            $(inputField).attr("data-text", dataText);
            ClickAnswer.push(dataText);
          }
        }
      });


      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var inputCount = 0;
          $('.question').each(function (i) {
            if (i > 2) {
              if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
                inputCount++;
              }
            }
            else {
              if ($(this).find('.click').length > 0) {
                inputCount++;
              }
            }
          });
          //console.log(inputCount)
          if (inputCount >= 4) {

            var Single_Correct_Answers = ["ninety - four", "night", "town"];
            $(single_answer_inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== Single_Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct-answer').css('display', 'inline-block');
              }

            });

            var Correct_Answers = [["little", "careful"]];

            $('.Question_Block_Six').each(function (i) {
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
              for (var i = 0; i < Wrong_Answers.length; i++) {
                $(inputField_Array[i]).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(inputField_Array[i]).siblings(".correct-answer").find('span').text(Wrong_Answers[i]);
                $(inputField_Array[i]).siblings(".correct-answer").css('display', 'inline-block');
              }
            });

            $(inputs).parent().removeClass('bd');
            // $('.circle').not('right').addClass('wrong');
            $('.option.click').find('.circle').not('right').addClass('wrong');
            $('.circle.right').addClass('correct');
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
            $('input,.option,.helpbox,.option-question,.third .helpbox-q4 .col-4 div,.question.three .helpbox-container .col-sm-6 div').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 questions before submitting');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
