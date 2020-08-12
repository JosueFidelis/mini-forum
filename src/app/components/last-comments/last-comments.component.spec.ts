import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCommentsComponent } from './last-comments.component';

describe('LastCommentsComponent', () => {
  let component: LastCommentsComponent;
  let fixture: ComponentFixture<LastCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
