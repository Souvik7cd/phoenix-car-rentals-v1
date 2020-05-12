import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servicesMsg: string = `
    We provide Airport Transfers, Inter/Intra City Rides, Hotel Transfers, Full day rentals to all our travellers with our well-maintained cars , skilled and disciplined chauffeurs. We are available round the clock for your support. Our focal point of operation is exceeding customer expectation and ensuring customer satisfaction.
  `;

  services = [
    {
      img: "https://image.flaticon.com/icons/svg/1965/1965214.svg",
      title: "Hassle Free Rentals",
      desc: {
        line0: "Give us a call, message",
        line1: "or drop an email for renting"
      }
    },
    /* {
      img:"https://image.flaticon.com/icons/svg/1735/1735835.svg", 
      title:"No Hidden Costs",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit!"
      }
    }, */
    {
      img:"https://image.flaticon.com/icons/svg/1735/1735114.svg", 
      title:"Best Price Guarantee",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit!"
      }
    },
    {
      img:"https://image.flaticon.com/icons/svg/1909/1909702.svg", 
      title:"Professional Chauffeur",
      desc: {
        line0: "Our expert hands will",
        line1: "drive you to your destination"
      }
    },
    {
      img:"https://image.flaticon.com/icons/svg/2191/2191848.svg", 
      title:"24x7 Customer Help",
      desc: {
        line0: "We are available",
        line1: "round-the-clock for you"
      }
    },
    /* {
      img:"https://image.flaticon.com/icons/svg/784/784719.svg", 
      title:"Reliable Service",
      desc: {
        line0: "We are the best",
        line1: "available at your service"
      }
    } */
  ]
}

     