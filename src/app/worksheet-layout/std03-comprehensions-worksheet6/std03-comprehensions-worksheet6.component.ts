import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-comprehensions-worksheet6',
  templateUrl: './std03-comprehensions-worksheet6.component.html',
  styleUrls: ['./std03-comprehensions-worksheet6.component.scss']
})
export class Std03ComprehensionsWorksheet6Component implements OnInit {

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
      var BackgroundImagesLandscapeArr = ["url(assets/std03-comprehensions-worksheet6/img/first_bg.jpg)", "url(assets/std03-comprehensions-worksheet6/img/second_bg.jpg)", "url(assets/std03-comprehensions-worksheet6/img/third_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std03-comprehensions-worksheet6/img/first_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet6/img/second_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet6/img/third_bg_portrait.jpg)"];
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
      var Text = "";
      var inputNumber = "";
      var optionNumber = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".option").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('click');
        $(this).val("");
        inputNumber = $(this).parents().eq(4).find('.Question .number').text();
      });
      $('.option').click(function () {
        optionNumber = $(this).parents().eq(3).find('.Question .number').text();
        if (inputField !== undefined && inputNumber === optionNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".option").filter(function () {
              return $(this).text() === inputValue;
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
      $(".content.second .option").click(function () {
        $(this).parent().find('.alpha').removeClass('click');
        $(this).find('.alpha').addClass('click');
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = 0;
          if ($('.second .Answer_Container').find('.click').length > 0) {
            inputCount++;
          }
          $('.third .Block').each(function () {
            if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
              inputCount++;
            }
          });
          console.log(inputCount);
          if (inputCount >= 3) {
            $(inputs).removeClass('bd');
            Correct_Answers_Count = $(".content.second .option .alpha.right.click").length;
            $(".content.second .option .alpha.click").not('.right').css('background-color', '#bc292a');
            $(".content.second .option .alpha.right").css('background-color', '#20bb15');
            var Correct_Answers_Second = ["fish", "squid", "krill", "shrimp"];
            var Correct_Answers_Third = ["Antarctica", "Galapagos Islands", "South Africa", "South America", "New Zealand", "Southern Australia"];
            var Correct_Answers_Fourth = ["Emperor Penguins", "Little Blue Penguins", "chick", "North Pole"];
            var Correct_Answers_Fifth = ["sea leopards", "sea lions", "orcas", "skuas", "snakes", "sharks", "foxes"];

            var Second_Answers = [];
            var Third_Answers = [];
            var Fifth_Answers = [];
            $('.Block.two input').each(function (i) {
              if (Correct_Answers_Second.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Second_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            $('.Block.third input').each(function (i) {
              if (Correct_Answers_Third.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Third_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            $('.Block.fifth input').each(function (i) {
              if (Correct_Answers_Fifth.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Fifth_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            var Second_Wrong_Answers = [];
            var Third_Wrong_Answers = [];
            var Fifth_Wrong_Answers = [];

            Correct_Answers_Second.filter(function (el) {
              if ($.inArray(el, Second_Answers) == -1) Second_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.two input').each(function (i) {
              if (Correct_Answers_Second.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').find('span').text(Second_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });

            Correct_Answers_Third.filter(function (el) {
              if ($.inArray(el, Third_Answers) == -1) Third_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.third input').each(function (i) {
              if (Correct_Answers_Third.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').find('span').text(Third_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });

            Correct_Answers_Fifth.filter(function (el) {
              if ($.inArray(el, Fifth_Answers) == -1) Fifth_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.fifth input').each(function (i) {
              if (Correct_Answers_Fifth.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').find('span').text(Fifth_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });
            $('.Block.fourth input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_Fourth[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $('.fabulous').removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
            }, 500);
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
            $('input,.option').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 3 questions before submitting');
            }, 500);
          }
        }

        $('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
        });
      });
    });
    function setImages() {
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
