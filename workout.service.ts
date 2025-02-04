import { Injectable } from '@angular/core';

interface Workout {
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
  }

  getWorkouts() {
    return this.workouts;
  }
}