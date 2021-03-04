import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import odata from "devextreme/data/odata/store";
import { cities } from "./data/cities";

@Injectable()
export class CitiesService {
  store: any;

  getCities() {
    if (environment.thanh) return cities;
    else {
      this.store = new odata({
        url: "https://js.devexpress.com/Demos/GolfClub/odata/Cities",
        key: "Id",
        keyType: "Int32",
      });
      return this.store.load();
    }
  }
}
