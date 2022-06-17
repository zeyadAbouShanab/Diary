import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diary } from 'src/app/diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnChanges {
  @Input() diary: Diary;

  @Output() save: EventEmitter<Diary> = new EventEmitter<Diary>();

  public diaryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.diaryForm = this.formBuilder.group({
      id: [undefined],
      title: ['', [Validators.required]],
      entry_text: '',
      date_of_entry: [undefined],
    });
  }

  public ngOnChanges(): void {
    if (this.diary) {
      this.diaryForm.patchValue(this.diary);
    }
  }

  public onSubmit(): void {
    if (!this.diaryForm.valid) {
      return;
    }
    this.save.emit(this.diaryForm.value);
  }

  public setIsInvalidClass(property: string): boolean {
    return (
      this.diaryForm.get(property)?.invalid &&
      (this.diaryForm.get(property)?.dirty ||
        this.diaryForm.get(property)?.touched)
    );
  }
}
