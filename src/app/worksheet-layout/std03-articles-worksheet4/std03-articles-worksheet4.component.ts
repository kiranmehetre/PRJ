import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-articles-worksheet4',
  templateUrl: './std03-articles-worksheet4.component.html',
  styleUrls: ['./std03-articles-worksheet4.component.scss']
})
export class Std03ArticlesWorksheet4Component implements OnInit {

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


    // var inputValue="";
    var Correct_Answers_Count = 0;
    $("input").each(function (i) {

      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });



    var inputs = $('input');
    $(inputs).attr('readonly', 'readonly');
    var inputField;

    $('input').on('click', function () {
      inputField = $(this);
      // inputValue=$(this).val();
      $('input').removeClass('bd');
      $(this).addClass('bd');

    });


    for (var i = 0, len = inputs.length; i < len; i++) {
      inputs[i].addEventListener('focus', function () {
        $(this).attr('id', 'question' + i).addClass('bd');  //handle event
      })
    };

    var Text = '';

    $('.helpbox-ans').each(function () {
      $(this).on('click', function (event) {
        if (inputField !== undefined) {
          var Text = $(this).text();
          $(inputField).val(Text);
        }
      });


    });

    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 8) {
          $(inputs).removeClass('bd');
          var Correct_Answers = ["an", "a", "a", "an", "a", "a", "a", "an", "an", "an", "a", "an", "an", "an", "a", "an"];
          $(inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).parents().siblings('.answer').css('display', 'block');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          var percentage = (Correct_Answers_Count * 100) / 16;
          var ImgURL = "";
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
            $('.close').hide();
          }, 500);

          setTimeout(function () {
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 10);

          $('input,.helpbox-ans').css('pointer-events', 'none');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 8 blanks before submitting');
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
