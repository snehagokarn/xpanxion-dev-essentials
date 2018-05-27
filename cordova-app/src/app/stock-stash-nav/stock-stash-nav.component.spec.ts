import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStashNavComponent } from './stock-stash-nav.component';

describe('StockStashNavComponent', () => {
  let component: StockStashNavComponent;
  let fixture: ComponentFixture<StockStashNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockStashNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStashNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
