import { Component, Input} from '@angular/core';

@Component({
    selector: 'my-question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.css']
})

export class QuestionComponent{

    @Input() question: any;

    state = "up";

    upDownButton(event: any){
        let ques = event.target.parentElement.parentElement;
        let ans = ques.nextElementSibling;

        if(this.state == "up"){
            ques.style.color = "hsl(238, 29%, 16%)";
            ques.style.fontWeight = "700";
    
            ans.style.display = "block";
            this.state = "down";

            event.target.classList.add('rotate-arrow')
        }else{
            ques.style.color = "hsl(237, 12%, 33%)";
            ques.style.fontWeight = "400";
    
            ans.style.display = "none";
            this.state = "up";

            event.target.classList.remove('rotate-arrow')
        }
    }
}