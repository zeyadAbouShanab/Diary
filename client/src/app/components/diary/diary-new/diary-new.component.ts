import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary-new',
  templateUrl: './diary-new.component.html',
  styleUrls: ['./diary-new.component.css']
})
export class DiaryNewComponent {

  constructor(private diaryService: DiaryService, private router: Router) { }

  public onSave(diary: Diary) {
    this.diaryService.add(diary).subscribe((data) => {
      this.router.navigate(['/diaries']);
    });
  }
}
