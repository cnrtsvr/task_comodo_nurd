import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickBackToUsers(){
  	this.router.navigate(['/users'], { relativeTo: this.route });
  }

}
