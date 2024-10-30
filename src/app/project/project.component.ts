import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-project',
  // standalone: true,
  // imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  constructor( private route:Router){

  }
ngOnInit(): void {

}
navhome(){
  // this.route.navigate([""]);//به homeمیرود
  this.route.navigate(["profile"],{queryParams:{id:1}});

}
}
