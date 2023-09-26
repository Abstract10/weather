import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { weatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private weatherService: WeatherService){ 

 }


 cityName:string="ranchi";
 weatherData ?: weatherData;


  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName='';

  }  
  onsubmit(){ 
    this.getweatherData(this.cityName)
    this.cityName='';
  }

  private getweatherData(cityName:string) {
   this.weatherService.getweatherData(cityName)
  .subscribe({
    next : (response)=>{
      this.weatherData = response;

      console.log(response)
    }
  });
  }  
  
}
