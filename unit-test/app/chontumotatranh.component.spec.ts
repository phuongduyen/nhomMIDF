import { TestBed, async } from '@angular/core/testing';

import { CTMTTComponent } from './chontumotatranh.component';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe('chọn từ mô tả tranh', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CTMTTComponent
      ],
    }).compileComponents();
  }));

  it('tôi đang ở trang "chọn từ mô tả tranh"', async(() => {
    const fixture = TestBed.createComponent(CTMTTComponent);
    const app = fixture.debugElement.componentInstance;  
    app.typeOfQuestions = "Chọn từ mô tả tranh";
    fixture.detectChanges();    
    
    expect(app.typeOfQuestions).toEqual('Chọn từ mô tả tranh');
  }));


it('màn hình hiện ra bức tranh "mì sợi" và 4 kết quả là "egg, fish, bread, noodle"', async(() => {
    const fixture = TestBed.createComponent(CTMTTComponent);
    const app = fixture.debugElement.componentInstance; 
    app.typeOfQuestions = 'Chọn từ mô tả tranh' 
    app.picture = 'http://i.imgur.com/S0eRDRV.jpg';
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    app.results = ['egg', 'fish', 'bread', 'noodle'];

    fixture.detectChanges();        

    expect(app.results).toEqual(['egg', 'fish', 'bread', 'noodle']);
  }));

it('tôi chọn kết quả là "bread"', async(() => {
    const fixture = TestBed.createComponent(CTMTTComponent);
    const app = fixture.debugElement.componentInstance;  
    app.typeOfQuestions = "Chọn từ mô tả tranh";
    app.picture = 'http://i.imgur.com/S0eRDRV.jpg';
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    app.results = ['egg', 'fish', 'bread', 'noodle'];
    (<HTMLInputElement> document.getElementById("n2")).checked = true;
    fixture.detectChanges();    

    expect((<HTMLInputElement> document.getElementById("n2")).checked).toEqual(true);    
  }));

  it('tôi nhận được kết quả thông báo là: "Đúng rồi" và điểm của tôi tăng lên 1', async(() => {
    const fixture = TestBed.createComponent(CTMTTComponent);
    const app = fixture.debugElement.componentInstance; 

    app.typeOfQuestions = "Chọn từ mô tả tranh";
    app.picture = 'http://i.imgur.com/S0eRDRV.jpg';
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
  }));

  

  it('tôi chọn đáp án: "egg"', async(() => {
    const fixture = TestBed.createComponent(CTMTTComponent);
    const app = fixture.debugElement.componentInstance;

    app.results = ['egg', 'fish', 'bread', 'noodle'];
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    
    fixture.detectChanges();
    (<HTMLInputElement> document.getElementById("n0")).checked = true;

    expect((<HTMLInputElement> document.getElementById("n0")).checked).toEqual(true);
  }));
  
  it('tôi nhận được kết quả thông báo là: "Sai mất rồi!" Đáp án là: "noodle"', async(() => {
    const fixture = TestBed.createComponent(CTMTTComponent);
    const app = fixture.debugElement.componentInstance;  

    app.results = ['egg', 'fish', 'bread', 'noodle'];
    (<HTMLInputElement> document.getElementById("n0")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n1")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n3")).style.display = "inline-block";
    (<HTMLInputElement> document.getElementById("n2")).checked = true;

    const choice = fixture.debugElement.query(By.css('#n0'));
    choice.triggerEventHandler('click',null);
    fixture.detectChanges();    

    expect(app.notify).toEqual('Sai mất rồi! Đáp án là: eats');
  }));


});
