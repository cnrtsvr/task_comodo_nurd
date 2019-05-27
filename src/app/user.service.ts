import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient, private userService: UserService) { }
  
	usersDataUrl = 'assets/users.json';
	users: User[];

	getUsers() {
    	return this.http
            .get(this.usersDataUrl)
            .toPromise();
	}
}
