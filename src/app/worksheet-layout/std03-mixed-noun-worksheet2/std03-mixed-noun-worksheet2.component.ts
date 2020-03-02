import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-mixed-noun-worksheet2',
  templateUrl: './std03-mixed-noun-worksheet2.component.html',
  styleUrls: ['./std03-mixed-noun-worksheet2.component.scss']
})
export class Std03MixedNounWorksheet2Component implements OnInit {

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
    $(document).ready(function () {
      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');
      var split1;
      var split;
      var Text1;

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $("u").filter(function () {

          var Text1 = $(this).text().trim();
          if (Text1.indexOf("’") > 0) {
            split1 = Text1.split("’");
            Text1 = split1[0].trim();
          }
          else if (Text1 == "students") {
            split1 = Text1.substring(0, Text1.length - 1);
            Text1 = split1;
          }
          return Text1 === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('u').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          if (Text.indexOf("’") > 0) {
            split = Text.split("’");
            Text = split[0].trim();
          }
          else if (Text == "students") {
            split = Text.substring(0, Text.length - 1);
            Text = split;
          }
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $("u").filter(function () {

              Text1 = $(this).text().trim();
              if (Text1.indexOf("’") > 0) {
                var split1 = Text1.split("’");
                Text1 = split1[0].trim();
              }
              else if (Text1 == "students") {
                split1 = Text1.substring(0, Text1.length - 1);
                Text1 = split1;
              }
              // return Text1 === inputValue;
              return Text1 === inputValue;
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
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 12) {
            var Correct_Answers_Count = 0;
            var Correct_Answers_Proper_Nouns = ["Ocean Park", "South Africa", "Annual Day", "Cape Town", "Peter", "Mischief", "Tuesday", "December", "David", "Ivan", "Ivanka", "Sarah"];
            var Correct_Answers_Common_Nouns = ["grandmother", "student", "doctor", "eyes", "park", "birthday", "friends", "city", "college", "siblings", "library", "book"];

            var Proper_Noun_Answers = [];
            var Common_Nouns_Answers = [];

            $('.Proper_Nouns input').each(function (i) {
              if (Correct_Answers_Proper_Nouns.indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Proper_Noun_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            $('.Common_Nouns input').each(function (i) {
              if (Correct_Answers_Common_Nouns.indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Common_Nouns_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            var Proper_Noun_Wrong_Answers = [];
            var Common_Nouns_Wrong_Answers = [];

            Correct_Answers_Proper_Nouns.filter(function (el) {
              if ($.inArray(el, Proper_Noun_Answers) == -1) Proper_Noun_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Proper_Nouns input').each(function (i) {
              if (Correct_Answers_Proper_Nouns.indexOf($(this).val().toString()) == -1) {
                $(this).parent().siblings('.answer-span').find('span').text(Proper_Noun_Wrong_Answers[ctr]);
                $(this).parent().siblings('.answer-span').css('display', 'inline-block');
                ctr++;
              }
            });

            Correct_Answers_Common_Nouns.filter(function (el) {
              if ($.inArray(el, Common_Nouns_Answers) == -1) Common_Nouns_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Common_Nouns input').each(function (i) {
              if (Correct_Answers_Common_Nouns.indexOf($(this).val().toString()) == -1) {
                $(this).parent().siblings('.answer-span').find('span').text(Common_Nouns_Wrong_Answers[ctr]);
                $(this).parent().siblings('.answer-span').css('display', 'inline-block');
                ctr++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 24;
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
            $(inputs).parent().removeClass('bd');
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

            $('input,.text-container span').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 12 blanks before submitting');
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
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
