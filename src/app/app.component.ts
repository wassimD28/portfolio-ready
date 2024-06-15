import { Project } from './core/models/interfaces/project.interface';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Lenis from 'lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import { ProjectComponent } from './shared/components/project/project.component';
import { Skill } from './core/models/interfaces/skill.interface';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , ProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'projectTest';

  projects : Project []= [
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
    }
  ]


  skills : Skill[] = [
    {
      name: 'figma',
      image: 'figma.png',
      description: 'Every project before I create it, I design it on Figma first to ensure a clear and visually appealing layout.'
    },
    {
      name: 'angular',
      image: 'angular.png',
      description: 'I use Angular as my front-end framework because it provides a robust structure for building dynamic web applications.'
    },
    {
      name: 'symfony',
      image: 'symfony-white.png',
      description: 'Previously, I used pure php to build my api, but now I changed to Symfony.'
    },
    {
      name: 'tailwind',
      image: 'Tailwind CSS.png',
      description: 'I used to use Bootstrap as a CSS framework, but after I tried Tailwind I no longer use Bootstrap at all.'
    },
    {
      name: 'java',
      image: 'java.png',
      description: 'I use Java to build computer applications using the Swing library.'
    },
    {
      name: 'python',
      image: 'python.png',
      description: 'I use Java to build computer applications using the Swing library.'
    },
  ];


  @ViewChildren('skillContainer') skillContainers!: QueryList<ElementRef>;
  @ViewChild('skillsDesc') skillsDesc!: ElementRef;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {

    // ! first section
    // split text
    const heading1 = new SplitType('#heading1');
    const heading2 = new SplitType('#heading2');
    const heading3 = new SplitType('#heading3');
    const heading4 = new SplitType('#heading4');
    const heading5 = new SplitType('#heading5');

    gsap.to('.char',{
      y: 0 ,
      stagger: 0.03,
    })

    gsap.to('#description',{
      opacity: 1,
      top: 256,
      delay: 1.5,
      duration: 1
    });
    gsap.to('#callToActionBtn',{
      bottom: 40,
      opacity: 1,
      delay: 0,
      duration: 0.5
    });
    gsap.to('#character',{
      top: 0,
      opacity: 1,
      delay: 0,
      duration: 0.5
    });

    // ! second section
    let tl = gsap.timeline();
    tl.to('.ProjectTitle', {
      scrollTrigger: {
        trigger: '.ProjectTitle',
        start: '-100% center',
        end: '110% center',
        scrub: 1,
        markers: false
      },
      // animation properties for .ProjectTitle
      x: 0, // example animation
      duration: 2
    });

    tl.to(('#project-1'), {
      scrollTrigger: {
        trigger: ('#project-1'),
        start: '0% center',
        end: '50% center',
        scrub: 1,
        //markers: true
      },
      // animation properties for .ProjectTitle
      x: 0, // example animation
      skewY: 0,
      skewX : 0,
      scale: 1,
      rotate: 0,
      duration: 2
    });
    tl.to(('#project-2'), {
      scrollTrigger: {
        trigger: ('#project-2'),
        start: '-40% center',
        end: '50% center',
        scrub: 1,
        markers: false
      },
      // animation properties for .ProjectTitle
      x: 0, // example animation
      skewY: 0,
      skewX : 0,
      scale: 1,
      rotate: 0,
      duration: 2
    });
    tl.to(('#project-3'), {
      scrollTrigger: {
        trigger: ('#project-3'),
        start: '-50% center',
        end: '50% center',
        scrub: 1,
        markers: false
      },
      // animation properties for .ProjectTitle
      x: 0, // example animation
      skewY: 0,
      skewX : 0,
      scale: 1,
      rotate: 0,
      duration: 2
    });
    // ! Third section
    const wrapper = this.elementRef.nativeElement.querySelector('.WRAPPER');
    const container = this.elementRef.nativeElement.querySelector('.CONTAINER');
    const content = this.skillContainers.toArray().map(c => c.nativeElement);

    let scrollTween = gsap.to(content, {
      xPercent: -100 * (content.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.CONTAINER',
        pin: true,
        scrub: 1,
        start: 'top center',
        end: () => `+=${container.offsetWidth}`,
        markers: false,
      }
    });

    tl.to('.skillsTitle', {
      scrollTrigger: {
        trigger: '.skillsTitle',
        start: '-100% center',
        end: '150% center',
        scrub: 1,
        //markers: true
      },
      // animation properties for .ProjectTitle
      x: 580, // example animation
      duration: 2
    });
    tl.from(this.skillsDesc.nativeElement, {
      scrollTrigger: {
        trigger: this.skillsDesc.nativeElement,
        start: '-120% center',
        end: 'bottom center',
        scrub: 1,
        //markers: true
      },
      // animation properties for .ProjectTitle
      y: 100, // example animation
      opacity: 0,
      duration: 1,
      ease: 'ease',
    });


    content.forEach(element => {
      gsap.from(element, {
        opacity: 0,
        duration: 1,
        y: 150,
        stagger: 0.1,
        ease: 'ease',
        scrollTrigger: {
          trigger: element,
          containerAnimation: scrollTween,
          start: 'left center',
          end: '80% center',
          scrub: 1,
          //markers: true
        }
      });
    });


    // lenis smooth scrolling
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
      console.log(e)
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
}
