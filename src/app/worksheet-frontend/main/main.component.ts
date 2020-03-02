import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AppRequestService} from '../../shared/services/app-request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loadAPI: Promise<any>;
  menu:any;
  profile_picture_path:any;
  // gradeArray:any;
  grade1Active:any;
  grade2Active:any;
  grade3Active:any;
  
  constructor(public router: Router, public apiRequest : AppRequestService) {     
    this.loadAPI = new Promise((resolve) => {
    this.loadScript();
    this.menu = false;
    resolve(true);
    });
  }

  ngOnInit() {      
       if(localStorage.getItem('isLoggedin')){
          this.menu = true;
       }
       else{
        this.menu = false;
       }

       let profile_pic = JSON.parse(localStorage.getItem('user'));
       this.profile_picture_path = profile_pic[0].photo_url;
       let Grades = profile_pic[0].class.split(',',3);
       let grade1Active = "disabled";
       let grade2Active = "disabled";
       let grade3Active = "disabled";
       $(Grades).each(function(i){
        if(Grades[i] == "1"){
          grade1Active = "";
        }
        else if(Grades[i] == "2"){
          grade2Active = "";
        }
        else if(Grades[i] == "3"){
          grade3Active = "";
        }
       });
       this.grade1Active = grade1Active;
       this.grade2Active = grade2Active;
       this.grade3Active = grade3Active;

       $(document).ready(function(){
          checkOrientation();
          $('.dropdown_toggle').click(function () {
              $(this).siblings('.dropdown').slideToggle('.dropdown');
              $(this).find('img.arrow').toggleClass('up');
              $('.standard_dropdown').slideUp('.dropdown');
              $('.standard_dropdown_toggle img.arrow').removeClass('up');
          });
          $('.standard_dropdown_toggle').click(function () {
              $(this).siblings('.standard_dropdown').slideToggle('.dropdown');
              $(this).find('img.arrow').toggleClass('up');
              $('.dropdown').slideUp('.dropdown');
              $('.dropdown_toggle img.arrow').removeClass('up');
          });
          $(document).on('click','.why_us',function(){
            checkOrientation();
            $('.home.body_div').hide();
            $('.why_us_div_wrapper').show();
            setTimeout(function(){
              $('.why_us_img_block').show();
              $('.why_us_gif').hide();
              $('.why_us_div .close').show();
              var orientation = window.screen.orientation;
              var screenWidth = $(window).width();
              if(orientation.type!="landscape-primary"){
                if(screenWidth < 1900){
                  $('.character').show();
                }
              }
            },5000);
            
            
          });
          $(document).on('click','.why_us_div .close',function(){
              $('.why_us_div_wrapper').hide();
              $('.home.body_div').show();
              $('.why_us_gif').show();
              $('.why_us_img_block').hide();
              $('.why_us_div .close').hide();
              checkOrientation();
              $('.character').hide();
          });
        });
        function checkOrientation(){
          var orientation = window.screen.orientation;
          var screenWidth = $(window).width();
          if(orientation.type=="landscape-primary"){
            $('.why_us_gif').attr("src","assets/frontend_assets/main_dashboard/img/gif/Why_us.gif");
            $('.why_us_img').attr("src","assets/frontend_assets/main_dashboard/img/Why-Us.jpeg");
          }
          else{
            if(screenWidth >= 1900){
              $('.why_us_gif').attr("src","assets/frontend_assets/main_dashboard/img/gif/Why_us.gif");
              $('.why_us_img').attr("src","assets/frontend_assets/main_dashboard/img/Why-Us.jpeg");
            }
            else{
              $('.why_us_gif').attr("src","assets/frontend_assets/main_dashboard/img/gif/Why_us_Potrait.gif");
              $('.why_us_img').attr("src","assets/frontend_assets/main_dashboard/img/Why-Us-Text_Portrait.jpg");
            }
          }
        }
  }

  // onLoggedout() {
  //   window.localStorage.clear();
  //   localStorage.removeItem('isLoggedin');
  //   this.router.navigate(['/dashboard']);
  //  }


  public loadScript() {        
    let isFound = false;
    
    if (!isFound) {
        let dynamicStyle = ["assets/frontend_assets/src/bootstrap.min.css","assets/frontend_assets/src/jquery.flipster.min.css", "assets/frontend_assets/main_dashboard/src/external.css"];

        //let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js", "assets/frontend_assets/src/jquery.flipster.min.js", "assets/frontend_assets/src/external.js"];

        let dynamicScript = ["assets/frontend_assets/js/all-in-one.js"];

        for (var i = 0; i < dynamicStyle.length; i++) {
            let node = document.createElement('LINK');
           node.setAttribute('href', dynamicStyle[i]);
           node.setAttribute('type', 'text/css');
           node.setAttribute('rel', "stylesheet");
          document.head.appendChild(node);
            //document.getElementsByTagName('head')[0].appendChild(node);
           // document.getElementsByTagName('head')[0].appendChild('<style href="dynamicStyle[i]" rel="stylesheet">');
        }

        for (var i = 0; i < dynamicScript.length; i++) {
          let node = document.createElement('script');
          node.setAttribute('src', dynamicScript[i]);
          node.setAttribute('type', 'text/javascript');
          node.setAttribute('async', 'false');
          node.setAttribute('charset', "utf-8");
          document.head.appendChild(node);
      }

    }
  }
}
