﻿import { environment } from "../../../environments/environment";
import { Component } from "@angular/core";
import { ClubsService } from "../../clubs.service";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { CommonService } from "../../common.service";

const COUNT_DAYS = 1;

@Component({
  selector: "clubs-list",
  templateUrl: "clubs-list.component.html",
  styleUrls: ["clubs-list.component.less"],
  providers: [ClubsService, CommonService, DatePipe],
})
export class ClubsComponent {
  loadingData: boolean = true;
  clubs: any[];
  constructor(
    private clubsService: ClubsService,
    private common: CommonService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    let that = this;
    if (environment.thanh) {
      that.clubs = this.clubsService.getClubs();
      that.loadingData = false;
    } else {
      this.clubsService.getClubs().done(function (data: any) {
        that.clubs = data;
        that.loadingData = false;
      });
    }
  }
  keyPress(e: any, club: any) {
    if (e.code === "Enter") {
      this.goToInfo(club);
    }
  }
  goToInfo(e: any) {
    this.router.navigate([
      "info",
      {
        location: e.City.Id,
        clubId: e.Id,
        startDate: this.common.getFormatDate(new Date()),
        endDate: this.common.getFormatDate(
          this.common.addDays(new Date(), COUNT_DAYS)
        ),
        players: 2,
        holes: 18,
      },
    ]);
  }
}
