import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRequestService } from '../../shared/services/app-request.service';

@Component({
  selector: 'app-subtopic',
  templateUrl: './subtopic.component.html',
  styleUrls: ['./subtopic.component.scss']
})
export class SubtopicComponent implements OnInit {
  loadAPI: Promise<any>;
  id: any;
  subtopic_id: any;
  subtopic_details: any;
  worksheet_list: any;
  worksheet_ctr: any;
  worksheet_length: any;
  worksheet_width: number;
  calculatedWidth = 0;
  translateX: any;
  Totalwidth: any;
  FixedWidth: any;
  calculationCheck: any;
  profile_picture_path: any;
  subtopic_videos: any;
  subtopic_reference: any;
  nxtClickCount: any;
  localStorageGrade: any;

  constructor(private renderer: Renderer2, public apiRequest: AppRequestService, private route: ActivatedRoute, private router: Router) {
    this.renderer.setStyle(document.body, 'background', 'url("assets/frontend_assets/img/bg2.jpg") no-repeat center center fixed, #376ea4');
    this.route.params.subscribe(params => this.id = params.id);
    this.route.params.subscribe(params => this.subtopic_id = params.subtopic_id);
    this.worksheet_width = 100;
    this.calculationCheck = false;

    this.subtopic_videos = true;
    this.subtopic_reference = true;

    this.nxtClickCount = 5;

  }
  renderVideo(data) {
    if (data) {
      var url = data[0].subtopic_video;
      $("#btnVideo").trigger("click");
      let $video: any = $('#divVideo')
      var x = document.createElement("VIDEO");
      x.setAttribute("src", url);
      x.setAttribute("autoplay","true")
      x.setAttribute("controlsList", "nodownload");
      x.setAttribute("width", "100%");
      x.setAttribute("height", "100%");
      x.setAttribute("id", "dynamicVideo");
      x.setAttribute("controls", "controls");
      $video.html(x);
      $("#openVideo").click(function () {
        let vid: any = document.getElementById("dynamicVideo");
        vid.pause();
      });
    }
  }

  renderVideoURL(url) {
    if (url) {
      $("#btnVideo").trigger("click");
      let $video: any = $('#divVideo')
      var x = document.createElement("VIDEO");
      x.setAttribute("src", url);
      x.setAttribute("autoplay","true")
      x.setAttribute("controlsList", "nodownload");
      x.setAttribute("width", "100%");
      x.setAttribute("height", "100%");
      x.setAttribute("id", "dynamicVideo");
      x.setAttribute("controls", "controls");
      $video.html(x);
      $("#openVideo").click(function () {
        let vid: any = document.getElementById("dynamicVideo");
        vid.pause();
      });
    }
  }
  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });

    let profile_pic = JSON.parse(localStorage.getItem('user'));
    this.profile_picture_path = profile_pic[0].photo_url;
    if (localStorage.getItem("gradeSelection") != "") {
      this.localStorageGrade = "dashboard/" + localStorage.getItem("gradeSelection");
    }
    else {
      this.localStorageGrade = "dashboard/1";
    }

    $(document).ready(function () {
      // $('.dropdown_toggle').click(function(){
      //    $(".dropdown").slideToggle("display-none");
      // })
      $('.dropdown_toggle').click(function () {
        $('.dropdown').slideToggle('.dropdown');
        $('.dropdown_toggle img.arrow').toggleClass('up');
      });
    })

    let user_name = JSON.parse(localStorage.getItem('user'));

    this.apiRequest.getRequest('api/student/result/' + user_name[0].user_name).then((res) => {
      if (res['status'] == 'OK') {

      } else {

      }
    })
      .catch((err) => {

      });


    this.apiRequest.getRequest('api/student/worksheet/' + this.id + '/' + this.subtopic_id).then((res) => {
      if (res['status'] == 'OK') {
        this.subtopic_details = res['subtopic_data'];
        this.worksheet_list = res['body'];

        //console.log(this.subtopic_details)


        if (res['subtopic_data'][0]['subtopic_video'] == '#') {
          this.subtopic_videos = false;
        }

        if (res['subtopic_data'][0]['subtopic_referencelist'] == '#') {
          this.subtopic_reference = false;
        }



        this.worksheet_length = (this.worksheet_list).length;
        if (this.worksheet_length > 5) {
          this.worksheet_ctr = true;
        }


      } else {

      }
    })
      .catch((err) => {

      });

    if (this.calculatedWidth == 0) {
      $('img.prev').css("pointer-events", "none");
    }
    else {
      $('img.prev').css("pointer-events", "unset");
    }
  }
  fetchData(data) {
    let c = "worksheet-layout/" + data.worksheet_link;
    console.log(c)
    this.router.navigate([c])
  }
  public ButtonToggle(type: string) {
    var screenWidth, constNumber;
    screenWidth = $(document).width();
    constNumber = 10;
    if (screenWidth > 1900) {
      constNumber = 15;
    }
    else if (screenWidth < 360) {
      constNumber = 6;
    }
    this.worksheet_width = $('.thumbnail').outerWidth() + constNumber;
    if (this.calculationCheck == false) {
      this.Totalwidth = this.worksheet_width * this.worksheet_length;
    }
    this.FixedWidth = $('.worksheet').outerWidth();

    if (type == 'next') {
      this.nxtClickCount++;
      this.calculationCheck = true;
      this.calculatedWidth = this.calculatedWidth - this.worksheet_width;
      this.Totalwidth = this.Totalwidth - this.worksheet_width;


      this.translateX = "translateX(" + this.calculatedWidth + "px)";
      $('.worksheet_list').css('transform', this.translateX);
    }
    else {
      this.nxtClickCount--;
      this.calculatedWidth = this.calculatedWidth + this.worksheet_width;
      this.Totalwidth = this.Totalwidth + this.worksheet_width;
      this.calculationCheck = true;
      //console.log('Prev -' + this.Totalwidth + '/' + this.calculatedWidth + '/' + this.FixedWidth);
      this.translateX = "translateX(" + this.calculatedWidth + "px)";
      $('.worksheet_list').css('transform', this.translateX);
    }
    //console.log(this.nxtClickCount);
    if (this.nxtClickCount == this.worksheet_length) {
      $('img.next').css({ 'pointer-events': 'none', 'opacity': '.3' });
    }
    else {
      $('img.next').css({ 'pointer-events': 'unset', 'opacity': '1' });
    }

    if (this.calculatedWidth == 0) {
      $('img.prev').css({ 'pointer-events': 'none', 'opacity': '.3' });
    }
    else {
      $('img.prev').css({ 'pointer-events': 'unset', 'opacity': '1' });
    }
  }

  public loadScript() {
    let isFound = false;

    if (!isFound) {
      let dynamicStyle = ["assets/frontend_assets/src/bootstrap.min.css", "assets/frontend_assets/src/external.css"];

      // let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js", "assets/frontend_assets/js/external.js", "assets/frontend_assets/js/jquery.flipster.min.js",];

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
