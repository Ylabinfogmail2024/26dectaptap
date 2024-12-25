/*
  # Create profiles table

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `source_code` (text)
      - `talents` (integer)
      - `self_definition` (text)
      - `welcome_message` (text)
      - `thought_of_day` (text)
      - `avatar_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `profiles` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_code text NOT NULL,
  talents integer NOT NULL DEFAULT 0,
  self_definition text NOT NULL,
  welcome_message text NOT NULL,
  thought_of_day text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Sample profile data
INSERT INTO profiles (source_code, talents, self_definition, welcome_message, thought_of_day)
VALUES (
  'LIN91',
  452,
  'I''m an explorer. I love spontaneity',
  'Thank you for connecting with me,',
  'Don''t enjoy life, explore it.'
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON profiles
  FOR SELECT
  TO public
  USING (true);