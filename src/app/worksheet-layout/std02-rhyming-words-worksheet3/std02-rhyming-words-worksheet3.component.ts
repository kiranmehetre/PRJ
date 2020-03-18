import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-rhyming-words-worksheet3',
  templateUrl: './std02-rhyming-words-worksheet3.component.html',
  styleUrls: ['./std02-rhyming-words-worksheet3.component.scss']
})
export class Std02RhymingWordsWorksheet3Component implements OnInit {

  constructor() { }

  ngOnInit() {  
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
    $(document).ready(function () {
      $('.Block').click(function () {
        var imgURL = "";
        var img = $(this).find('img');
        $(this).toggleClass('click');
        if ($(this).hasClass('click')) {
          imgURL = "assets/std02-rhyming-words-worksheet3/img/" + $(this).find('.content').text().trim() + "_click.png";
        }
        else {
          imgURL = "assets/std02-rhyming-words-worksheet3/img/" + $(this).find('.content').text().trim() + ".png";
        }
        $(img).attr('src', imgURL);
      });

      $('.button').click(function () {
        if ($(this).hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          if ($('.click').length >= 5) {
            $('.Block').each(function () {
              var imgURL = "";
              var img = $(this).find('img');
              if ($(this).hasClass('wrong')) {
                imgURL = "assets/std02-rhyming-words-worksheet3/img/" + $(this).find('.content').text().trim() + "_wrong.png";
              }
              else {
                imgURL = "assets/std02-rhyming-words-worksheet3/img/" + $(this).find('.content').text().trim() + "_click.png";
              }
              $(img).attr('src', imgURL);
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
            $('.Block').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please colour at least 5 pictures before submitting');
            }, 500);
          }
        }
        $('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
        });
      });

    });
    function setImages() {
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
