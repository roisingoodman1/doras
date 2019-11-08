import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band } from './Band';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private data: DataService) {}
  bands = this.getBand();
  getBand() {
    return this.http.get<Band[]>('/api/getBand');
  }

}
