import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit, AfterViewInit {

  updateTime: any;
  private isFirstLoad = true;
  data: any;
  data1: string;
  constructor(private api: ApiService) {
  }
  getAllProduct() {
    this.api.getProduct().subscribe(res => {
      this.data = res;
    })
  }
  addCart(data: any) {
    console.log(data)
    this.api.addToCart(data).subscribe(dat => {
      alert("addToCart")
      window.location.reload();
    });
  }
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
  ngOnInit(): void {
    this.getAllProduct()
    this.updateTime = setInterval(() => {
      let countDownDate = new Date("Aug 19, 2024 16:06:01").getTime();
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);




      document.getElementById("days").innerHTML = days < 10 ? "0" + days : days + "";
      document.getElementById("hour").innerHTML = hours < 10 ? "0" + hours : hours + "";
      document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes + "";
      document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds + "";
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(this.updateTime);
      }


    }, 1000)

  }


}
