import {TimingSetupConfig, TimingTypes} from '../../../types';

class TimingAPI {
    types = TimingTypes;

    _type: TimingTypes = TimingTypes.PERFORMANCE_API;
    _markers: string[] = [];

    constructor() {}

    setup(config: TimingSetupConfig) {
        const {type} = config;

        if (type in TimingTypes) {
            this._type = type;
        }
    }

    log() {

    }

    makePerformanceMarker() {
        const markerName = `start-${this._markers.length}`;

        this._markers.push(markerName);

        performance.mark(markerName);
    }

    mark() {
        switch (this._type) {
            case TimingTypes.PERFORMANCE_API:
            default:
                return this.makePerformanceMarker();
        }
    }

    measure(markerStart: string, markerEnd?: string) {
        performance.measure(`perf`, markerStart, markerEnd);
    }

    displayPerformanceMarkers() {
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

    display() {
        switch (this._type) {
            case TimingTypes.PERFORMANCE_API:
            default:
                return this.makePerformanceMarker();
        }
    }
}

const timing: TimingAPI = new TimingAPI();


export default timing;
