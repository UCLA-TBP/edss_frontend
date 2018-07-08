import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UCLA Engineering Dean’s Student Showcase';

  public constructor(private titleService: Title ) {
    this.titleService.setTitle("UCLA EDSS")
  }
}
