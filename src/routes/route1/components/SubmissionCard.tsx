import { ChallengeSubmission } from '../types/submission';
import { format } from 'date-fns';

interface SubmissionCardProps {
  submission: ChallengeSubmission;
}

export default function SubmissionCard({ submission }: SubmissionCardProps) {
  const formattedDate = format(new Date(submission.submission_timestamp), 'MMM d, yyyy');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{submission.challenge_title}</h3>
        <p className="text-sm text-gray-500">Submitted on {formattedDate}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">What I Did:</h4>
          <p className="text-gray-700">{submission.submission_data.what_did_i_do}</p>
        </div>

        {submission.submission_data.my_work && (
          <div>
            <h4 className="font-semibold mb-2">My Work:</h4>
            <img 
              src={submission.submission_data.my_work} 
              alt="Submission work" 
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div>
          <h4 className="font-semibold mb-2">How I Feel:</h4>
          <p className="text-gray-700">{submission.submission_data.how_do_i_feel}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">What I Learned:</h4>
          <p className="text-gray-700">{submission.submission_data.what_did_i_learn}</p>
        </div>
      </div>
    </div>
  );
}