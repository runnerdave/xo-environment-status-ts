import * as React from 'react';
import * as _ from 'lodash';
import './App.css';
import Footer from './Footer';
import InfoPanel from './InfoPanel';
import SpacerRow from './SpacerRow';
import Row from './Row';
import { ButtonItemMatrix, ButtonItemRow } from './ButtonItemTypes';

const data = require('./applicationData.json');

export interface Props {
}

export interface State {
    buttonRows: ButtonItemRow;
    footerContent: string;
    basePanelTitle: string;
    basePanelContent: string[];
}

const BUTTONS_PER_ROW = 2;

class App extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props);
        let panelArray = data['panels'];
        let itemBase = _.find(panelArray, (o) => o.base);
        this.state = {
            buttonRows: data['buttons'],
            basePanelTitle: _.get(itemBase, 'base.title'),
            basePanelContent: _.get(itemBase, 'base.blurb'),
            footerContent: data['footer']
        };
    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron" style={{height: '100vh'}}>
                    <div className="container-fluid">
                        <InfoPanel title={this.state.basePanelTitle} content={this.state.basePanelContent}/>
                        {
                            getRows(this.state.buttonRows, BUTTONS_PER_ROW).map(
                                (row) => {
                                    return (
                                        <div key={row[0].title.toString().split(' ')[0]}>
                                            <Row buttons={row} buttonsPerRow={BUTTONS_PER_ROW}/>
                                            <SpacerRow/>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
                <Footer title={this.state.footerContent}/>
            </div>
        );
    }
}

/**
 * Organizes rows of buttons.
 */
export function getRows(row: ButtonItemRow, buttonsPerRow: number) {
    let matrix: ButtonItemMatrix = [], i, k;
    for (i = 0, k = -1; i < row.length; i++) {
        if (i % buttonsPerRow === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(row[i]);
    }

    return matrix;
}

export default App;
