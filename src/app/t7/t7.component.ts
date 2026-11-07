import { Component,OnInit,signal,computed,effect,inject } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-t7',
  standalone: true,
  imports: [],
  templateUrl: './t7.component.html',
  styleUrl: './t7.component.css'
})
export class T7Component implements OnInit {
  private userService=inject(UserService);

  users:any[]=[];
  loading=true;
  error='';
  count=signal(0);
  constructor(){
    effect(()=>{
      console.log("counter value:",this.count());
    })
  }
  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(){
    this.userService.getUsers().subscribe({
      next: (data)=>{
        this.users=data;
        this.loading=false;
      },
      error: (err)=>{
        console.error(err);
        this.error='failed to fetch users';
        this.loading=false;
      }
    })
  }
  increaseCounter(){
    this.count.update(value=>value+1);
  }
  decreaseCounter(){
    this.count.update(value=>value-1);
  }
  resetCounter(){
    this.count.set(0);
  }

}
