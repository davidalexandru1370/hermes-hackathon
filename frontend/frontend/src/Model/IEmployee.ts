import { Document } from "./Document";

export interface IEmployee {
  id: string;
  name: string;
  documents?: Document[];
}
