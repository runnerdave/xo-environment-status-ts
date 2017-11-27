import * as React from 'react';
import { Datelike } from './EventItemType';

export interface Props {
    history: Datelike[];
}

const HistoryBlurb = (props: Props) => {

    const formatDowntimeHistoryEvent = (event: Datelike) => {
        return (event instanceof Date) ? `Down at: ${event.toLocaleString()}` : event;
    };

    const downtimeEvents = props.history.map(downtimeEvent => {
        return <li key={downtimeEvent.valueOf()}>{formatDowntimeHistoryEvent(downtimeEvent)}</li>;
    });

    return (
        <ul>
            {downtimeEvents}
        </ul>
    );
};

export default HistoryBlurb;