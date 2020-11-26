import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  apiURL: string =
    "https://ddragon.leagueoflegends.com/cdn/10.23.1/data/es_ES/champion.json";
  name = "Angular";
  products = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getChamp();
  }

  getChamp() {
    this.httpClient.get(this.apiURL).subscribe((data: any) => {
      this.products = data.data;
      let val = Object.keys(data.data).map((key: any, obj: any) => obj[key]);
    });
  }
}
