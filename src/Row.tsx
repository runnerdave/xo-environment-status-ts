import * as React from 'react';
import { ButtonItemRow } from './ButtonItemTypes';
import Button from './Button';

export interface Props {
    buttons: ButtonItemRow;
    buttonsPerRow: number;
}

class Row extends React.Component<Props> {

    render() {
        const bootstrapGridArray = (buttonsPerRow: number) => {
            let array = [];
            switch (buttonsPerRow) {
                case 2:
                    array[0] = 4;
                    array[1] = 2;
                    break;
                case 3:
                    array[0] = 2;
                    array[1] = 3;
                    break;
                case 4:
                    array[0] = 2;
                    array[1] = 2;
                    break;
                case 5:
                    array[0] = 2;
                    array[1] = 1;
                    break;
                default:
                    console.error('Only 2 to 5 buttons per row allowed.');
            }
            return array;
        };

        let grid = bootstrapGridArray(this.props.buttonsPerRow);

        const buttonDivs = this.props.buttons.map(
            (button) => {
                return (
                    <div className={`col-md-${grid[0]}`} key={button.title}><Button text={button.title}/>
                    </div>
                );
            }
        );

        return (
            <div className="row">
                <div className={`col-md-${grid[1]}`}/>
                {buttonDivs}
                <div className={`col-md-${grid[1]}`}/>
            </div>
        );
    }

}

export default Row;