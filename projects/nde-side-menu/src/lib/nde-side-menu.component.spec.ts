import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeSideMenuComponent } from './nde-side-menu.component';
import { provideRouter } from '@angular/router';

describe('NdeSideMenuComponent', () => {
  let component: NdeSideMenuComponent;
  let fixture: ComponentFixture<NdeSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeSideMenuComponent],
      providers:[ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should call onSignIn when logout button is clicked', () => {

    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('Should call onSignOut when logout button is clicked', () => {

    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();
  });

});
