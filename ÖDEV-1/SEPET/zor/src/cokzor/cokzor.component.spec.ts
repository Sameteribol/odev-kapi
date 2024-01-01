import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokzorComponent } from './cokzor.component';

describe('CokzorComponent', () => {
  let component: CokzorComponent;
  let fixture: ComponentFixture<CokzorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CokzorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CokzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
