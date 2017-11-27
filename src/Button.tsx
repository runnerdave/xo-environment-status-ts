import * as React from 'react';
import Timer, { Timelike } from './Timer';
import HistoryBlurb from './HistoryBlurb';
import { Datelike } from './EventItemType';

export interface Props {
    text: string;
}

export interface State {
    isUp: boolean;
    text: string;
    timerValue: Timelike | JSX.Element;
    downTimeEvents: Datelike[];
    showHistory: boolean;
}

class Button extends React.Component<Props, State> {
    static timer() {
        return (
            <Timer start={new Date()}/>
        );
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            isUp: true,
            text: props.text,
            timerValue: '',
            downTimeEvents: [],
            showHistory: false
        };
    }

    handleClick() {
        let timerValue: Timelike | JSX.Element = 0;
        let downTimeEvents = this.state.downTimeEvents;
        if (this.state.isUp) {
            timerValue = Button.timer();
            downTimeEvents.push(new Date());
        } else {
            const lastDownTimeEvent = downTimeEvents[downTimeEvents.length - 1];
            downTimeEvents[downTimeEvents.length - 1] =
                `${lastDownTimeEvent} - outage duration: ${Timer.toHHMMSS(calculateDurationInSeconds(new Date(), lastDownTimeEvent as Date))}`;
        }
        this.setState({
            isUp: !this.state.isUp,
            timerValue,
            downTimeEvents
        });
    }

    handleHoverOver() {
        const downTimeHistory = this.state.downTimeEvents;
        if (downTimeHistory.length > 0) {
            this.setState({showHistory: true});
        }
    }

    handleHoverOut() {
        if (this.state.showHistory) {
            this.setState({showHistory: false});
        }
    }

    render() {
        return (
            <div>
                <button
                    className={`btn btn-${this.state.isUp ? 'success' : 'danger'} btn-block`}
                    onClick={() => this.handleClick()}
                    onMouseOver={() => this.handleHoverOver()}
                    onMouseLeave={() => this.handleHoverOut()}
                >
                    {this.state.text} {this.state.timerValue}
                </button>
                <div className={` ${this.state.showHistory ? 'button-hover-history panel panel-danger' : 'hidden'}`}>
                    <div className={'panel-heading'}>{this.props.text}</div>
                    <div className={'panel-body'}>
                        <HistoryBlurb history={this.state.downTimeEvents}/>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Calculates the duration in seconds between two dates.
 * @param date1
 * @param date2
 * @returns {number}
 */
export function calculateDurationInSeconds(date1: Date, date2: Date) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / 1000);
}

export default Button;