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
  @Input() mm! : gsap.MatchMedia;
  @Input() tl!: GSAPTimeline;
  projects : Project []= [
    {
      title : 'Training website',
      description:'In May 2024, I developed a training web app using Angular for a dynamic front end and Express.js for the backend. The app allowed users to access training modules and track their progress, helping me gain experience in full-stack development and modern front-end integration with server-side logic.',
      image: 'training-app.jpeg',
      usedTechnology : [
        {name: 'angular', image: 'angular.png'},
        {name: 'express.js', image: 'expressJs.png'},
        {name: 'tailwind', image: 'Tailwind CSS.png'},
        {name: 'mySQL', image: 'my-sql.png'},
      ],
      fontGitHubLink: 'https://github.com/wassimD28/FireFist-fixed-version',
      backGitHubLink: 'https://github.com/wassimD28/FireFist-Back-End'
    },{
      title : 'Film library',
      description:"At the end of 2023, I completed a film library website using Symfony for both backend and frontend. The project provided users with a comprehensive film database, including details like synopses, cast, and crew information. It strengthened his skills in full-stack development and showcased Symfony's capabilities for building cohesive, scalable web applications.",
      image: 'film-library-app.jpeg',
      usedTechnology : [
        {name: 'symfony', image: 'symfony-white.png'},
        {name: 'tailwind', image: 'Tailwind CSS.png'},
        {name: 'mySQL', image: 'my-sql.png'},
      ],
      fullGitHubLink: 'https://github.com/wassimD28/Film-library'
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



  ngAfterViewInit(): void {
    const screenWidth = window.innerWidth;
    this.mm.add("(min-width: 1024px)",()=>{
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
    });
  }
}
