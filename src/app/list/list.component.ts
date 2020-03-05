import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getDrink().subscribe(data => {
      this.brews = data;
    });
  }

}
