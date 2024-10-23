import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtournamentComponent } from './newtournament.component';

describe('NewtournamentComponent', () => {
  let component: NewtournamentComponent;
  let fixture: ComponentFixture<NewtournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewtournamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
