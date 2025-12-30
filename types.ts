
export interface Lesson {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
  instructor: string;
  rating: number;
}

export interface User {
  name: string;
  email: string;
  photo: string;
  isLoggedIn: boolean;
}

export interface Category {
  id: string;
  name: string;
  lessons: Lesson[];
}
