import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[
        AppMaterialModule,
        HttpClientTestingModule,
      ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
