import { Observable } from '@nativescript/core';
import { characters } from '../../shared/data/characters';
import { Character } from '../../shared/models/character.model';

export class CharacterSelectViewModel extends Observable {
    private _characters: Character[];
    private _selectedCharacter: Character | null = null;

    constructor() {
        super();
        this._characters = characters;
        this.set('characters', this._characters);
    }

    selectCharacter(characterId: string) {
        this._selectedCharacter = this._characters.find(c => c.id === characterId) || null;
        this.notifyPropertyChange('selectedCharacter', this._selectedCharacter);
    }

    get selectedCharacter(): Character | null {
        return this._selectedCharacter;
    }
}