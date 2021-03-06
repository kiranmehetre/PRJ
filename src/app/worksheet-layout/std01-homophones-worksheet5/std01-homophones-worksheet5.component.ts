import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-homophones-worksheet5',
  templateUrl: './std01-homophones-worksheet5.component.html',
  styleUrls: ['./std01-homophones-worksheet5.component.scss']
})
export class Std01HomophonesWorksheet5Component implements OnInit {

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
    var inputs = $('input');

    $(inputs).on('click', function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(inputs).parent().removeClass("bd");
      $(this).parent().addClass('bd');


      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".helpbox-container img").filter(function () {

        var ImgSrc1 = $(this).attr("src");
        var ImgSrcSplit1 = ImgSrc1.split("/");
        var length=ImgSrcSplit1.length;
        var ClickText1 = ImgSrcSplit1[length - 1].replace(".png", "");
        return ClickText1 === inputValue;
      }).removeClass('click');
      $(this).val("");


    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];

    $('.helpbox-container img').each(function () {
      $(this).on('click', function (event) {
        // debugger;
        inputValue = $(inputField).val();
        if (inputField !== undefined) {
          var ImgSrc = $(this).attr("src");
          var ImgSrcSplit = ImgSrc.split("/");
          var length=ImgSrcSplit.length;
          var ClickText = ImgSrcSplit[length - 1].replace(".png", "");
          Text = ClickText;
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".helpbox-container img").filter(function () {
              var ImgSrc2 = $(this).attr("src");
              var ImgSrcSplit2 = ImgSrc2.split("/");
              var length=ImgSrcSplit2.length;
              var ClickText2 = ImgSrcSplit2[length - 1].replace(".png", "");

              return ClickText2 === inputValue;
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
        var ctr = 0;
        var Correct_Answers_Count = 0;
        var Correct_answer = ["threw", "sell", "won", "pane", "fowl", "whole", "not", "wood", "here", "board"];
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 5) {

          ctr = 0;
          $('input').each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_answer[i]) {
              $(this).parent().next().css('display', 'inline-block');
              $(this).css(
                {
                  'color': '#ed1a1a',
                  'border-color': '#000'
                }
              );
            }
            else {
              Correct_Answers_Count++;
            }
            ctr++;
          });
          // $('.ans-div').css('display','inline-block');
          $('.helpbox-container img,input').css('pointer-events', 'none');
          $(inputs).parent().removeClass("bd");
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
            $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
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
