export interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Interaction {
  id?: string;
  character_name: string;
  city?: string;
  started_at?: string;
  card_id?: string;
}