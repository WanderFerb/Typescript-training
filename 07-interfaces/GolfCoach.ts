import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDialyWorkout(): string {
        return "Hit 10 balls from 100 metres";    
    }
    
}