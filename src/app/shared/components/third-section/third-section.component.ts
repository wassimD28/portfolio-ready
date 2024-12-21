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
export class ThirdSectionComponent implements AfterViewInit {
  @Input() tl!: GSAPTimeline;
  @Input() mm!: gsap.MatchMedia;

  skills: Skill[] = [
    {
      name: 'figma',
      image: 'figma.png',
      description:
        'Every project before I create it, I design it on Figma first to ensure a clear and visually appealing layout.',
    },
    {
      name: 'React',
      image: 'react logo.png',
      description:
        'I use React for some projects because it offers greater flexibility and performance compared to Angular.',
    },
    {
      name: 'express.js',
      image: 'expressJs.png',
      description:
        'I use Express.js for my backend because it provides a simple and flexible way to build APIs.',
    },
    {
      name: 'angular',
      image: 'angular.png',
      description:
        'I use Angular in large projects because it ensures better structure and scalability compared to React.',
    },
    {
      name: 'tailwind',
      image: 'Tailwind CSS.png',
      description:
        'I use Tailwind CSS for quick, responsive styling directly in my markup.',
    },
    {
      name: 'mySQL',
      image: 'my-sql.png',
      description: 'I use MySQL as my database management system.',
    },
  ];

  @ViewChildren('skillContainer') skillContainers!: QueryList<ElementRef>;
  @ViewChild('skillsDesc') skillsDesc!: ElementRef;
  @ViewChild('skillsTitle') skillsTitle!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const content = this.skillContainers.toArray().map((c) => c.nativeElement);
    const container = this.elementRef.nativeElement.querySelector('.CONTAINER');

    const screenWidth = window.innerWidth;

    this.mm.add('(min-width: 1024px)', () => {
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
        },
      });

      this.tl.from(this.skillsTitle.nativeElement, {
        scrollTrigger: {
          trigger: this.skillsTitle.nativeElement,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          //markers: true
        },
        x: screenWidth > 1600 ? 1200 : 800,
        duration: 2,
        ease: 'power1.in',
      });

      this.tl.from(this.skillsDesc.nativeElement, {
        scrollTrigger: {
          trigger: this.skillsDesc.nativeElement,
          start: '-150% center',
          end: '150% center',
          scrub: 1,
          //markers: true
        },
        y: 100, // example animation
        opacity: 0,
        duration: 1,
        ease: 'ease',
      });

      content.forEach((element) => {
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
          },
        });
      });
    });
  }
}
