import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureFeatureLibraryComponent } from './secure-feature-library.component';

describe('SecureFeatureLibraryComponent', () => {
  let component: SecureFeatureLibraryComponent;
  let fixture: ComponentFixture<SecureFeatureLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureFeatureLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureFeatureLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
