import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import SplitType from 'split-type';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [],
  templateUrl: './first-section.component.html',
})
export class FirstSectionComponent implements AfterViewInit{
  ngAfterViewInit(): void {
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
  }

}
