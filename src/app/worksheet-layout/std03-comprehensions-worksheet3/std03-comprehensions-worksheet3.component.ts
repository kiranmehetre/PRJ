import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-comprehensions-worksheet3',
  templateUrl: './std03-comprehensions-worksheet3.component.html',
  styleUrls: ['./std03-comprehensions-worksheet3.component.scss']
})
export class Std03ComprehensionsWorksheet3Component implements OnInit {

  loadAPI: Promise<any>;constructor(private commonWorksheet: CommonWorksheetService){

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
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
    window.onload = function () {
      setImages();
      $('.loadingDiv').hide();
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
    var ActiveSlideNumber;
    $(document).ready(function () {
      var BackgroundImagesLandscapeArr = ["url(assets/std03-comprehensions-worksheet3/img/first_bg.jpg)", "url(assets/std03-comprehensions-worksheet3/img/second_bg.jpg)", "url(assets/std03-comprehensions-worksheet3/img/third_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std03-comprehensions-worksheet3/img/first_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet3/img/second_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet3/img/third_bg_portrait.jpg)"];
      var BackgroundImagesArr = [];
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



      var currentIndex = $('.carousel-item.active').index() + 1;
      //console.log(currentIndex);






      var inputFieldFirst;
      var inputFieldSecond;
      var inputFieldThird;
      var inputFieldFourth;
      var inputValue;
      var ClickAnswerFirst = [];
      var ClickAnswerSecond = [];
      var ClickAnswerFourth = [];
      var HelpBoxFirst = [];
      var HelpBoxSecond = [];
      var HelpBoxFourth = [];
      var Text = "";
      var inputNumber = "";
      var optionNumber = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');
      // first Block jQuery
      $('.Block.One input').click(function () {
        inputFieldFirst = $(this);
        $('*').removeClass('bd');
        $(this).closest('.input_div').addClass('bd');
        inputValue = $(inputFieldFirst).val();
        ClickAnswerFirst = $.grep(ClickAnswerFirst, function (value) {
          return value != inputValue;
        });
        $(".Option").filter(function () {
          return $(this).find('.letter').text().trim().replace(')', '') === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.Option').click(function () {
        if (inputFieldFirst !== undefined) {
          inputValue = $(inputFieldFirst).val();
          Text = $(this).find('.letter').text().trim().replace(')', '');
          HelpBoxFirst.push(Text);
          if (HelpBoxFirst.indexOf(inputValue) > -1 && ClickAnswerFirst.indexOf(Text) < 0) {
            $(".Option").filter(function () {
              return $(this).find('.letter').text().trim().replace(')', '') === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswerFirst.indexOf(Text) > -1) {

          }
          else {
            ClickAnswerFirst = $.grep(ClickAnswerFirst, function (value) {
              return value != inputValue;
            });
            $(inputFieldFirst).val(Text);
            ClickAnswerFirst.push(Text);
          }
        }
      });
      // Second Block jQuery
      $('.Block.Two input').click(function () {
        inputFieldSecond = $(this);
        $('*').removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputFieldSecond).val();
        ClickAnswerSecond = $.grep(ClickAnswerSecond, function (value) {
          return value != inputValue;
        });
        $(".Block.Two .option").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.Block.Two .option').click(function () {
        if (inputFieldSecond !== undefined) {
          inputValue = $(inputFieldSecond).val();
          Text = $(this).text().trim();
          HelpBoxSecond.push(Text);
          if (HelpBoxSecond.indexOf(inputValue) > -1 && ClickAnswerSecond.indexOf(Text) < 0) {
            $(".Block.Two .option").filter(function () {
              return $(this).text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswerSecond.indexOf(Text) > -1) {

          }
          else {
            ClickAnswerSecond = $.grep(ClickAnswerSecond, function (value) {
              return value != inputValue;
            });
            $(inputFieldSecond).val(Text);
            ClickAnswerSecond.push(Text);
          }
        }
      });
      // Third Block jQuery
      $('.Block.Three input').click(function () {
        inputFieldThird = $(this);
        $('*').removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputFieldThird).val();
        $(this).val("");
      });
      $('.Block.Three .option').click(function () {
        if (inputFieldThird !== undefined) {
          Text = $(this).text().trim();
          $(inputFieldThird).val(Text);
        }
      });
      // Fourth Block jQuery
      $('.Block.Four input').click(function () {
        inputFieldFourth = $(this);
        $('*').removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputFieldFourth).val();
        ClickAnswerFourth = $.grep(ClickAnswerFourth, function (value) {
          return value != inputValue;
        });
        $(".Block.Four .option").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.Block.Four .option').click(function () {
        if (inputFieldFourth !== undefined) {
          inputValue = $(inputFieldFourth).val();
          Text = $(this).text().trim();
          HelpBoxFourth.push(Text);
          if (HelpBoxFourth.indexOf(inputValue) > -1 && ClickAnswerFourth.indexOf(Text) < 0) {
            $(".Block.Four .option").filter(function () {
              return $(this).text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswerFourth.indexOf(Text) > -1) {

          }
          else {
            ClickAnswerFourth = $.grep(ClickAnswerFourth, function (value) {
              return value != inputValue;
            });
            $(inputFieldFourth).val(Text);
            ClickAnswerFourth.push(Text);
          }
        }
      });
      // Fifth Block JQuery
      $(".Block.Five .option").click(function () {
        $(this).parent().find('.alpha').removeClass('click');
        $(this).find('.alpha').addClass('click');
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = 0;
          $('.Block').not('five').each(function () {
            if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
              inputCount++;
            }
          });
          if ($('.Block.Five').find('.click').length > 0) {
            inputCount++;
          }
          if (inputCount >= 3) {
            $(inputs).removeClass('bd');
            Correct_Answers_Count = $(".Block.Five .option .alpha.correct.click").length;
            $(".Block.Five .option .alpha.click").not('.correct').css('background-color', '#bc292a');
            $(".Block.Five .option .alpha.correct").css('background-color', '#20bb15');
            var Correct_Answers_First = ["E", "A", "D", "F", "B", "C"];;
            var Correct_Answers_Second = ["scene", "drama", "magically", "raves", "my", "mile"];
            var Correct_Answers_Third = ["swimming", "sprinting", "high jump", "long jump", "swimming"];;
            var Correct_Answers_Fourth = ["fish", "cheetah", "red kangaroo", "mountain goat", "dolphin"];;

            $('.Block.One input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_First[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.input_div').siblings('.correct_answer').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            $('.Block.Two input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_Second[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.input_div').find('.correct_answer').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            $('.Block.Three input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_Third[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.input_div').find('.correct_answer').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            $('.Block.Four input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_Fourth[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.content').find('.correct_answer').css('display', 'inline-block');
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
            $('input,.option,.Option').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 3 questions before submitting');
            }, 500);
          }

          $('.result,.close').click(function () {
            $('.result').fadeOut();
            $('.close').show();
          });
        }
      });
    });
    function setImages() {
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
