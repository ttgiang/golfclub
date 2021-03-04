import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import odata from "devextreme/data/odata/store";
import { offers } from "./data/offers";

@Injectable()
export class OfferService {
  store: any;

  getOffer() {
    if (environment.thanh) {
      return offers[0];
    } else {
      this.store = new odata({
        url:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs/OfferOfTheDay",
        beforeSend: function (e: any) {
          e.method = "POST";
        },
      });
      return this.store.load();
    }
  }
}
