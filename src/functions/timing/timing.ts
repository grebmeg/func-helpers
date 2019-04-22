import {Timing} from '../../../types';

class TimingAPI {
    _markers: string[] = [];

    constructor() {}

    log() {

    }

    mark() {
        const markerName = `start-${this._markers.length}`;

        this._markers.push(markerName);

        performance.mark(markerName);
    }

    measure(markerStart: string, markerEnd?: string) {
        performance.measure(`perf`, markerStart, markerEnd);
    }

    display() {
        this._markers.forEach((markerStart, index) => {
            if (index < this._markers.length - 1) {
                const markerEnd = this._markers[index + 1];

                this.measure(markerStart, markerEnd);
            }
        });

        const initialMarker = this._markers[0];

        this.measure(initialMarker);

        const measures = performance.getEntriesByName('perf');

        console.table(measures);

        performance.clearMarks();
        performance.clearMeasures();
    }
}

const timing: Timing = new TimingAPI();


export default timing;
