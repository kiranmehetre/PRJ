import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-action-verb-worksheet3',
  templateUrl: './std01-action-verb-worksheet3.component.html',
  styleUrls: ['./std01-action-verb-worksheet3.component.scss']
})
export class Std01ActionVerbWorksheet3Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService) {
  }

  ngOnInit() {
 this.commonWorksheet.reuseRoute();

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

    var selectext = false;
    // $(".text-container").each(function (i) {

    //   $(this).attr('id', 'question' + i);
    //   var id = $(this).attr('id', 'question' + i);
    //   var text = id.text();
    //   var $words = text.split(" ");
    //   var $newText = "";
    //   var demoText = [];

    //   $.each($words, function (i, val) {
    //     if (val.indexOf(".") > 0) {
    //       demoText = val.split(".");
    //       $newText = $newText + '<span style="cursor:pointer">' + demoText[0] + '</span>' + ".";
    //     }
    //     else {
    //       $newText = $newText + '<span style="cursor:pointer">' + val + '</span> ';
    //     }
    //   })
    //   $(this).attr('id', 'question' + i).html($newText);

    // });

    // $('.text-container span').click(function () {
    // 	selectext=true;
    // 	var click=$(this).parent().attr('id');
    // 	$("#"+click+" span").removeClass("underlined");
    // 	$(this).addClass("underlined");
    // });
    $('.text-container span').click(function () {
      if ($(this).hasClass('underlined')) {
        $(this).removeClass('underlined');
      }
      else {
        $(this).parent().find('span').removeClass("underlined");
        $(this).addClass('underlined');
      }
    });

    $('.button').click(function () {
      //  if($('.underlined').length > 0){

      //  }
      //  else{
      // 	 alert('Kindly click any one');
      //  }
      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        if ($('.underlined').length < 4) {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
          }, 500);
        }
        else {
          var i = 0;
          var Correct_Answers = ["swims", "watch", "listens", "leaves", "needs", "play", "drinks", "repairs"];
          $('.question').each(function (i) {
            var Spans;
            var underlined = $(this).find('.underlined');
            if (underlined !== undefined) {
              if (underlined.text() !== Correct_Answers[i]) {
                $(underlined).css('color', 'red');
              }
            }
            $(this).find("span:contains(" + Correct_Answers[i] + ")").addClass('right');
          });


          $('.right').each(function () {
            if ($(this).hasClass('underlined')) {
              $(this).addClass('correct');
            }
            else {
              $(this).addClass('correct_white');
            }
          });
          $('.underlined').not('.right').css('color', '#ed1a1a');
          var Correct_Answers_Count = $('.underlined.right').length;
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
          $(".text-container").addClass('disabled');
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
      }
    });
    // $('.playAgain').click(function(){
    // 	location.reload();
    // });
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
