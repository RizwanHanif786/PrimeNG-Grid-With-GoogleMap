import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubmissionStatus } from '../models/submissions.model';

@Injectable()
export class SubmissionService {

    constructor(private http: HttpClient) { }

    /**
     * sends http request to fetch data.
     * @returns 
     */
    getSubmissionsData() {
        return this.http.get<any>('assets/submissions.json')
            .toPromise()
            .then((res:any) => <any[]>res.data)
            .then((data:any) => { return data; });
    }

    /**
     * return color when required status is matched.
     * @param status string.
     * @returns 
     */
    getStatusColor(status: string) {
        console.log('status: ', status);
        let color = ''
        switch (status) {
            case SubmissionStatus.SUCCESS:
                color = 'button-success'
                break
            case SubmissionStatus.DANGER:
                color = 'button-danger'
                break
            case SubmissionStatus.PRIMARY:
                color = 'button-primary'
                break
            default:
                break;
        }
        return color

    }
}