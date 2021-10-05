import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedoresComponent } from './desenvolvedores.component';

describe('DesenvolvedoresComponent', () => {
  let component: DesenvolvedoresComponent;
  let fixture: ComponentFixture<DesenvolvedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenvolvedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
