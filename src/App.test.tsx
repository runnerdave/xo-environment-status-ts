import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, {getRows} from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

it('returns 1 row with 2 buttons', () => {
    const buttons = [{
        "id": "ODBXSIT1",
        "title": "OBDX SIT1"
    },
        {
            "id": "ODBXSIT4",
            "title": "OBDX SIT4"
        }];
    let array:{}[] = getRows(buttons, 2);
    expect(array.length).toBe(1);
});

it('returns 2 rows with 2 buttons', () => {
    const buttons = [{
        "id": "ODBXSIT1",
        "title": "OBDX SIT1"
    },
        {
            "id": "ODBXSIT4",
            "title": "OBDX SIT4"
        },
        {
            "id": "DCOSIT1",
            "title": "DCO SIT1"
        },
        {
            "id": "DCOSIT4",
            "title": "DCO SIT4"
        }];
    let array = getRows(buttons, 2);
    expect(array.length).toBe(2);
});

it('returns 2 rows with 2 and 1 buttons', () => {
    const buttons = [{
        "id": "ODBXSIT1",
        "title": "OBDX SIT1"
    },
        {
            "id": "ODBXSIT4",
            "title": "OBDX SIT4"
        },
        {
            "id": "DCOSIT1",
            "title": "DCO SIT1"
        }];
    let array = getRows(buttons, 2);
    expect(array.length).toBe(2);
});

it('returns 1 rows with 4 buttons', () => {
    const buttons = [{
        "id": "ODBXSIT1",
        "title": "OBDX SIT1"
    },
        {
            "id": "ODBXSIT4",
            "title": "OBDX SIT4"
        },
        {
            "id": "DCOSIT1",
            "title": "DCO SIT1"
        },
        {
            "id": "DCOSIT4",
            "title": "DCO SIT4"
        }];
    let array = getRows(buttons, 4);
    expect(array.length).toBe(1);
});