import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermainpagerComponent } from './headermainpager.component';

describe('HeadermainpagerComponent', () => {
  let component: HeadermainpagerComponent;
  let fixture: ComponentFixture<HeadermainpagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadermainpagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadermainpagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
