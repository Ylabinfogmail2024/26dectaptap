export interface Profile {
  id: string;
  source_code: string;
  talents: number;
  self_definition: string;
  welcome_message: string;
  thought_of_day: string;
  avatar_url: string;
}

export interface ProfileResponse {
  data: Profile | null;
  error: Error | null;
}