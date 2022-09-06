import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    let baseUrl = environment.baseUrl;
    console.log('onInit', baseUrl);
  }
  title = 'ssr';
}
