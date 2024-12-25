import { Observable } from '@nativescript/core';
import { PersonaCard } from '../../../shared/models/persona-card.model';
import { Timer } from '../../../shared/utils/timer';

export class CardDetailViewModel extends Observable {
    private _selectedCard: PersonaCard;
    private _timer: Timer;
    private _currentQuestionIndex: number = 0;
    private _questions: string[] = [
        "What do you think is my strength?",
        "How could I help you with my strength?"
    ];
    private _answers: string[] = [];

    constructor(card: PersonaCard) {
        super();
        this._selectedCard = card;
        this.set('selectedCard', card);
        this.set('quote', "A resilient soul who reframes obstacles as lessons, building solutions from challenges with optimism and determination.");
        this.updateCurrentQuestion();
        
        this._timer = new Timer(25, (timeLeft: string) => {
            this.set('remainingTime', timeLeft);
        });
        this._timer.start();
    }

    updateCurrentQuestion() {
        this.set('currentQuestionNumber', this._currentQuestionIndex + 1);
        this.set('totalQuestions', this._questions.length);
        this.set('currentQuestion', this._questions[this._currentQuestionIndex]);
        this.set('isLastQuestion', this._currentQuestionIndex === this._questions.length - 1);
    }

    getStars(rating: number): boolean[] {
        return Array(5).fill(false).map((_, index) => index < rating);
    }

    onSaveDraft() {
        // Implement draft saving logic
    }

    onNextQuestion() {
        this._answers[this._currentQuestionIndex] = this.get('currentAnswer');
        
        if (this._currentQuestionIndex < this._questions.length - 1) {
            this._currentQuestionIndex++;
            this.updateCurrentQuestion();
            this.set('currentAnswer', '');
        } else {
            this.submitAnswers();
        }
    }

    private submitAnswers() {
        // Navigate to thank you page
        const frame = require('@nativescript/core').Frame;
        frame.topmost().navigate({
            moduleName: 'views/thank-you/thank-you-page',
            transition: {
                name: 'slide'
            }
        });
    }
}