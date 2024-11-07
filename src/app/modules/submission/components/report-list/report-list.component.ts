import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IColumnDefs } from '../../models/columnDefs.model';
import { ISubmissions } from '../../models/submissions.model';
import { SubmissionService } from '../../service/submission.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class SubmissionListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  @Input() columnDefs: IColumnDefs[] = [];
  @Input() rowData: ISubmissions[] = [];

  public selectedRow: any;
  reportList: { id: number; title: string; date: string; status: string; description: string; }[] | undefined;

  constructor(public submissionService:SubmissionService) {}

  ngOnInit(): void {
    this.getReportList();
  }
  
  getReportList() {
    this.reportList = [
      {
        id: 1,
        title: 'Monthly Sales Report',
        date: '2024-11-06',
        status: 'Completed',
        description: 'Summary of monthly sales activities and revenue generated.'
      },
      {
        id: 2,
        title: 'Customer Feedback Report',
        date: '2024-10-25',
        status: 'Pending',
        description: 'Analysis of customer feedback and satisfaction ratings.'
      },
      {
        id: 3,
        title: 'Annual Performance Report',
        date: '2024-09-30',
        status: 'Completed',
        description: 'Evaluation of yearly performance metrics and growth indicators.'
      }
    ];
  }
  console.log( this.reportList, ' this.reportList');
  
}
