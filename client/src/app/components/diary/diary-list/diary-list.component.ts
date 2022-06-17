import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css'],
})
export class DiaryListComponent implements OnInit {
  public diaries: Array<Diary> = [];
  public word: string = "There are many variations of passages of Lorem Ipsum available,";
  constructor(private diaryService: DiaryService) { }

  public ngOnInit(): void {
    this.getAll();
  }

  public async getAll(): Promise<void> {
    this.diaries = await this.diaryService.getAll();
  }
  

}
