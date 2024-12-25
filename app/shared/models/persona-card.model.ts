export interface PersonaCard {
    id: string;
    title: string;
    description: string;
    image: string;
    skills: Array<{
        name: string;
        rating: number;
    }>;
}