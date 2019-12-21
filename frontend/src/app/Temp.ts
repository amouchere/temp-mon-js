export interface Payload {
  temperature: number;
  humidity: number;
  dateTime: string;
}

export interface PayloadByLocation {
  data: Payload[];
  location: string;
}
