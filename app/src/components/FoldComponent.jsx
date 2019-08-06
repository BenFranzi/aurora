import React from 'react';
import {Fold, Header} from "../styled";

export default class FoldComponent extends React.PureComponent {
    render() {

        const mobile = false;

        return (
            <Fold>
                <Header fold>Hello</Header>
                <Header fold sub>This is some subtext.</Header>
            </Fold>
        )
    }
}
