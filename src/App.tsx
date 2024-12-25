import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuestionsProvider } from './contexts/QuestionsContext';
import { EvaluationProvider } from './routes/route1/contexts/EvaluationContext';
import { QuestionEvaluationProvider } from './routes/route2/contexts/QuestionEvaluationContext';
import CharacterSelect from './pages/CharacterSelect';
import WelcomeScreen from './pages/WelcomeScreen';
import PersonaPage from './pages/PersonaPage';
import CardDeck from './pages/CardDeck';
import CardDetail from './pages/CardDetail';
import CardBackDetail from './pages/CardBackDetail';
import CardQuestions1 from './pages/CardQuestions1';
import CardQuestions2 from './pages/CardQuestions2';
import ThankYou from './pages/ThankYou';
import QuestionDeck from './routes/route2/pages/QuestionDeck';
import AnswerPage from './routes/route2/pages/AnswerPage';
import QuestionEvaluation1 from './routes/route2/pages/QuestionEvaluation1';
import QuestionEvaluation2 from './routes/route2/pages/QuestionEvaluation2';
import ChallengeDeck from './routes/route1/pages/ChallengeDeck';
import ChallengeSubmissionPage from './routes/route1/pages/ChallengeSubmissionPage';
import ChallengeEvaluation1 from './routes/route1/pages/ChallengeEvaluation1';
import ChallengeEvaluation2 from './routes/route1/pages/ChallengeEvaluation2';
import ChallengePaybackPage from './routes/route1/pages/ChallengePaybackPage';

export default function App() {
  return (
    <BrowserRouter>
      <QuestionsProvider>
        <EvaluationProvider>
          <QuestionEvaluationProvider>
            <Routes>
              <Route path="/" element={<CharacterSelect />} />
              <Route path="/welcome" element={<WelcomeScreen />} />
              <Route path="/persona" element={<PersonaPage />} />
              <Route path="/card-deck" element={<CardDeck />} />
              <Route path="/question-deck" element={<QuestionDeck />} />
              <Route path="/answers" element={<AnswerPage />} />
              <Route path="/question-evaluation/1" element={<QuestionEvaluation1 />} />
              <Route path="/question-evaluation/2" element={<QuestionEvaluation2 />} />
              <Route path="/card/:id" element={<CardDetail />} />
              <Route path="/card/:id/back" element={<CardBackDetail />} />
              <Route path="/card/:id/questions/1" element={<CardQuestions1 />} />
              <Route path="/card/:id/questions/2" element={<CardQuestions2 />} />
              <Route path="/thank-you" element={<ThankYou />} />
              {/* Challenge Routes */}
              <Route path="/challenge-deck" element={<ChallengeDeck />} />
              <Route path="/challenge/:id/submissions" element={<ChallengeSubmissionPage />} />
              <Route path="/challenge/:id/evaluate/1" element={<ChallengeEvaluation1 />} />
              <Route path="/challenge/:id/evaluate/2" element={<ChallengeEvaluation2 />} />
              <Route path="/challenge/:id/payback" element={<ChallengePaybackPage />} />
            </Routes>
          </QuestionEvaluationProvider>
        </EvaluationProvider>
      </QuestionsProvider>
    </BrowserRouter>
  );
}