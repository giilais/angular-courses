import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ImagePath: string;

  constructor(private router: Router) {
    this.ImagePath = '/src/assets/img/img-ts.jpg';
  }
  goToCoursesDetails() {
    this.router.navigate(['/courses-details']);
  }
}
