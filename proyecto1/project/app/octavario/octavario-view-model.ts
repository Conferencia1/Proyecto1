import { Observable } from '@nativescript/core';

interface CalendarDay {
    date: string;
    day: string;
    isActive: boolean;
}

export class OctavarioViewModel extends Observable {
    private _days: CalendarDay[];

    constructor() {
        super();
        this._days = [
            { date: '18', day: 'Sáb', isActive: true },
            { date: '19', day: 'Dom', isActive: false },
            { date: '20', day: 'Lun', isActive: false },
            { date: '21', day: 'Mar', isActive: false },
            { date: '22', day: 'Mié', isActive: false },
            { date: '23', day: 'Jue', isActive: false },
            { date: '24', day: 'Vie', isActive: false },
            { date: '25', day: 'Sáb', isActive: false }
        ];
    }

    get days(): CalendarDay[] {
        return this._days;
    }
}