import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-comma-worksheet1',
  templateUrl: './std02-comma-worksheet1.component.html',
  styleUrls: ['./std02-comma-worksheet1.component.scss']
})
export class Std02CommaWorksheet1Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
    $('.loadingDiv').hide();
    setImages();
	window.onload = function () { 
		
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
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }
    theToggle.onclick = function() {
        toggleClass(this, 'on');
        $('.menu-block #menu').show();
        $('#toggle span img').toggleClass('up');
        return false;
    }
    $(".input-span").each(function (i) {
	
      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });
    var inputField;
    $('input').on('click', function () {
      inputField = $(this);
      $('input').removeClass('bd');
      $(this).addClass('bd');
      $(this).val("");
    });
    var Text = '';

    $('.helpbox').on('click', function (event) {
      var Text = $(this).text();
      if (inputField !== undefined) {
        var Text = $(this).text();
        $(inputField).val(Text.trim());
      }
    });


    $('.button').click(function () {
      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var Correct_Answers = [',', ',', ',', ',', ',', ',', ',', ',', ',', ',', ',', ','];
        var i = 0;
        var Correct_Answers_Count = 0;
        $('input').removeClass('bd');
        // var inputCount=0;
        // $('.question').each(function () {
        //   // debugger;
        //   var check=$(this).find('input').filter(function () { return $(this).val(); }).length;
        //   if($(this).find('input').filter(function () { return $(this).val(); }).length > 0)
        //   {
        //     inputCount++;
        //   }
        // });
        let inputCount=$('input[type="text"]').filter(function () {
                          return !! $(this).val();
                        }).length;
        if (inputCount >= 4) {
          $('input').each(function () {
            if ($(this).val().toString().trim() !== Correct_Answers[i]) {
              $(this).css({ 'color': 'red', 'border-color': '#000' });
              $(this).siblings('.correct-answer').css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
            i++;
          });

          $('input,.helpbox-container').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 12;
          // var DisplayResult = "";
          // if (percentage > 80) {
          // 	DisplayResult = '.outstanding';
          // }
          // else if (percentage > 60) {
          // 	DisplayResult = '.brilliant';
          // }
          // else if (percentage > 50) {
          // 	DisplayResult = '.good-work';
          // }
          // else if (percentage <= 50) {
          // 	DisplayResult = '.keep-practicing';
          // }
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
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 6 boxes before submitting');
          }, 500);
        }
      }

    });

    $('input').attr('readonly', 'readonly');

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });

    function setImages() {
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
