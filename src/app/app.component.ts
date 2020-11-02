import { Component, OnInit } from "@angular/core";
import { RestService } from "./rest.service";
import { Worlds } from "./Worlds";
import * as CanvasJS from "../assets/canvasjs.min.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "JSON Population Data";

  constructor(private rs: RestService) {}

  columns = ["Rank", "Country", "Population", "World"];

  index = ["rank", "country", "population", "world"];

  worlds: Worlds[] = [];

  dps = [
    { y: 211243220, label: "Brazil" },
    { y: 263510146, label: "Indonesia" },
    { y: 326474013, label: "U.S." },
    { y: 1342512706, label: "India" },
    { y: 1388232693, label: "China" }
  ];

  ngOnInit(): void {
    this.rs.getWorlds().subscribe(
      response => {
        this.worlds = response;
      },

      error => {
        console.log("Error Occured : " + error);
      }
    );

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Top 5 Most Population",
        fontSize: 30,
        fontColor: "#e79e4f"
      },
      data: [
        {
          type: "bar",
          dataPoints: this.dps
        }
      ]
    });

    chart.render();
  }
}
