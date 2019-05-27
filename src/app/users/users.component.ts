import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users: User[];
  key: string;
  
  settings = {
	  //hideSubHeader: true,
	  mode: 'external',
	  actions: {
		  add: true,
		  edit: false,
		  delete: false,
		  position: 'right'
	  },
	  add: {
		  addButtonContent: 'Add User'
	  },
    columns: {
      username: {
        title: 'Username',
    		editable: false
      },
      firstName: {
        title: 'First Name',
    		editable: false
      },
      lastName: {
        title: 'Last Name',
    		editable: false
      },
	    email: {
        title: 'E-Mail',
    		editable: false
      }
    }
  };
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this
      .userService
      .getUsers().then(this.setUsers.bind(this));
      
  }

  setUsers(res: User[]){
    this.users = res;
    for (let i = this.users.length - 1; i >= 0; i--) {
      if(!localStorage.getItem(this.users[i].username)){
        localStorage.setItem(this.users[i].username, JSON.stringify(this.users[i]));
      }
    }
    if(localStorage.length > 0){
      this.users = [];
    }
    for (let i = localStorage.length - 1; i >= 0; i--) {
      this.key = localStorage.key(i);
      this.users.push(JSON.parse(localStorage.getItem(this.key)));
    }
  }
  
  onAddUser(event): void{
	  console.log(event);
	  console.log('Add Clicked');
	  this.router.navigate(['/add-user'], { relativeTo: this.route });
  }

}
