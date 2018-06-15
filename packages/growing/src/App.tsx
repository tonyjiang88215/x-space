import * as React from "react";

import { Button } from "element-react";
import "element-theme-default";


import { Grid } from "tj-smart-grid";

console.log('button is', Button);

export class App extends React.Component<any>{
    render(){
        return (
            <div>
                <div>Hello World!</div>
                <Grid />
                <Button type="primary" >112233</Button>
            </div>
        );
    }
}