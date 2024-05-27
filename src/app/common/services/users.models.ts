import { Timestamp } from "firebase/firestore";

export interface UserI{
    titulo:string;
    detalles:string;
    fechaI:Timestamp;
    fechaF:Timestamp;
    id:string;
}