import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameCompetitionsComponent } from './edit-game-competitions.component';

describe('EditGameCompetitionsComponent', () => {
  let component: EditGameCompetitionsComponent;
  let fixture: ComponentFixture<EditGameCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGameCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGameCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
