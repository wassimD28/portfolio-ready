import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fourth-section',
  standalone: true,
  imports: [],
  templateUrl: './fourth-section.component.html',
})
export class FourthSectionComponent {
  @Input() mm! : gsap.MatchMedia;
}
