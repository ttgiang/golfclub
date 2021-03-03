import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import odata from "devextreme/data/odata/store";

// ttgiang - see docs offer.txt
const offerData = [
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)",
      type: "GolfClub.Models.Club",
    },
    City: {
      __deferred: {
        uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)/City",
      },
    },
    Reservations: {
      __deferred: {
        uri:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)/Reservations",
      },
    },
    Id: 1,
    Name: "Starry Sky Golf Club",
    HoleCount: 9,
    GolfCourseCount: 1,
    Price: "55.0000",
    Description: "Description for Starry Sky Golf Club",
    Rating: 5,
    CityId: 1,
    Image: "content/clubs/club1.jpg",
    Address: "32 Route 11",
    PostalCode: 92163,
  },
];

@Injectable()
export class OfferService {
  store: any;

  getOffer() {
    if (environment.thanh) {
      console.log("[banner.service.thanh.true]", environment.thanh);
      return offerData[0];
    } else {
      console.log("[banner.service.thanh.false]", environment.thanh);
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
