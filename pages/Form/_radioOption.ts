export type T_Radio_Location = {
  name: string;
  state: string;
  latitude: number;
  longitude: number;
};

export const radioOption: T_Radio_Location[] = [
  {
    name: "Snowmass",
    state: "CO",
    latitude: 29.213,
    longitude: -106.9378,
  },
  {
    name: "Malibu",
    state: "CA",
    latitude: 34.0259,
    longitude: -118.7798,
  },
  {
    name: "Catskill",
    state: "NY",
    latitude: 32.2146,
    longitude: -110.6818,
  },
  {
    name: "Colum River Gorge",
    state: "OR",
    latitude: 45.7242,
    longitude: -121.73,
  },
];
