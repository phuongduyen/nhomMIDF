import { Component } from '@angular/core';

@Component({
    selector: 'ctct-app',
    templateUrl: './chontuconthieu.component.html',
    styleUrls: ['./chontuconthieu.component.css']
})

export class CTCTComponent {
    title = 'Chọn từ còn thiếu';
    questions = ' ';
    notify = '';
    score = 0;
    results = ['0', '0', '0', '0'];
    result = ' ';
    rightAnswer(): void {
        this.notify = "Đúng rồi!";
        document.getElementById('notify').style.color = "green";
        document.getElementById('notify').style.fontSize = 'xx-large'; 

        this.score++;
    }

    wrongAnswer(): void {
        this.notify = 'Sai mất rồi! Đáp án là: eats';
        document.getElementById('notify').style.color = 'red';
        document.getElementById('notify').style.fontSize = 'xx-large'; 
    }

    onChoose(i: number): void {
        if (this.results[i] === this.result) {
            this.rightAnswer();
            // this.score ++;
        }
        else {
            this.wrongAnswer();
        }
    }
}