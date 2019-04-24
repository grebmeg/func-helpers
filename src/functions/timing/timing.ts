import {
    Timing
} from '../../../types';

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
        const markerStart = this._markers[0];

        this._markers.forEach((marker, index) => {
            if (index < this._markers.length) {
                const markerEnd = this._markers[index + 1];

                this.measure(markerStart, markerEnd);
            }
        });

        const measures = performance.getEntriesByName('perf');

        console.table(
            measures.map((measure, index) => {
                const {duration} = measure;
                let delta = duration;

                if (index > 0) {
                    const {duration: precedingDuration} = measures[index - 1];

                    delta = duration - precedingDuration;
                }

                return {
                    duration,
                    delta
                };
            })
        );

        performance.clearMarks();
        performance.clearMeasures();
    }
}

const timing: Timing = new TimingAPI();


export default timing;
