import { Project } from './core/models/interfaces/project.interface';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FirstSectionComponent } from './shared/components/first-section/first-section.component';
import { SecondSectionComponent } from './shared/components/second-section/second-section.component';
import { ThirdSectionComponent } from './shared/components/third-section/third-section.component';
import { FourthSectionComponent } from './shared/components/fourth-section/fourth-section.component';
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
  imports: [CommonModule, RouterOutlet , ProjectComponent,FirstSectionComponent,SecondSectionComponent,ThirdSectionComponent,FourthSectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  tl = gsap.timeline();
  @ViewChild(ThirdSectionComponent) thirdSection! : ThirdSectionComponent
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    // ! pass time line to the sections
    this.thirdSection.tl = this.tl;

    //! lenis smooth scrolling
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
