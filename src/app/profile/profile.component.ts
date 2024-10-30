import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  // standalone: true,
  // imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private route: ActivatedRoute) {//اکتیور روت .روت جاری است و با روت فرق میکند
    this.route
    .queryParamMap
    .subscribe(params => console.log(params.get('id')));//دریافت پارامتر در کامپوننت
  }



ngOnInit(): any {

}
}
