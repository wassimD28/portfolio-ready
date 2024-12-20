import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() Images: string[] | undefined = [];
  currentIndex: number = 0;
  width: number = 550; // Width of a single image in pixels
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
