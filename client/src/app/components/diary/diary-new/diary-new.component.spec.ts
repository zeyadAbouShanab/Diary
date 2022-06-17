import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNewComponent } from './diary-new.component';

describe('DiaryNewComponent', () => {
  let component: DiaryNewComponent;
  let fixture: ComponentFixture<DiaryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
