import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  private isFirstLoad = true;

  ngAfterViewInit(): void {
    if (this.isFirstLoad) {
      this.applyImageAnimations();
      this.isFirstLoad = false;
    }
  }

  private applyImageAnimations() {
    const images = document.querySelectorAll('.anime-class');
    images.forEach((image) => {
      image.classList.add('animate__animated', 'animate__fadeInLeftBig',);
    });
  }

}
