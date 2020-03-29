import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { CommonWorksheetService } from '../../common-worksheet.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(forwardRef(() => CommonWorksheetService)) public ms: CommonWorksheetService) {
    console.log(ms);
  }

  ngOnInit() {
  }

}
