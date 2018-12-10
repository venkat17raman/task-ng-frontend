import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users: any = [];

  constructor(private service: UserService,
    private router: Router
  ) { }
  deleteUser(user) {
    this.service.userDelete(user)
      .subscribe((data: any) => {
        alert("deleted successfullay");
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i]._id === data._id) {
            return this.users.splice(i, 1);
          }
        }
        this.router.navigate(['/view']);
      });

  }

  showUser() {
    this.service.userGet()
      .subscribe((data) => {
        this.users = data;
      },
        (error) => {
          console.log(error);
        });
  }
  ngOnInit() {
    this.showUser();
  }

  ngOnChanges() {
    this.showUser();
  }

}
