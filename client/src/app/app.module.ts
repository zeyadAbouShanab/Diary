import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './components/app/app.component';
import { IndexComponent } from './components/index/index.component';
import { DiaryListComponent } from './components/diary/diary-list/diary-list.component';
import { DiaryNewComponent } from './components/diary/diary-new/diary-new.component';
import { DiaryEditComponent } from './components/diary/diary-edit/diary-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DiaryFormComponent } from './components/diary/diary-form/diary-form.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    DiaryListComponent,
    DiaryNewComponent,
    DiaryEditComponent,
    DiaryFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
