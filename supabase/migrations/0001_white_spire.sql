/*
  # Initial Schema Setup

  1. New Tables
    - interactions
      - Stores user interaction data
      - Includes character selection, timestamps, location
    - cards
      - Stores card information
      - Includes front/back content, images
    - answers
      - Stores user responses to questions
      - Links to interaction record
  
  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Cards table
CREATE TABLE IF NOT EXISTS cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  front_image text NOT NULL,
  back_image text NOT NULL,
  skills jsonb NOT NULL DEFAULT '[]',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active cards"
  ON cards
  FOR SELECT
  USING (active = true);

-- Interactions table
CREATE TABLE IF NOT EXISTS interactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  character_name text NOT NULL,
  city text,
  started_at timestamptz DEFAULT now(),
  ended_at timestamptz,
  card_id uuid REFERENCES cards(id),
  signed_up boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create interactions"
  ON interactions
  FOR INSERT
  WITH CHECK (true);

-- Answers table
CREATE TABLE IF NOT EXISTS answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  interaction_id uuid REFERENCES interactions(id) NOT NULL,
  question_number integer NOT NULL,
  answer_text text NOT NULL CHECK (length(answer_text) >= 30),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create answers"
  ON answers
  FOR INSERT
  WITH CHECK (true);

-- Function to update card timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_cards_updated_at
  BEFORE UPDATE ON cards
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();