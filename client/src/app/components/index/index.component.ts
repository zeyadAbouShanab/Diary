import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public diaries: Array<Diary> = [];
  public dates: any;
  constructor(private diaryService: DiaryService) { }

  public ngOnInit(): void {
    this.getAll();
  }

  public async getAll(): Promise<void> {
    this.diaries = await this.diaryService.getAll();
    this.dates = this.sortDates();
  }
  public sortDates(): any {
    var dates = {
      minDate: this.diaries[0].date_of_entry,
      maxDate: this.diaries[0].date_of_entry
    }
    for (let diary of this.diaries) {
      if (diary.date_of_entry > dates.maxDate) {
        dates.maxDate = diary.date_of_entry;
      }
      else if (diary.date_of_entry < dates.minDate) {
        dates.minDate = diary.date_of_entry;
      }
    }
    return dates;

  }
}
