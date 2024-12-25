export interface SubmissionData {
  what_did_i_do: string;
  my_work: string;
  how_do_i_feel: string;
  what_did_i_learn: string;
}

export interface ChallengeSubmission {
  interaction_code: string;
  challenger_name: string;
  challengee_profile: string;
  challenge_id: string;
  challenge_title: string;
  submission_data: SubmissionData;
  submission_timestamp: string;
  challenge_status: string;
}