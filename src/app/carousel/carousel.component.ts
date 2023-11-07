import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  images = [ 'https://t3.ftcdn.net/jpg/05/35/13/82/360_F_535138292_62ZnI4Hcw37J8Jaeg4E9TzJwUciCwSnp.jpg',
  'https://t4.ftcdn.net/jpg/02/92/64/87/360_F_292648792_AgsfVq6bYBvjl43moDD8f0knd4olFplG.jpg',
  'https://www.screenkit.xyz/wp-content/uploads/2020/10/Black-White-final-3.jpg',
  'https://static-prod.adweek.com/wp-content/uploads/2021/07/kfc-c-bomb-2021-652x342.jpg',
  'https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg'];
currentIndex = 0;
 ngOnInit() {
  this.startAutoPlay();
  }
  startAutoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 1000);
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
 
 
}