import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import odata from "devextreme/data/odata/store";

// ttgiang - see docs clubs.txt
const clubsData = [
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)",
      type: "GolfClub.Models.Club",
    },
    Reservations: {
      __deferred: {
        uri:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(1)/Reservations",
      },
    },
    City: {
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
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(3)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(3)",
      type: "GolfClub.Models.Club",
    },
    Reservations: {
      __deferred: {
        uri:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(3)/Reservations",
      },
    },
    City: {
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
    Id: 3,
    Name: "Las Vegas Bulls Golf Club",
    HoleCount: 18,
    GolfCourseCount: 1,
    Price: "75.0000",
    Description: "Description for Las Vegas Bulls Golf Club",
    Rating: 5,
    CityId: 2,
    Image: "content/clubs/club3.jpg",
    Address: "858 Summit Avenue",
    PostalCode: 89032,
  },
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(5)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(5)",
      type: "GolfClub.Models.Club",
    },
    Reservations: {
      __deferred: {
        uri:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(5)/Reservations",
      },
    },
    City: {
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
    Id: 5,
    Name: "Happy Hole Golf Club",
    HoleCount: 18,
    GolfCourseCount: 1,
    Price: "95.0000",
    Description: "Description for Happy Hole Golf Club",
    Rating: 5,
    CityId: 2,
    Image: "content/clubs/club5.jpg",
    Address: "407 Cambridge Drive",
    PostalCode: 89032,
  },
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(6)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(6)",
      type: "GolfClub.Models.Club",
    },
    Reservations: {
      __deferred: {
        uri:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(6)/Reservations",
      },
    },
    City: {
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
    Id: 6,
    Name: "Dallas Battlefield Golf Club",
    HoleCount: 18,
    GolfCourseCount: 3,
    Price: "44.0000",
    Description: "Description for Dallas Battlefield Golf Club",
    Rating: 5,
    CityId: 3,
    Image: "content/clubs/club6.jpg",
    Address: "619 Jefferson Avenue Helotes",
    PostalCode: 75323,
  },
  {
    __metadata: {
      id: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(9)",
      uri: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(9)",
      type: "GolfClub.Models.Club",
    },
    Reservations: {
      __deferred: {
        uri:
          "https://js.devexpress.com/Demos/GolfClub/odata/Clubs(9)/Reservations",
      },
    },
    City: {
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
    Id: 9,
    Name: "New York Angels Golf Club",
    HoleCount: 18,
    GolfCourseCount: 1,
    Price: "60.0000",
    Description: "Description for New York Angels Golf Club",
    Rating: 5,
    CityId: 4,
    Image: "content/clubs/club9.jpg",
    Address: "199 Houston St",
    PostalCode: 10001,
  },
];

@Injectable()
export class ClubsService {
  private clubsData = new Subject<any>();
  private reservations = new Subject<any>();
  reservations$ = this.reservations.asObservable();
  clubsData$ = this.clubsData.asObservable();

  store: any;

  setClubsData(data: any) {
    this.clubsData.next(data);
  }
  setReservation(data: any) {
    this.reservations.next(data);
  }
  setSchedulerData(data: any, currentDate: Date) {
    let reservations: any[] = [];
    data.forEach(function (club: any) {
      club.Reservations.forEach(function (item: any) {
        var date = new Date(currentDate.toString());
        reservations.push({
          Id: item.ClubId,
          Name: club.Name,
          startDate: new Date(date.setHours(item.Start, 0)),
          endDate: new Date(date.setHours(date.getHours() + item.Range, 0)),
        });
      });
    });
    this.setReservation(reservations);
  }
  getResources(data: any) {
    let groups: any[] = [],
      i = 0,
      color = ["#bacb35", "#4aca94", "#49baca"];
    data.forEach(function (club: any) {
      groups.push({
        text: club.Name,
        id: club.Id,
        color: color[i++],
      });
    });
    return [
      {
        field: "Id",
        label: "Club",
        allowMultiple: false,
        dataSource: groups,
      },
    ];
  }
  getClubs() {
    if (environment.thanh) return clubsData;
    else
      this.store = new odata({
        url: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs",
        key: "Id",
        keyType: "Int32",
      });

    return this.store.load({
      sort: [{ getter: "Rating", desc: true }],
      expand: ["City"],
      take: 5,
    });
  }
  getClubById(Id: number) {
    return this.store.byKey(Id, { expand: ["City", "Reservations"] });
  }
  getFoundClubs(id: any) {
    return this.store.load({
      filter: ["CityId", "=", parseInt(id)],
      expand: ["City", "Reservations"],
    });
  }
}
