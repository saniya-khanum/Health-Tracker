// src/app/workout.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';
import { Workout } from './workout.model';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a workout and retrieve it', () => {
    const workout: Workout = {
      userName: 'John Doe',
      workoutType: 'Cardio',
      workoutMinutes: 30
    };

    service.addWorkout(workout);
    const workouts = service.getWorkouts();
    expect(workouts.length).toBe(1);
    expect(workouts[0]).toEqual(workout);
  });
});