import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  @Input() public user: User;
  constructor() { }

  ngOnInit() {
  }

}
