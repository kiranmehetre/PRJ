import { Component, OnInit, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';  
import { AppRequestService} from '../../shared/services/app-request.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  id:any;
  loadAPI: Promise<any>;
  topic_list:any;
  subtopic_details:any;
  topic_dropdown:any;
  profile_picture_path:any;
  subTopicNotFound:any;
  localStorageGrade:any;

  constructor(private renderer: Renderer2, public apiRequest : AppRequestService, private route: ActivatedRoute, private router: Router) { 
    this.renderer.setStyle(document.body, 'background', 'url("assets/frontend_assets/img/bg.jpg") no-repeat center center fixed,#3fafdf');   
    this.route.params.subscribe( params => this.id = params.id );
    this.subTopicNotFound = false;
  }

  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
      });      
      if(localStorage.getItem("gradeSelection") != ""){
        this.localStorageGrade = "dashboard/"+localStorage.getItem("gradeSelection");
      }
      else{
        this.localStorageGrade = "dashboard/1";
      }
      let profile_pic = JSON.parse(localStorage.getItem('user'));
      this.profile_picture_path = profile_pic[0].photo_url;
        $('.dropdown_toggle').click(function () {
          $('.dropdown').slideToggle('.dropdown');
          $('.dropdown_toggle img.arrow').toggleClass('up');
          $('.topic_dropdown').slideUp('.dropdown');
        });
     
        $('.toggle_topic').click(function () {
            $('.topic_dropdown').slideToggle('.dropdown');
            $('.toggle_topic img.arrow').toggleClass('up');
            $('.dropdown').slideUp('.dropdown');
        });
         
      this.apiRequest.getRequest('api/student/subtopic/' + this.id).then( (res) => {            
        if(res['status'] == 'OK'){           
            this.topic_list = res['topic_data'];    
            this.subtopic_details = res['body'];  
        }else {
            this.subTopicNotFound = true;
        }
    })
        .catch( (err) => {
          $('.loader').hide();
         
    });

    this.apiRequest.getRequest('api/student/topic/all/1').then( (res) => {            
      if(res['status'] == 'OK'){  
          $('.loader').hide();    
          this.topic_dropdown = res['body'];   
               
      }else {
       
      }
  })
      .catch( (err) => {
        $('.loader').hide();
       
  });
  }

  public loadScript() {        
    let isFound = false;
    
    if (!isFound) {
        let dynamicStyle = ["assets/frontend_assets/src/bootstrap.min.css", "assets/frontend_assets/src/external.css"];

        //let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js", "assets/frontend_assets/js/jquery.flipster.min.js",  "assets/frontend_assets/js/smooth-scrollbar.js", "assets/frontend_assets/js/external.js", "assets/frontend_assets/js/bootstrap.min.js"];

        let dynamicScript = ["assets/frontend_assets/js/all-in-one.js"];
        

        for (var i = 0; i < dynamicStyle.length; i++) {
            let node = document.createElement('LINK');
           node.setAttribute('href', dynamicStyle[i]);
           node.setAttribute('type', 'text/css');
           node.setAttribute('rel', "stylesheet");
           document.head.appendChild(node);          
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
