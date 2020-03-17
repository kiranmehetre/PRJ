import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
// import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-adjective-worksheet1',
  templateUrl: './std01-adjective-worksheet1.component.html',
  styleUrls: ['./std01-adjective-worksheet1.component.scss']
})
export class Std01AdjectiveWorksheet1Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService
    ) {
   }

  ngOnInit() {
  //  this.router.routeReuseStrategy.shouldReuseRoute = function(){
  //     return false;
  //   };
  //   this.router.events.subscribe((evt) => {
  //       if (evt instanceof NavigationEnd) {
  //           this.router.navigated = false;
  //       }
  //   });

        let globleThis = this;
      window.onload = function () { 
         
      }
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


      $(document).ready(function(){
        $('.Question_Block').click(function(){
           $(this).toggleClass('click');
           if($(this).hasClass('click')){
              $(this).find('img').attr('src','assets/std01-adjective-worksheet1/img/right_star.png');
           }
           else{
              $(this).find('img').attr('src','assets/std01-adjective-worksheet1/img/star.png');
           }
        });
      
      $('.button').click(function(){
           if($(this).hasClass('playAgain')){
            //globleThis.router.navigate([""])
            // globleThis.ngOnInit();
            
              //window.location.href=window.location.href;
           }
           else{
              if($('.click').length >= 6){
                 $('.Question_Block.right').find('img').attr('src','assets/std01-adjective-worksheet1/img/right_star.png');
                 $('.Question_Block.wrong').find('img').attr('src','assets/std01-adjective-worksheet1/img/wrong_star.png');
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
                 $('.Question_Block').css('pointer-events','none');
              }
              else{
                 setTimeout(function(){
                    $('.result').css('display','flex');
                    $('.result .TextBox h1').text('Please colour at least 6 stars before submitting');
                 },500);
              }
           }
           $('.result,.close').click(function(){
              $('.result').fadeOut();
              $('.close').show();
           });
        });
         
     });
    function setImages(){
      var t=new Date().getTime();
      $('.imgBox img').attr('src','assets/images/fabulous.gif'+'?'+t);
    }

    // const reloadComponent = () => {
    //   this.router.onSameUrlNavigation = 'reload';
    //   const url = this.route.snapshot['_routerState'].url;
    //   this.router.navigate([`${url}`])
    // };
  }

}
