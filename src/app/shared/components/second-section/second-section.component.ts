import { AfterViewInit, Component, Input } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { projects } from '../../constant/projects';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './second-section.component.html',
})
export class SecondSectionComponent implements AfterViewInit {
  @Input() mm!: gsap.MatchMedia;
  @Input() tl!: GSAPTimeline;
  projects = projects;

  ngAfterViewInit(): void {
    const screenWidth = window.innerWidth;
    this.mm.add('(min-width: 1024px)', () => {
      this.tl.from('.ProjectTitle', {
        scrollTrigger: {
          trigger: '.ProjectTitle',
          start: '-100% center',
          end: '110% center',
          scrub: 1,
          //markers: true
        },
        x: screenWidth > 1600 ? 1200 : 900,
        duration: 2,
        ease: 'power1.in',
      });

      this.tl.from('#project-1', {
        scrollTrigger: {
          trigger: '#project-1',
          start: 'top center',
          end: '40% center',
          scrub: 1,
          //markers: true
        },
        x: screenWidth > 1600 ? 1900 : 1300,
        skewY: -10,
        skewX: 0,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: 'power1.in',
      });
      this.tl.from('#project-2', {
        scrollTrigger: {
          trigger: '#project-2',
          start: '-20% center',
          end: '40% center',
          scrub: 1,
          //markers: true
        },
        x: screenWidth > 1600 ? -1900 : -1300,
        skewY: -10,
        skewX: 0,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: 'power1.in',
      });
      this.tl.from('#project-3', {
        scrollTrigger: {
          trigger: '#project-3',
          start: '-50% center',
          end: '50% center',
          scrub: 1,
          //markers: true
        },
        x: screenWidth > 1600 ? 1900 : 1300,
        skewY: -10,
        skewX: 0,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: 'power1.in',
      });
      this.tl.from('#project-4', {
        scrollTrigger: {
          trigger: '#project-4',
          start: '-20% center',
          end: '40% center',
          scrub: 1,
          //markers: true
        },
        x: screenWidth > 1600 ? -1900 : -1300,
        skewY: -10,
        skewX: 0,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: 'power1.in',
      });
    });
  }
}
