export interface weatherData {
    coord: Coord
    weather: weatherData[]
    base: string
    main: main
    visibility: number
    wind: Wind
    clouds: Clouds 
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  
  export interface weatherData {
    id: number
    Main: string
    description: string
    icon: string
  }
  
  export interface main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  
  export interface Wind {
    speed: number
    deg: number
  }
  
  export interface Clouds {
    all: number
  }
  
  export interface Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  