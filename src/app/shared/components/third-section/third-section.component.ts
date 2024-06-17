import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Skill } from '../../../core/models/interfaces/skill.interface';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-third-section',
  standalone: true,
  imports: [],
  templateUrl: './third-section.component.html',
})
export class ThirdSectionComponent implements AfterViewInit{
  @Input() tl!: GSAPTimeline;

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
      description: 'I used Java to build computer applications using the Swing library.'
    },
    {
      name: 'python',
      image: 'python.png',
      description: 'I used Python to create an application that downloads videos from YouTube'
    },
  ];

  @ViewChildren('skillContainer') skillContainers!: QueryList<ElementRef>;
  @ViewChild('skillsDesc') skillsDesc!: ElementRef;
  @ViewChild('skillsTitle') skillsTitle!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const content = this.skillContainers.toArray().map(c => c.nativeElement);
    const container = this.elementRef.nativeElement.querySelector('.CONTAINER');

    const screenWidth = window.innerWidth;

    let scrollTween = gsap.to(content, {
      xPercent: -100 * (content.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.CONTAINER',
        pin: true,
        scrub: 1,
        start: 'top center',
        end: () => `+=${container.offsetWidth}`,
        //markers: true,
      }
    });

    this.tl.from(this.skillsTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.skillsTitle.nativeElement,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        //markers: true
      },
      x: screenWidth>1400 ? 900 : 800, // example animation
      duration: 2,
      ease: 'power1.in'
    });

    this.tl.from(this.skillsDesc.nativeElement, {
      scrollTrigger: {
        trigger: this.skillsDesc.nativeElement,
        start: '-150% center',
        end: '150% center',
        scrub: 1,
        markers: true
      },
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
          end: '90% center',
          scrub: 1,
          //markers: true,
        }
      });
    });
  }

}
