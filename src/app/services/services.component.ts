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
    Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

  services = [
    {
      img: "https://image.flaticon.com/icons/svg/1965/1965214.svg",
      title: "Easy Rentals",
      desc: {
        line0: "Give us a call, message",
        line1: "or drop an email for renting"
      }
    },
    {
      img:"https://image.flaticon.com/icons/svg/1735/1735835.svg", 
      title:"No Hidden Costs",
      desc: {
        line0: "Lorem ipsum dolor sit amet",
        line1: "consectetur adipiscing elit!"
      }
    },
    {
      img:"https://image.flaticon.com/icons/svg/1735/1735114.svg", 
      title:"Flexi Pricing",
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
    {
      img:"https://image.flaticon.com/icons/svg/784/784719.svg", 
      title:"Reliable Service",
      desc: {
        line0: "We are the best",
        line1: "available at your service"
      }
    }
  ]
}

     