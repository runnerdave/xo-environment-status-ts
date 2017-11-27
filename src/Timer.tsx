import * as React from 'react';

export interface Props {
    start: Date;
}

export interface State {
    elapsed: number;
}

export type Timelike = number | string;

class Timer extends React.Component<Props, State> {

    /**
     * Converts seconds to hours, minutes and seconds format.
     * @param input seconds
     * @returns {string}
     */
    static toHHMMSS = function (input: number) {
        let sec_num: number = input;
        let hours: Timelike = Math.floor(sec_num / 3600);
        let minutes: Timelike = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds: Timelike = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    };

    private timer: number;

    constructor(props: Props) {
        super(props);
        this.state = {
            elapsed: 0
        };
    }

    componentDidMount() {
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

        // this.timer = setInterval(this.tick.bind(this), 50); or
        this.timer = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    }

    tick() {
        // This function is called every X ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered
        let elapsedTime: number = new Date().getTime() - this.props.start.getTime();
        this.setState({
            elapsed: elapsedTime
        });

    }

    render() {
        let elapsed: number = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        // let seconds:number = (elapsed / 10).toFixed(0);
        let seconds = (elapsed / 10);

        // Although we return an entire <span> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return ( <span> <em>downtime: {Timer.toHHMMSS(seconds)}</em></span> );
    }
}

export default Timer;