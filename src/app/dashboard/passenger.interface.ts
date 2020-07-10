export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Children[];
}

export interface Children {
  name: string;
  age: number;
}
