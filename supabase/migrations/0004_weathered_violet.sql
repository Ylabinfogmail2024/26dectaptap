/*
  # Create MyProfile table

  1. New Table
    - `my_profile`
      - Profile information and customizable content
      - Images and links
      - Configurable messages and data
*/

CREATE TABLE IF NOT EXISTS my_profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_picture_url text NOT NULL,
  header_photo_url text NOT NULL,
  thought_of_day text NOT NULL,
  source_code text NOT NULL,
  talents integer NOT NULL DEFAULT 0,
  self_definition text NOT NULL,
  about_me text[] NOT NULL DEFAULT '{}',
  welcome_message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insert sample data
INSERT INTO my_profile (
  profile_picture_url,
  header_photo_url,
  thought_of_day,
  source_code,
  talents,
  self_definition,
  about_me,
  welcome_message
) VALUES (
  'https://example.com/profile.jpg',
  'https://example.com/header.jpg',
  'Don''t enjoy life, explore it.',
  'LIN91',
  452,
  'I''m an explorer. I love spontaneity',
  ARRAY['Love learning new things', 'Passionate about technology', 'Always up for adventures'],
  'Thank you for connecting with me. Let''s have some interaction to know me, know you :)'
);

ALTER TABLE my_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to my_profile"
  ON my_profile
  FOR SELECT
  TO public
  USING (true);