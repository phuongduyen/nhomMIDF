import { TestBed, async } from '@angular/core/testing';

import { CTHNComponent } from './chontuhopnghia.component';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe('chọn từ hợp nghĩa', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CTHNComponent
      ],
    }).compileComponents();
  }));

  // it('tôi đang ở trang trắc nghiệm thông minh', async(() => {
  //   const fixture = TestBed.createComponent(CTHNComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toBeTruthy('Trắc nghiệm thông minh');
  // }));


});
