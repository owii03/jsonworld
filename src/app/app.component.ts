import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Worlds } from './Worlds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'JSONServerAPI';

  constructor(private rs : RestService){}

  columns = ["Rank", "Country", "Population", "World"];

  index = ["rank", "country", "population", "world"];

  worlds : Worlds[] = [];

  ngOnInit(): void {
    this.rs.getWorlds().subscribe
    (
      (response)=>
      {
        this.worlds = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
