import { NavigatedData, Page } from '@nativescript/core';
import { PersonaViewModel } from './persona-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new PersonaViewModel();
}

export function onCardTap(args) {
    const vm = args.object.page.bindingContext;
    vm.selectCard(args.object.bindingContext);
}