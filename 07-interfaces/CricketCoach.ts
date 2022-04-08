import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDialyWorkout(): string {
        return "Practice your spins";
    }
    
}