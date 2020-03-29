import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-abstract-noun-worksheet2',
  templateUrl: './std03-abstract-noun-worksheet2.component.html',
  styleUrls: ['./std03-abstract-noun-worksheet2.component.scss']
})
export class Std03AbstractNounWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
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
      $(".text-container span").filter(function () {
        return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");


    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];

    $('.text-container span').each(function () {
      $(this).on('click', function (event) {

        inputValue = $(inputField).val();
        if (inputField !== undefined) {
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".text-container span").filter(function () {
              return $(this).text().trim() === inputValue;
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

      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        $(inputs).parent().removeClass("bd");
        if (inputCount >= 10) {
          var Correct_Answers_Count = 0;
          var Correct_Answers_Abstract_Nouns = ["tiredness", "curiosity", "coldness", "anger", "goodness", "wealth", "jealousy", "knowledge", "success", "fear"];
          var Correct_Answers_Concrete_Nouns = ["butter", "swan", "ginger", "balloon", "turkey", "noodles", "bones", "suit", "fork", "belt"];
          var Abstract_Nouns_Answers = [];
          var Concrete_Nouns_Answers = [];
          $('.Abstract_Nouns input').each(function (i) {
            if (Correct_Answers_Abstract_Nouns.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              // if($(this).val() !== ""){
              // 	Correct_Answers_Count--;
              // }
            }
            else {
              Abstract_Nouns_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.Concrete_Nouns input').each(function (i) {
            if (Correct_Answers_Concrete_Nouns.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              // if($(this).val() !== ""){
              // 	Correct_Answers_Count--;
              // }
            }
            else {
              Concrete_Nouns_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          var Abstract_Nouns_Wrong_Answers = [];
          var Concrete_Nouns_Wrong_Answers = [];

          Correct_Answers_Abstract_Nouns.filter(function (el) {
            if ($.inArray(el, Abstract_Nouns_Answers) == -1) Abstract_Nouns_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.Abstract_Nouns input').each(function (i) {
            if (Correct_Answers_Abstract_Nouns.indexOf($(this).val().toString()) == -1) {
              $(this).parents().eq(1).siblings('.ans-div').find('span').text(Abstract_Nouns_Wrong_Answers[ctr]);
              $(this).parents().eq(1).siblings('.ans-div').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Concrete_Nouns.filter(function (el) {
            if ($.inArray(el, Concrete_Nouns_Answers) == -1) Concrete_Nouns_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.Concrete_Nouns input').each(function (i) {
            if (Correct_Answers_Concrete_Nouns.indexOf($(this).val().toString()) == -1) {
              $(this).parents().eq(1).siblings('.ans-div').find('span').text(Concrete_Nouns_Wrong_Answers[ctr]);
              $(this).parents().eq(1).siblings('.ans-div').css('display', 'block');
              ctr++;
            }
          });
          // $('.ans-div').css('display','inline-block');
          $('.text-container span,input').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 20;
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
          }, 500);
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 10 blanks before submitting');
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
