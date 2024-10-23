import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDeRolesComponent } from './creacion-de-roles.component';

describe('CreacionDeRolesComponent', () => {
  let component: CreacionDeRolesComponent;
  let fixture: ComponentFixture<CreacionDeRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionDeRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionDeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
