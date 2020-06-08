import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRequestService } from '../../../shared/services/app-request.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  worksheet_url: any;
  subtopic_url: any;
  topic_video: any;
  topic_referencelist: any;
  next_worksheet: any;
  previous_worksheet: any;
  next: any = true;
  previous: any = true;
  data_current: any;

  constructor(private router: Router, public apiRequest: AppRequestService) { }
  renderVideo(url) {
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
    this.worksheet_url = this.router.url.split("/worksheet-layout/");
    this.loadWorksheet();
  }
  totalWorkSheet = [];
  loadWorksheet() {
    this.apiRequest.getRequest('api/student/worksheet/?q=' + this.worksheet_url[1]).then((res) => {
      //console.log(res)
      if (res['status'] == 'OK') {
        this.totalWorkSheet = res['worksheet_total'];
        this.topic_video = res['topic_detail'][0]['subtopic_video'];
        this.topic_referencelist = res['topic_detail'][0]['subtopic_referencelist'];
        this.worksheet_url = this.router.url.split("/worksheet-layout/");
        let currentUrlData = this.totalWorkSheet.filter(w => w.worksheet_link == this.worksheet_url[1]);
        let indexOf = this.totalWorkSheet.indexOf(currentUrlData[0]);
        if (!this.totalWorkSheet[indexOf + 1])
          this.next = false;
        else
          this.next = true;

        if (!this.totalWorkSheet[indexOf - 1])
          this.previous = false;
        else
          this.previous = true;
      }

      //   this.subtopic_url = 'subtopic/' + res['body'][0]['topic_id'] + '/' + res['body'][0]['subtopic_id'];
      //   this.topic_video = res['topic_detail'][0]['subtopic_video'];
      //   this.topic_referencelist = res['topic_detail'][0]['subtopic_referencelist'];

      //   let i = 0
      //   res['worksheet_total'].forEach(
      //     item => {
      //       //console.log('Saved Database Link - ' + item['worksheet_link']);
      //       //console.log('Current Worksheet - ' + this.worksheet_url[1]);
      //       if (item['worksheet_link'] === this.worksheet_url[1]) {
      //         this.data_current = i;
      //       }
      //       i++;
      //     }
      //   );

      //   //console.log(this.data_current);
      //   if (this.data_current != 0) {
      //     this.previous_worksheet = 'worksheet-layout/' + res['worksheet_total'][this.data_current - 1]['worksheet_link'];
      //     this.previous = true;
      //   }

      //   if (this.data_current != (res['worksheet_total'].length - 1)) {
      //     this.next_worksheet = 'worksheet-layout/' + res['worksheet_total'][this.data_current + 1]['worksheet_link'];
      //     this.next = true;
      //   }
      //   //console.log(this.data_current);
      // }
      // else {
      //   this.subtopic_url = '';
      //   this.topic_video = '#';
      //   this.topic_referencelist = '#';
      // }
    })
      .catch((err) => {

      });
  }
  nextWorkShhet(index) {
    this.worksheet_url = this.router.url.split("/worksheet-layout/");
    let currentUrlData = this.totalWorkSheet.filter(w => w.worksheet_link == this.worksheet_url[1]);
    let indexOf = this.totalWorkSheet.indexOf(currentUrlData[0]);
    if (index == 1) {
      if (this.totalWorkSheet[indexOf + 1])
        this.router.navigate(['worksheet-layout/' + this.totalWorkSheet[indexOf + 1].worksheet_link])
    } else {
      if (this.totalWorkSheet[indexOf - 1])
        this.router.navigate(['worksheet-layout/' + this.totalWorkSheet[indexOf - 1].worksheet_link])
    }
    this.loadWorksheet();
    // ../{{next_worksheet}}
  }

}
