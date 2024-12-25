import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ChallengeSubmission } from '../types/submission';
import { challenges } from '../data/challenges';
import submissionData from '../data/challenge_submissions.json';
import SubmissionCard from '../components/SubmissionCard';
import NoSubmissionsMessage from '../components/NoSubmissionsMessage';
import EvaluateButton from '../components/EvaluateButton';
import Timeline from '../../../components/Timeline';

export default function ChallengeSubmissionPage() {
  const { id } = useParams();
  const location = useLocation();
  const character = location.state?.character;
  const [submissions, setSubmissions] = useState<ChallengeSubmission[]>([]);
  const challenge = challenges.find(c => c.id === id);

  useEffect(() => {
    // Filter submissions for this challenge by LIN91
    const filteredSubmissions = submissionData.filter(
      submission => 
        submission.challenge_id === id && 
        submission.challengee_profile === 'LIN91'
    );
    setSubmissions(filteredSubmissions);
  }, [id]);

  if (!challenge) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <img src={character?.image} alt="Character" className="w-8 h-8 rounded-full" />
            <span>Hello, {character?.name}!</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {challenge.title} Submissions
          </h2>

          {submissions.length > 0 ? (
            <>
              {submissions.map((submission) => (
                <SubmissionCard 
                  key={submission.interaction_code} 
                  submission={submission} 
                />
              ))}
              <div className="mt-6">
                <EvaluateButton challengeId={challenge.id} character={character} />
              </div>
            </>
          ) : (
            <NoSubmissionsMessage />
          )}
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={2} route="challenge" />
      </div>
    </div>
  );
}