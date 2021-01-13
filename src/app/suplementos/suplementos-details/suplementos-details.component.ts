import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suplementos-details',
  templateUrl: './suplementos-details.component.html',
  styleUrls: ['./suplementos-details.component.scss']
})
export class SuplementosDetailsComponent implements OnInit {

  public routeParam: Number = -1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.routeParam = Number(params.get('id'));
      });
  }

}
