import { Component, OnInit } from '@angular/core';
/*settng up new product alerts component to receive a product as input*/
import { Input } from '@angular/core';
/*@Component() decorator indicates the following class is a component. It provides metadata about the component, including its selector, templates, and styles*/




@Component({
  /*The selector identifies the component and is the name given to the Angular component when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app- followed by the component name*/
  selector: 'app-product-alerts',
  /*The template and style filenames reference the HTML and CSS files*/
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
/*ProductAlertsComponent handles functionality for the component*/
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}