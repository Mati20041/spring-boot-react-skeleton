import * as React from "react";

export interface HelloProps { number: number; }

export class Board extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <p>This is a board {this.props.number}</p>
            </div>
        );
    }

}
