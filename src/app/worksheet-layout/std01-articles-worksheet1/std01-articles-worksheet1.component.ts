import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-articles-worksheet1',
  templateUrl: './std01-articles-worksheet1.component.html',
  styleUrls: ['./std01-articles-worksheet1.component.scss']
})
export class Std01ArticlesWorksheet1Component implements OnInit {

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
      var imgURL = "";
      $('.Block').click(function () {
        $(this).toggleClass('click');
        if ($(this).hasClass('click')) {
          imgURL = "assets/std01-articles-worksheet1/img/" + $(this).attr('data-text') + "-right.png";
          $(this).find('img').attr('src', imgURL);
        }
        else {
          imgURL = "assets/std01-articles-worksheet1/img/" + $(this).attr('data-text') + ".png";
          $(this).find('img').attr('src', imgURL);
        }
      });

      $('.button').click(function () {
        if ($(this).hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          if ($('.click').length >= 4) {
            $('.right').each(function () {
              imgURL = "assets/std01-articles-worksheet1/img/" + $(this).attr('data-text') + "-right.png";
              $(this).find('img').attr('src', imgURL);
            });
            $('.wrong').each(function () {
              imgURL = "assets/std01-articles-worksheet1/img/" + $(this).attr('data-text') + "-wrong.png";
              $(this).find('img').attr('src', imgURL);
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
            $('input,.Block').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please colour at least 4 pictures before submitting');
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
      $('.imgBox img').attr('src', 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
