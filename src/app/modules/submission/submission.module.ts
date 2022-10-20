import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionComponent } from './pages/submission/submission.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import { SubmissionMapComponent } from './components/submission-map/submission-map.component';
import { SubmissionRoutingModule } from './submission-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import { MessageService } from 'primeng/api';
import { SubmissionService } from './service/submission.service';
import {GMapModule} from 'primeng/gmap';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [
    SubmissionComponent,
    SubmissionListComponent,
    SubmissionMapComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubmissionRoutingModule,
    MenubarModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    ToastModule,
    CalendarModule,
    MultiSelectModule,
    FileUploadModule,
    ToolbarModule,
    GMapModule,
    DialogModule,
    CheckboxModule,
    InputTextModule, 
    SelectButtonModule   
  ],
  providers:[MessageService, SubmissionService ]
})
export class SubmissionModule { }
