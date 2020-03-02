import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-compound-word-worksheet9',
  templateUrl: './std03-compound-word-worksheet9.component.html',
  styleUrls: ['./std03-compound-word-worksheet9.component.scss']
})
export class Std03CompoundWordWorksheet9Component implements OnInit {

  constructor() { }

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
    var inputField;
    var clickAnswer = [];
    var inputValue = "";
    var inputs = $('.left-feather');

    $(inputs).on('click', function () {
      inputField = $(this).next();
      inputValue = $(this).next().find('span').text();
      $(inputs).removeClass("bd");
      $(this).addClass('bd');
      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".right_butterfly_container .right-feather").filter(function () {
        return $(this).find('span').text().trim() === inputValue;
      }).removeClass('click');
      $(this).next().find('span').text("");
      $(this).next().removeClass('set_answer vissible');
    });
    var Text = '';
    var HelpBox = [];

    $('.right_butterfly_container .right-feather').each(function () {
      $(this).on('click', function (event) {
        //    Text=$(this).attr('data-text');
        inputValue = $(inputField).find('span').text();
        if (inputField !== undefined) {
          Text = $(this).find('span').text();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".right_butterfly_container .right-feather").filter(function () {
              return $(this).find('span').text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (clickAnswer.indexOf(Text) > -1) {
          }
          else {
            clickAnswer = $.grep(clickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).find('span').text(Text);
            // $(inputField).css('visibility','initial');
            $(inputField).addClass('set_answer vissible')
            //$(inputField).val(Text);
            clickAnswer.push(Text);
          }
        }
      });


    });
    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        if ($('.set_answer').length >= 5) {
          var Correct_answers = ["brush", "boy", "corn", "fish", "day", "mill", "berry", "cake", "house", "bee"];
          $('.butterfly_container .right-feather').each(function (i) {
            var set_answer = $(this).find('span').text().trim();

            if (set_answer != Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).prev().css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).closest('.butterfly_container').find('.answer-container span').css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
              $(this).addClass('fly_butterfly');
              $(this).prev().addClass('fly_butterfly_prev');
              $(this).closest('.butterfly_container').find('.answer-container span').css('display', 'inline-block');
            }


          });


          $('.butterfly_container').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 10;
          var DisplayResult = "";
          if (percentage > 80) {
            DisplayResult = '.outstanding';
          }
          else if (percentage > 60) {
            DisplayResult = '.brilliant';
          }
          else if (percentage > 50) {
            DisplayResult = '.good-work';
          }
          else if (percentage <= 50) {
            DisplayResult = '.keep-practicing';
          }

          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox').hide();
            $(DisplayResult).removeClass('hide');
            $('.result .imgBox').show();
            $('.result').delay(2000).fadeOut('slow');

            setTimeout(function () {
              fly_butterfly();
            }, 2300);
            $('.close').hide();
          }, 500);

          setTimeout(function () {
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 500);

          $(inputs).removeClass("bd");
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please join at least 5 butterflies before submitting');
          }, 500);
        }
      }

    });

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });
    function setImages() {
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
    function fly_butterfly() {
      // $('.right_butterfly_container .right-feather').not('.click').css({ 'color': '#ed1a1a'});
      $('.fly_butterfly').addClass('slide-out');
      $('.fly_butterfly_prev').addClass('slide-out');
    }
  }

}
