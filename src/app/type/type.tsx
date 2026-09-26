export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}


export const getPlans = async()=>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    return res.json();
}