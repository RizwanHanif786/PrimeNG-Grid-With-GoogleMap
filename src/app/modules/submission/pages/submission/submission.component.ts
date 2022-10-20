import { Component, OnInit, ViewChild } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { IColumnDefs } from '../../models/columnDefs.model';
import { ISubmissions } from '../../models/submissions.model';
import { SubmissionService } from '../../service/submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss'],
})
export class SubmissionComponent implements OnInit {
  @ViewChild('list') list: any | undefined;

  public cities: any[] = [];
  public selectedCity: any;
  public selectedState: string = 'list';
  public currentDate = new Date();
  public submissionData: ISubmissions[] = [];
  public columnDefs: IColumnDefs[] = [];
  public stateOptions: { label: string; value: string }[] = []

  constructor(private submissionService: SubmissionService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.stateOptions = [{ label: 'Map', value: 'map' }, { label: 'List', value: 'list' }];
  }

  ngOnInit(): void {
    this.getRowsData();
    this.setColumnDefs();
  }

  /**
   * fetch rows data to display in grid.
   */
  getRowsData() {
    this.submissionService
      .getSubmissionsData()
      .then((data: any) => (this.submissionData = data));
  }

  /**
   * sets column definition.
   */
  setColumnDefs() {
    this.columnDefs = [
      {
        headerName: 'Task',
        field: 'task',
        type: 'text',
      },
      {
        headerName: 'Status',
        field: 'status',
        type: 'text',
      },

      {
        headerName: 'From',
        field: 'from',
        type: 'text',
      },
      {
        headerName: 'To',
        field: 'to',
        type: 'text',
      },
      {
        headerName: 'Customer Address',
        field: 'address',
        type: 'text',
      },
      {
        headerName: 'Due Date',
        field: 'dueDate',
        type: 'text',
      },
    ];
  }

  /**
   * exports gird data in excel file.
   */
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.submissionData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  /**
   * globally filters item in grid.
   * @param $event 
   * @param stringVal 
   */
  applyFilterGlobal($event: any, stringVal: string) {
    this.list!.dt!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
}
