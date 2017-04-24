import { Component } from '@angular/core';

@Component({
  selector: 'ctmtt-app',
  templateUrl: './chontumotatranh.component.html',
  styleUrls: ['./chontumotatranh.component.css']
})

export class CTMTTComponent {
    typeOfQuestions  = ' ';
    picture = ' ';
    results = [' ', ' ', ' ', ' '];
    result = ' ';
    score = 0;
    notify = " ";



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