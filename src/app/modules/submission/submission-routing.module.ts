import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './pages/submission/submission.component';
const routes: Routes = [
    {
        path: '',
        component: SubmissionComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SubmissionRoutingModule { }