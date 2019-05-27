import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

	@HostBinding('class.infoText')
	infoText = '';
  constructor() { }

  ngOnInit() {
  }

  changeText(text){
  	this.infoText = text;
  }

}
