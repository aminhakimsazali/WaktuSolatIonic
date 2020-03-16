import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waktu-solat',
  templateUrl: './waktu-solat.page.html',
  styleUrls: ['./waktu-solat.page.scss'],
})
export class WaktuSolatPage implements OnInit {

  

  baseURL = "http://api.aladhan.com/v1/calendarByCity";
  information : null;
  waktu: Array<String> ;
  myDate: String = new Date().getDate().toString();
  todayDate = Number(this.myDate) - 1;

  city : String;
  country : String;
  
  constructor(
    
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    
    ) {
    
  }//end of constructor

  ngOnInit() {
    this.city = this.activatedRoute.snapshot.paramMap.get('city');
    console.log("City: " , this.city);

    this.country = this.activatedRoute.snapshot.paramMap.get('country');
    console.log("Country: " , this.country);

    console.log(`http://api.aladhan.com/v1/calendarByCity?city=${this.city}&country=${this.country}`);

    this.getWaktu();
    console.log(this.myDate);
    console.log(Number(this.myDate));
  }

  getWaktu() {

    this.http.get(`http://api.aladhan.com/v1/calendarByCity?city=${this.city}&country=${this.country}&method=3`)
    // this.http.get("http://api.aladhan.com/v1/calendarByCity?city=Vietnam&country=Hanoi&method=11")
    .subscribe(result =>{
      
      console.log(result["data"][this.todayDate]["timings"]["Asr"]);
      this.information = result["data"][this.todayDate]["timings"];
      
    });



  }// end of GetWaktuThen
  
}
