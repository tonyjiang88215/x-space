import * as React from "react";

export interface GridProperties{
    options?: any
}

export class Grid extends React.Component<GridProperties>{
    render(){
        return (
            <div>Hello~ This is Grid</div>
        );
    }
}