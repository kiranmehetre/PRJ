import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-comprehensions-worksheet2',
  templateUrl: './std03-comprehensions-worksheet2.component.html',
  styleUrls: ['./std03-comprehensions-worksheet2.component.scss']
})
export class Std03ComprehensionsWorksheet2Component implements OnInit {

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
    var ActiveSlideNumber;
    $(document).ready(function () {
      var BackgroundImagesLandscapeArr = ["url(assets/std03-comprehensions-worksheet2/img/slide1_bg.jpg)", "url(assets/std03-comprehensions-worksheet2/img/slide2_bg.jpg)", "url(assets/std03-comprehensions-worksheet2/img/slide3_bg.jpg)", "url(assets/std03-comprehensions-worksheet2/img/slide4_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std03-comprehensions-worksheet2/img/slide1_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet2/img/slide2_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet2/img/slide3_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet2/img/slide4_bg.jpg)"];
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
        if (ActiveSlideNumber > 3) {
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
          ActiveSlideNumber = 3;
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
      var inputs = $('input');
      var Apples = $('.Answer .apple');
      $(inputs).attr('readonly', 'readonly');
      $('.Answer .apple,.Answer .number-span,.Answer .input-div').click(function () {
        inputField = $(this).parent().find('input');
        $(Apples).removeClass('bd');
        $(this).parent().find('img').addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".Question_Block.first .Option,.Question_Block.first_portrait .Option").filter(function () {
          return $(this).attr('data-text').trim() === inputValue;
        }).removeClass('blue');
        $(this).parent().find('input').val("");
      });
      $('input').each(function () {
        var value = $(this).val();
        $(".Question_Block.first .Option,.Question_Block.first_portrait .Option").filter(function () {
          return $(this).attr('data-text').trim() === value;
        }).addClass('blue');
      })
      $('.Question_Block.one .Option').click(function () {
        if (inputField !== undefined) {
          Text = $(this).attr('data-text');
          inputValue = $(inputField).val();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".Question_Block.first .Option,.Question_Block.first_portrait .Option").filter(function () {
              return $(this).attr('data-text').trim() === inputValue;
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
        $('.Question_Block.second .Question .option').click(function () {
          if($(this).hasClass('click')){
            $(this).removeClass('click');
          }
          else{
            $(this).parent().find('.option').removeClass('click');
            $(this).addClass('click');
          }
        });
      $('.content.fourth .Question_Block .option').click(function () {
        if($(this).hasClass('click')){
          $(this).removeClass('click');
        }
        else{
          $(this).parent().find('.option').removeClass('click');
          $(this).addClass('click');
        }
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var questionCount = 0;
          var inputCount = $(inputs).filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount > 0) {
            questionCount++;
          }
          $('.Question_Block').each(function () {
            if ($(this).find('.click').length > 0) {
              questionCount++;
            }
          });
          if (questionCount >= 3) {
            var Question_One_Answers = ["E", "C", "A", "B", "D"];
            $(Apples).removeClass('bd');
            $('.Answers input').each(function (i) {
              if ($(this).val() !== Question_One_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'block');
              }
            });
            var DisplayResult = "";
            DisplayResult = '.fabulous';
            $('.Question_Block.second .option.right').css('background-color', '#20bb15');
            $('.Question_Block.second .option.click').not('.right').css('background-color', '#bc292a');

            $('.Question_Block.third .option .alpha.right').css('background-color', '#20bb15');
            $('.Question_Block.third .option.click .alpha').not('.right').css('background-color', '#bc292a');

            $('.Question_Block.fourth .option .alpha.right').css('background-color', '#20bb15');
            $('.Question_Block.fourth .option.click .alpha').not('.right').css('background-color', '#bc292a');

            $('.Question_Block.fifth .option .alpha.right').css('background-color', '#20bb15');
            $('.Question_Block.fifth .option.click .alpha').not('.right').css('background-color', '#bc292a');

            $('.Question_Block.sixth .option .alpha.right').css('background-color', '#20bb15');
            $('.Question_Block.sixth .option.click .alpha').not('.right').css('background-color', '#bc292a');

            $('input,.Question_Block.first .Option,.Answer,.option,.alpha').css('pointer-events', 'none');

            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $(DisplayResult).removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
            }, 500);
            $('input,.options span').css('pointer-events', 'none');
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
