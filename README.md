# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
![solution-1](https://user-images.githubusercontent.com/86962975/195090725-b20922c1-78a2-4758-9745-b36b0bfaff11.jpg)

![solution-2](https://user-images.githubusercontent.com/86962975/195090763-c5cb3da9-772f-4bec-b741-dd289691262d.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Angular](https://angular.io/) - Angular framework

### What I learned

With this project, I learned how to send data from a parent component to its child component, and also used an angular directive(ngFor). 

To see how you can add code snippets, see below:

```html
<div class="faq">
    <h3>{{ question.question }} 
      <span><img (click)="upDownButton($event)" src="../assets/images/icon-arrow-down.svg" alt=""></span> 
    </h3>
    <p>
      {{ question.answer }}
    </p>
  </div>
```

```typescript
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
```

### Continued development

To be written in future.

## Author

- Blog - [Visha Pal](https://vishalpal.hashnode.dev/)
- Frontend Mentor - [@vishy312](https://www.frontendmentor.io/profile/vishy312)
- Twitter - [@VishalPal45](https://twitter.com/VishalPal45)
