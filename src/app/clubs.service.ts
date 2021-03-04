import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import odata from "devextreme/data/odata/store";
import { clubsData } from "./data/clubs";

@Injectable()
export class ClubsService {
  store: any;

  constructor() {
    if (!environment.thanh) {
      this.store = new odata({
        url: "https://js.devexpress.com/Demos/GolfClub/odata/Clubs",
        key: "Id",
        keyType: "Int32",
      });
    }
  }

  private clubsData = new Subject<any>();
  private reservations = new Subject<any>();
  reservations$ = this.reservations.asObservable();
  clubsData$ = this.clubsData.asObservable();

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
    if (environment.thanh) {
      return clubsData;
    } else {
      return this.store.load({
        sort: [{ getter: "Rating", desc: true }],
        expand: ["City"],
        take: 5,
      });
    }
  }
  getClubById(Id: number) {
    if (environment.thanh) {
      const clubIndex = clubsData.findIndex((item) => item.Id === Id);
      return clubsData[clubIndex];
    } else {
      return this.store.byKey(Id, { expand: ["City", "Reservations"] });
    }
  }
  getFoundClubs(id: any) {
    let clubs: any;

    if (environment.thanh) {
      const clubIndex = clubsData.findIndex((item) => item.CityId === id);
      clubs = clubsData[clubIndex];
    } else {
      clubs = this.store.load({
        filter: ["CityId", "=", parseInt(id)],
        expand: ["City", "Reservations"],
      });
    }

    return clubs;
  }
}
