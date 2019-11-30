export interface Temp {
  value: number;
  dateTime: string;
}

export interface Temps {
  data: Temp[];
  location: string;
}
