import { TestBed, async } from '@angular/core/testing';

import { CTCTComponent } from './chontuconthieu.component';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('Chọn từ còn thiếu', () => {
  beforeEach(async(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [
        CTCTComponent
      ],
      imports: [ RouterTestingModule ]

    }).compileComponents();
  }));
  
  it('tôi đang ở trang trắc nghiệm thông minh', async(() => {
    const fixture = TestBed.createComponent(CTCTComponent);
    const app = fixture.debugElement.componentInstance;  
    expect(app.title).toEqual('Chọn từ còn thiếu');
  }));

  it('hiển thị câu hỏi là : "She __ rice and meat" và đáp án lần lượt là : drink, drinks, eat, eats', async(() => {
    const fixture = TestBed.createComponent(CTCTComponent);
    const app = fixture.debugElement.componentInstance;

    app.questions = "She __ rice and meat";
    app.results = ['drink', 'drinks', 'eat', 'eats'];
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    fixture.detectChanges();    
    
    
    expect(app.questions).toEqual('She __ rice and meat');
    expect(app.results).toEqual(['drink', 'drinks', 'eat', 'eats']);
  }));

  it('tôi chọn đáp án: "eats"', async(() => {
    const fixture = TestBed.createComponent(CTCTComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.questions = "She __ rice and meat";
    app.results = ['drink', 'drinks', 'eat', 'eats'];
    app.result = "eats";
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    
    fixture.detectChanges();
    (<HTMLInputElement> document.getElementById("n3")).checked = true;
    
    expect((<HTMLInputElement> document.getElementById("n3")).checked).toEqual(true);
  }));

  it('tôi nhận được kết quả thông báo là: "Đúng rồi" và điểm của tôi tăng lên 1', async(() => {
    const fixture = TestBed.createComponent(CTCTComponent);
    const app = fixture.debugElement.componentInstance; 

    app.questions = "She __ rice and meat";
    app.results = ['drink', 'drinks', 'eat', 'eats'];
    app.result = "eats";
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).checked = true;

    const choice = fixture.debugElement.query(By.css('#n3'));
    choice.triggerEventHandler('click',null);

    fixture.detectChanges();
    

    expect(app.notify).toEqual('Đúng rồi!');
    expect(app.score).toEqual(1);
  }))

  

  it('tôi chọn đáp án: "eat"', async(() => {
    const fixture = TestBed.createComponent(CTCTComponent);
    const app = fixture.debugElement.componentInstance;

    app.questions = "She __ rice and meat";
    app.results = ['drink', 'drinks', 'eat', 'eats'];
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    
    fixture.detectChanges();
    (<HTMLInputElement> document.getElementById("n2")).checked = true;

    expect((<HTMLInputElement> document.getElementById("n2")).checked).toEqual(true);
  }));
  
  it('tôi nhận được kết quả thông báo là: "Sai rồi!" Đáp án là: "eats"', async(() => {
    const fixture = TestBed.createComponent(CTCTComponent);
    const app = fixture.debugElement.componentInstance;  


    app.questions = "She __ rice and meat";
    app.results = ['drink', 'drinks', 'eat', 'eats'];
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).checked = true;

    const choice = fixture.debugElement.query(By.css('#n3'));
    choice.triggerEventHandler('click',null);
    fixture.detectChanges();    

    expect(app.notify).toEqual('Sai mất rồi! Đáp án là: eats');
  }));

});
