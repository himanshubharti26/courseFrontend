import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent  implements OnInit{
  constructor() { 
    document.title='404 - Page Not Found | Course catalog ';

  }
  ngOnInit() {
  }
}


