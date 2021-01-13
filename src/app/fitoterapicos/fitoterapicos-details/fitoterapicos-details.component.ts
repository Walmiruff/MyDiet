import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fitoterapicos-details',
  templateUrl: './fitoterapicos-details.component.html',
  styleUrls: ['./fitoterapicos-details.component.scss']
})
export class FitoterapicosDetailsComponent implements OnInit {
  
  public routeParam: Number = -1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeParam = Number(params.get('id'));
    });
  }

}
