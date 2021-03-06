import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private artist: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${params["artistId"]}`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          let result: any = res;
          this.artist = result.results[0];
          console.log(this.artist);
        });
    });
  }

  ngOnInit() {
  }

}
