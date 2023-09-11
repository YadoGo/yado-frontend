import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';
import { ModulesModule } from '../../../../modules.module';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageComponent],
      imports: [ModulesModule],
    });
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
