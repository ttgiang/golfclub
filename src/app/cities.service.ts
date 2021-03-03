import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import odata from "devextreme/data/odata/store";

// ttgiang - see docs cities.txt
const citiesData = [
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(1)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(1)",
      type: "GolfClub.Models.City",
    },
    Clubs: {
      __deferred: {
        uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(1)/Clubs",
      },
    },
    Id: 1,
    Name: "San Diego",
    StateProvince: "CA",
    Country: "USA",
  },
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(2)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(2)",
      type: "GolfClub.Models.City",
    },
    Clubs: {
      __deferred: {
        uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(2)/Clubs",
      },
    },
    Id: 2,
    Name: "Las Vegas",
    StateProvince: "NV",
    Country: "USA",
  },
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(3)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(3)",
      type: "GolfClub.Models.City",
    },
    Clubs: {
      __deferred: {
        uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(3)/Clubs",
      },
    },
    Id: 3,
    Name: "Dallas",
    StateProvince: "TX",
    Country: "USA",
  },
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(4)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(4)",
      type: "GolfClub.Models.City",
    },
    Clubs: {
      __deferred: {
        uri: "https://js.devexpress.com/Demos/GolfClub/odata/Cities(4)/Clubs",
      },
    },
    Id: 4,
    Name: "New York",
    StateProvince: "NY",
    Country: "USA",
  },
];

@Injectable()
export class CitiesService {
  store: any;

  getCities() {
    if (environment.thanh) return citiesData;
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
