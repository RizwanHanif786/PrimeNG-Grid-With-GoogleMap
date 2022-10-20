export interface ISubmissions {
  id?: number;
  task: string;
  status: string;
  from: string;
  to: string;
  address: string;
  dueDate: string;
}

export enum SubmissionStatus {
  SUCCESS = 'Low Risk',
  DANGER = 'Incomplete',
  PRIMARY = 'Unassigned',
}
