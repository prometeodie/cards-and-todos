import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myDate: Date = new Date;
  dateChange: string = 'mediumTime';

  constructor() { }

  ngOnInit(): void {
    this.myActualDate();
  }

  test(){
    console.log(this.myDate);
  }
  myActualDate(){
    setTimeout(() => {
      this.myDate = new Date ;
      this.myActualDate();
    }, 1000);
  }

  mouseOver(){
    setTimeout(() => {
      return this.dateChange = 'long';
    }, 600);
  }

  mouseOut(){
    setTimeout(() => {
      return this.dateChange = 'mediumTime';
    }, 600);
  }

}
