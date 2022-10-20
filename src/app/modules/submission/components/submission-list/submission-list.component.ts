import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IColumnDefs } from '../../models/columnDefs.model';
import { ISubmissions } from '../../models/submissions.model';
import { SubmissionService } from '../../service/submission.service';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.scss'],
})
export class SubmissionListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  @Input() columnDefs: IColumnDefs[] = [];
  @Input() rowData: ISubmissions[] = [];

  public selectedRow: any;

  constructor(public submissionService:SubmissionService) {}

  ngOnInit(): void {}

  
}
