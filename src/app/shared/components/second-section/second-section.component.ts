import { AfterViewInit, Component, Input } from '@angular/core';
import { Project } from '../../../core/models/interfaces/project.interface';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './second-section.component.html',
})
export class SecondSectionComponent implements AfterViewInit{

  projects : Project []= [
    {
      title : 'Training website',
      description:'At the ending of 2023, I developed a training website web app using Angular for the front end and pure PHP for the backend. This project aimed to provide an interactive platform for users to access various training modules and track their progress. The Angular framework allowed me to create a dynamic and responsive user interface, while the PHP backend handled user authentication, data storage, and retrieval. Through this project, I gained valuable experience in full-stack development, particularly in integrating a modern front-end framework with a traditional server-side language.',
      image: 'training-app.jpeg',
      usedTechnology : [
        {name: 'angular', image: 'angular.png'},
        {name: 'php', image: 'php.png'},
      ]
    },{
      title : 'Film library',
      description:"At the end of May 2024, I completed a film library website project using Symfony for both the backend and frontend. This project aimed to provide users with a comprehensive database of films, including details such as synopses, cast, and crew information. This project not only strengthened my skills in full-stack development but also deepened my understanding of the Symfony framework's capabilities in creating cohesive and scalable web applications.",
      image: 'film-library-app.jpeg',
      usedTechnology : [
        {name: 'symfony', image: 'symfony-white.png'},
        {name: 'tailwind', image: 'Tailwind CSS.png'},
      ]
    },
    {
      title: 'Pomodoro timer',
      description: 'At the beginning of 2022, I created a Pomodoro timer web app using HTML, CSS, and JavaScript. This project was designed to help users manage their time more effectively by following the Pomodoro Technique, which breaks work into intervals, typically 25 minutes in length, separated by short breaks. Through this project, I enhanced my front-end development skills and learned how to implement dynamic functionalities with JavaScript.',
      image: 'pomodoro-app.jpg',
      usedTechnology : [
        {name: 'HTML', image: 'html.png'},
        {name: 'CSS', image: 'css.png'},
        {name: 'JavaScript', image: 'js.png'}
      ]
    },
  ]

  @Input() tl!: GSAPTimeline;

  ngAfterViewInit(): void {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);

    this.tl.from('.ProjectTitle', {
      scrollTrigger: {
        trigger: '.ProjectTitle',
        start: '-100% center',
        end: '110% center',
        scrub: 1,
        //markers: true
      },
      x: screenWidth>1600 ? 1200 : 900,
      duration: 2,
      ease: 'power1.in'
    });

    this.tl.from(('#project-1'), {
      scrollTrigger: {
        trigger: ('#project-1'),
        start: 'top center',
        end: '40% center',
        scrub: 1,
        //markers: true
      },
      x: screenWidth>1600 ? 1900 : 1300,
      skewY: -10,
      skewX : 0,
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: 'power1.in'
    });
    this.tl.from(('#project-2'), {
      scrollTrigger: {
        trigger: ('#project-2'),
        start: '-20% center',
        end: '40% center',
        scrub: 1,
        //markers: true
      },
      x: screenWidth>1600 ? -1900 : -1300,
      skewY: -10,
      skewX : 0,
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: 'power1.in'
    });
    this.tl.from(('#project-3'), {
      scrollTrigger: {
        trigger: ('#project-3'),
        start: '-50% center',
        end: '50% center',
        scrub: 1,
        //markers: true
      },
      x: screenWidth>1600 ? 1900 : 1300,
      skewY: -10,
      skewX : 0,
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: 'power1.in'
    });
  }
}
