import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIconsComponent } from './delete-icons.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteIconsComponent', () => {
  let component: DeleteIconsComponent;
  let fixture: ComponentFixture<DeleteIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIconsComponent ],
      imports:[
        AppMaterialModule,
        HttpClientTestingModule,
      ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
