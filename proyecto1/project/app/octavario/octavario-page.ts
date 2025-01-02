import { EventData, Page } from '@nativescript/core';
import { OctavarioViewModel } from './octavario-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new OctavarioViewModel();
}