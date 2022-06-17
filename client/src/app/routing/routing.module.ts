import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { DiaryEditComponent } from '../components/diary/diary-edit/diary-edit.component';
import { DiaryListComponent } from '../components/diary/diary-list/diary-list.component';
import { DiaryNewComponent } from '../components/diary/diary-new/diary-new.component';
import { IndexComponent } from '../components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'diaries',
    component: DiaryListComponent,
  },
  {
    path: 'diaries/new',
    component: DiaryNewComponent,
  },
  {
    path: 'diaries/:id/edit',
    component: DiaryEditComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
