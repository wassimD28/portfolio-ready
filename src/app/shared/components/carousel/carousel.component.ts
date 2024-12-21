import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() Images: string[] | undefined = [];
  smallScreen: boolean = window.innerWidth < 500 ? true : false;
  currentIndex: number = 0;
  width: number = this.smallScreen ? 330 : 550; // Width of a single image in pixels
  x_position: number = 0; // Initial position

  //! functions
  prevImage(): void {
    if (this.Images) {
      if (this.currentIndex === 0) {
        this.currentIndex = this.Images.length - 1;
      } else {
        this.currentIndex--;
      }
      this.updatePosition();
    }
  }

  nextImage(): void {
    if (this.Images) {
      if (this.currentIndex === this.Images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.updatePosition();
    }
  }

  updatePosition(): void {
    this.x_position = -this.currentIndex * this.width;
  }
}
