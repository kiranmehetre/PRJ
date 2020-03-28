import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';  
import {ActivatedRoute, Router} from '@angular/router';
import { AppRequestService} from '../../shared/services/app-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loadAPI: Promise<any>;
  topic_list:any; 
  grade:any;
  profile_picture_path:any;

  constructor(private renderer: Renderer2,  public apiRequest : AppRequestService, private route: ActivatedRoute, private router: Router) {
    this.renderer.setStyle(document.body, 'background', 'url("assets/frontend_assets/img/topic-body-background.jpg")');
    this.route.params.subscribe( params => this.grade = params.grade );
    
   }

  ngOnInit() {

    this.loadScript(); 
    // if (typeof $ != 'undefined') {
    //   // jQuery is loaded => print the version
    //   alert($.fn.jquery);
    // }else{
    //     // jQuery was not loaded
    //     console.error("No jquery");
    // }

        let profile_pic = JSON.parse(localStorage.getItem('user'));
        this.profile_picture_path = profile_pic[0].photo_url;
        var Grades = profile_pic[0].class.split(',',3);
        if(Grades.indexOf(this.grade) < 0 ){ 
         // window.location.href = "/home";
         this.router.navigate(["/home"]);
        }
        
 
        $(document).ready(function(){
          $('.dropdown_toggle').click(function(){
             $(".dropdown").slideToggle(".dropdown");
             $('img.arrow').toggleClass('up');
          });
            
        })

      localStorage.setItem('gradeSelection',this.grade);
      this.apiRequest.getRequest('api/student/topic/all/' + this.grade).then( (res) => {            
          if(res['status'] == 'OK'){     
            $('.loader').hide();  
            setTimeout(() => {
              this.topic_list = res['body'];
            this.loadScript(); 

            }, 2000);
                           
          }else {
          
          }
      })
          .catch( (err) => {
            $('.loader').hide();
          
      });    

  } 

  navigateToTopic(topic)
  {
   let url =  topic.subtopic == 'yes' ? 'topic/' + topic.topic_id : 'subtopic/' + topic.topic_id + '/0';
   this.router.navigate([url]);
  }
  ngAfterViewInit(){
    this.loadAPI = new Promise((resolve) => {
      setTimeout(() => {
     
        
      }, 3000);
      resolve(true);
    });
  }

  public loadScript() {        
    let isFound = false;
    
    if (!isFound) {
        let t = new Date().getTime();

        // let bootstrapCss = "assets/frontend_assets/src/bootstrap.min.css?" +t;
        // let flipsterCss = "assets/frontend_assets/src/jquery.flipster.min.css?" +t;
        // let gijgoCss = "assets/frontend_assets/src/gijgo.min.css?" +t;
        // let externalCss = "assets/frontend_assets/src/external.css?" +t;
        // let dynamicStyle = [bootstrapCss, flipsterCss, gijgoCss, externalCss];
        let dynamicStyle = ["assets/frontend_assets/src/bootstrap.min.css", "assets/frontend_assets/src/jquery.flipster.min.css", "assets/frontend_assets/src/gijgo.min.css", "assets/frontend_assets/src/external.css"];

       
        let AllInOne = "assets/frontend_assets/js/all-in-one.js?" + t;
        let dynamicScript = [AllInOne];
      //  let dynamicScript = ["assets/frontend_assets/js/all-in-one.js"];

        
        for (var i = 0; i < dynamicStyle.length; i++) {
            let node = document.createElement('LINK');
           node.setAttribute('href', dynamicStyle[i]);
           node.setAttribute('type', 'text/css');
           node.setAttribute('rel', "stylesheet");
           document.head.appendChild(node);          
        }


      //  let dynamicScript = ["assets/frontend_assets/main_dashboard/src/jquery.min.js","assets/frontend_assets/js/gijgo.min.js", "assets/frontend_assets/js/jquery.flipster.min.js", "assets/frontend_assets/js/external.js"];

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
