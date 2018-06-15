import * as React from "react";

import { Menu } from "element-react";
import "element-theme-default";

import { Grid } from "tj-smart-grid/src/Grid";

import "./scss/layout.scss";

export class App extends React.Component<any>{
    render(){
        return (
            <div className="layout">
                <div className="left">
                    <Menu mode="vertical" defaultActive="1">
                        <Menu.Item index="1" >smart-grid</Menu.Item>
                    </Menu>
                </div>
                <div className="center">
                    <Grid />
                </div>
            </div>
        );
    }
}