import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('Trang chủ', () => {
  beforeEach(async(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule ]

    }).compileComponents();
  }));
  
  it('tôi vào trang Englishfun', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('EnglishFun');
  }));
  
});
