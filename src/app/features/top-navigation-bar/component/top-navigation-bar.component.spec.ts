import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationBarComponent } from '../component/top-navigation-bar.component';

describe('TopNavigationBarComponent', () => {
  let component: TopNavigationBarComponent;
  let fixture: ComponentFixture<TopNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNavigationBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
