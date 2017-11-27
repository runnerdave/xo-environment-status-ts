import * as React from 'react';
import * as _ from 'lodash';

export interface Props {
    title: string;
    content: string[];
}

const InfoPanel = (props: Props) => {
    return (
        <div className={'panel panel-info'}>
            <div className={'panel-heading'}>{props.title}</div>
            <div className={'panel-body'}>
                <ul>
                    {props.content.map((line: string) => {
                        return (
                            <li key={_.uniqueId('prefix-')}>{line}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default InfoPanel;