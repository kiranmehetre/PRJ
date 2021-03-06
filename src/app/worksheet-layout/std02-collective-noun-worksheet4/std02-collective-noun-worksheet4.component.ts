import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-collective-noun-worksheet4',
  templateUrl: './std02-collective-noun-worksheet4.component.html',
  styleUrls: ['./std02-collective-noun-worksheet4.component.scss']
})
export class Std02CollectiveNounWorksheet4Component implements OnInit {

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
    var inputValue;
    var inputs = $('.margin-bottom-2 .col-xs-6:nth-child(2) input');
    $('input').attr('readonly', 'readonly');
    $(inputs).on('click', function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(inputs).removeClass("bd");
      $(this).addClass('bd');


      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".chose-answer td").filter(function () {
        return $(this).find('span').text() === inputValue;
      }).removeClass('click');
      $(this).val("");


    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];

    $('.chose-answer td').each(function () {
      $(this).on('click', function (event) {

        inputValue = $(inputField).val();
        if (inputField !== undefined) {
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".chose-answer td").filter(function () {
              return $(this).find('span').text() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (clickAnswer.indexOf(Text) > -1) {
          }
          else {
            clickAnswer = $.grep(clickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
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
        var inputCount = $('.margin-bottom-2 .col-xs-6:nth-child(2) input').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 4) {
          $(inputs).removeClass("bd");
          var Correct_answers = ["nest", "shoal", "gaggle", "library", "colony", "pod", "group", "bunch"];
          $('.margin-bottom-2 .col-xs-6:nth-child(2) input').each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });

              var checkclass = $(this).parent().parent().parent().parent().parent().parent().attr('class');

              $(this).closest('.Question_Row').find('.answer').css('display', 'block');

            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('.Option_Container img,input,tr,td').css('pointer-events', 'none');

          var percentage = (Correct_Answers_Count * 100) / 8;
          var DisplayResult = "";
          if (percentage > 80) {
            DisplayResult = '.outstanding';
          }
          else if (percentage > 60) {
            DisplayResult = '.brilliant';
          }
          else if (percentage >= 50) {
            DisplayResult = '.good-work';
          }
          else if (percentage < 50) {
            DisplayResult = '.keep-practicing';
          }

          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox').hide();
            $(DisplayResult).removeClass('hide');
            $('.result .imgBox').show();
            $('.result').delay(2000).fadeOut('slow');
            $('.close').hide();
          }, 500);

          setTimeout(function () {
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 500);

        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
  }

}
