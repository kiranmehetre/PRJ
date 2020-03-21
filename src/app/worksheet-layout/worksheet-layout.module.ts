import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksheetLayoutRoutingModule } from '././worksheet-layout-routing.module';
import { WorksheetLayoutComponent } from 'src/app/worksheet-layout/worksheet-layout.component';
import { HeaderComponent } from 'src/app/worksheet-layout/component/header/header.component';
import { FooterComponent } from 'src/app/worksheet-layout/component/footer/footer.component';
import { CommonWorksheetService } from './common-worksheet.service';

@NgModule({
  declarations: [WorksheetLayoutComponent, HeaderComponent, FooterComponent],
  imports: [ 
    CommonModule,
    WorksheetLayoutRoutingModule,
  ],
  providers: [
    CommonWorksheetService
  ]
})
export class WorksheetLayoutModule { }
