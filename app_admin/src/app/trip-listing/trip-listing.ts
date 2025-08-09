import { Component,OnInit } from '@angular/core';
import {trips} from "../data/trips";
import {Trip} from "../models/trip";
import {TripCard} from "../trip-card/trip-card";
import {TripData} from "../services/trip-data";

import {Router} from "@angular/router";


@Component({
  selector: 'app-trip-listing',
  imports: [TripCard],
  providers: [TripData],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit{
  trips: Array<any> = trips;
  json:JSON=JSON;
  message:string = "";
  constructor (
    private tripDataService:TripData,
    private router:Router,
  ){
    console.log("trip-listing constructor")
  }
  ngOnInit():void{
    console.log('ngOnInit');
    this.getStuff();
  }
  private getStuff():void{
    this.tripDataService.getTrips().subscribe({
      next: (value:any)=>{
        this.trips=value;
        if(value.length>0)
        {
          this.message = "There are "+value.length + " trips available.";
        }
        else{
          this.message = "There were no trips retrieved from the database";
        }
        console.log(this.message)
      },
      error:(error:any)=>{
        console.log("Error: "+error);
      }
    })
  }
  public addTrip():void{
    this.router.navigate(['add-trip']);
  }
}
