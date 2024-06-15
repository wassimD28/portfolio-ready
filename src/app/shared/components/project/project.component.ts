import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../core/models/interfaces/project.interface';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
})
export class ProjectComponent{
  @Input() project? : Project;
  @Input() reverse? : Boolean;
  @Input() index? : number;
  projectIndex : string = String(this.index);
}
