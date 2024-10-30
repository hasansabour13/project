import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 itemcunter!: number;//شمردن
 projecttext:string="angoular project";
 project: string[] = [];//  تعریف آرایه .باید یه مقدار اولیه خالی بدهیم
constructor(){}

ngOnInit(){//مقدار ئهی اولیه کامپوننت
this.itemcunter=this.project.length;//
}
additem(){//برای اضافه کردن به آرایه
  this.project.push(this.projecttext);//برای اضاف کردن به آرایه پوش میکنیم
  this.projecttext=' ';//داخل پروجک نکس را خالی میکنیم
  this.itemcunter=this.project.length;//دوباره این کار را انجام می دهیم چون یک بار اینیشیالز شده

}

removeitem(i: number){
  this.project.splice(i,1);// برای پاک کردن .از کحا تا کجا
  this.itemcunter=this.project.length;//دوباره بعد از پاک کردن به روز رسانی میکنیم
}

}
