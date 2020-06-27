export interface IEvent {
    name: string,
    start: string | Date,
    end: string | Date
}

export class Event implements IEvent {
    constructor(
        public name: string,
        public start: string | Date,
        public end: string | Date
    ) { }
}
