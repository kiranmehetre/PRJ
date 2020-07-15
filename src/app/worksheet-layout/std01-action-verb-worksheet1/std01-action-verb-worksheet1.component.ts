import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-action-verb-worksheet1',
  templateUrl: './std01-action-verb-worksheet1.component.html',
  styleUrls: ['./std01-action-verb-worksheet1.component.scss']
})
export class Std01ActionVerbWorksheet1Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService) {
  }

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

      var imgUrl;
      var img;

      $('.wheel-container span').click(function(){
        img=$(this);
        var imgClassName=$(this).attr('class');
        if(imgClassName.indexOf('click')>-1)
        {
          $(img).addClass('background-unset');
          $(img).removeClass('click');
        }
        else
        {
          $(img).removeClass('background-unset');
          $(img).addClass('click');
        }
      });

      $('.button').click(function(){
        if($('.button').hasClass('playAgain'))
        {
          globalThis.commonWorksheet.reloadComponent();
        }
        else
        {
          if($('.click').length >= 8){
            $('.wrong').each(function(){
              $(this).removeClass('background-unset');
              $(this).addClass('wrong-click');
            });

            $('.right').each(function(){
              $(this).removeClass('background-unset');
            });
              $('.wheel-container span').css('pointer-events','none');
              
              setTimeout(function(){
                          $('.result').css('display','flex');
                          $('.result .TextBox').hide();
                          $('.fabulous').removeClass('hide');
                          $('.result .imgBox').show();
                          $('.result').delay(2000).fadeOut('slow');
                          $('.close').hide();
                      },500);

                      setTimeout(function(){
                          $('.button').addClass('playAgain');
                          $('.button.playAgain').text('solve again');
                      },500);
          }
          else{
            setTimeout(function(){
                      $('.result').css('display','flex');
                      $('.result .TextBox h1').text('Please colour at least 8 boxes before submitting');
                    },500);
          }
        }
            
      });

      $('.result,.close').click(function(){
          $('.result').fadeOut();
          $('.close').show();
      });
      function setImages(){
          var AllImages=['assets/images/fabulous.gif'];
            $('.imgBox img').each(function(i){
                      var t=new Date().getTime();
                      $(this).attr("src", AllImages[i]+'?'+t);
            });
      } 

  }

}
