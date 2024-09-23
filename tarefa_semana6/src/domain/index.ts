export interface Pet {
    id: string;
    createdAt: string;
    name: string;
    age: number;
    type: string;
    breed: string;
    photo: string;
    gender: 'male' | 'female';
    available: boolean;
    vaccinated: boolean;
}

