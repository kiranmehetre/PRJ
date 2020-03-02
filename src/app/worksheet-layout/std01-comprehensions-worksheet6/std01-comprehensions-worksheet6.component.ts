import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-comprehensions-worksheet6',
  templateUrl: './std01-comprehensions-worksheet6.component.html',
  styleUrls: ['./std01-comprehensions-worksheet6.component.scss']
})
export class Std01ComprehensionsWorksheet6Component implements OnInit {

  loadAPI: Promise<any>;
  constructor() { 

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
      var BackgroundImagesLandscapeArr = ["url(assets/std01-comprehensions-worksheet6/img/slide1_bg.jpg)", "url(assets/std01-comprehensions-worksheet6/img/slide2_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std01-comprehensions-worksheet6/img/slide1_bg_portrait.jpg)", "url(assets/std01-comprehensions-worksheet6/img/slide2_bg_portrait.jpg)"];
      var BackgroundImagesArr = [];
      var ActiveSlideNumber;
      var orientation = window.screen.orientation;
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
        if (ActiveSlideNumber > 1) {
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
          ActiveSlideNumber = 1;
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


      $('.question').each(function () {
        var options = $(this).find('.helpbox-text');
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
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var InputNo;
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".helpbox").filter(function () {
          return $(this).find('span').text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
        InputNo = $(this).closest('.question').find('.number').text();
      });
      $('.helpbox').click(function () {
        var HelpBoxQuestionNumber = $(this).closest('.question').find('.number').text();
        if (inputField !== undefined && HelpBoxQuestionNumber == InputNo) {
          inputValue = $(inputField).val();
          Text = $(this).find('span').text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".helpbox").filter(function () {
              return $(this).find('span').text().trim() === inputValue;
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

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var inputCount = 0;
          $('.question').each(function (i) {
            if (i == 2 || i == 3) {
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
          console.log(inputCount)
          if (inputCount >= 3) {

            var Correct_Answers = ["queen", "princess", "sailor", "island", "monkey", "ship"];
            $(inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct-answer').css('display', 'inline-block');
              }

            });

            $(inputs).parent().removeClass('bd');
            $('.option.click').find('.circle').not('right').addClass('wrong');
            $('.circle.right').addClass('correct');
            $('.helpbox-text.click').not('.right').addClass('wrong_color');
            $('.helpbox-text.right.click').addClass('correct-box');
            $('.helpbox-text.right').not('.click').addClass('correct_white');

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
            $('input,.option,.option-question,.third .helpbox-q4 .col-4 div,.question.three .helpbox-container .col-sm-6 div,.helpbox,.helpbox-text').css('pointer-events', 'none');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
