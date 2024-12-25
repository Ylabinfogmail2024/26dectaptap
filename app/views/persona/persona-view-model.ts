import { Observable } from '@nativescript/core';
import { personaCards } from '../../shared/data/persona-cards';
import { PersonaCard } from '../../shared/models/persona-card.model';
import { Timer } from '../../shared/utils/timer';

export class PersonaViewModel extends Observable {
    private _personaCards: PersonaCard[];
    private _selectedCard: PersonaCard | null = null;
    private _timer: Timer;

    constructor() {
        super();
        this._personaCards = personaCards;
        this.set('personaCards', this._personaCards);
        
        this._timer = new Timer(25, (timeLeft: string) => {
            this.set('remainingTime', timeLeft);
        });
        this._timer.start();
    }

    selectCard(card: PersonaCard) {
        this._selectedCard = card;
        this.notifyPropertyChange('selectedCard', this._selectedCard);
    }

    get selectedCard(): PersonaCard | null {
        return this._selectedCard;
    }
}