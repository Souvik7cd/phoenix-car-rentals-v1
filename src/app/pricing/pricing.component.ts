import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  pricingCharts: any = [
    { 
      destination: 'Intercity',
      price: '₹ 1500 - 1800',
      rate: '10hrs / 100km',
      features: [
        'Free WiFi',
        'Newspaper',
        'Air Conditioned',
        'Drinking water'
      ]
    },
    { 
      destination: 'Outstation',
      price: '₹ 2200 - 2500',
      rate: '10hrs / 100km',
      features: [
        'Free WiFi',
        'Newspaper',
        'Air Conditioned',
        'Drinking water'
      ]
    }, 
    { 
      destination: 'Airport',
      price: '₹ 1300 - 1500',
      rate: '8hrs / 8km',
      features: [
        'Pickup & Drop',
        'Free WiFi',
        'Air Conditioned',
        'Drinking water',
      ]
    }
  ]
  ngOnInit(): void {
  }

}
