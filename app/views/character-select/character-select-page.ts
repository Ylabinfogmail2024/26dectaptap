import { NavigatedData, Page } from '@nativescript/core';
import { CharacterSelectViewModel } from './character-select-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new CharacterSelectViewModel();
}

export function onCharacterTap(args) {
    const vm = args.object.page.bindingContext;
    vm.selectCharacter(args.object.id);
}

export function onJoinTap() {
    const frame = require('@nativescript/core').Frame;
    frame.topmost().navigate({
        moduleName: 'views/persona/persona-page',
        transition: {
            name: 'slide'
        }
    });
}

export function onLoginTap() {
    // Implement login logic
    console.log('Login tapped');
}