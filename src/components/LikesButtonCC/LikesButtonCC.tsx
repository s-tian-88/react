// для работы с состоянием в class-based коспоненте обьявляется свойство state

import { Component } from "react";

class ClickButton extends Component {
    // Способ 1
    state = {click: 0};

    // Способ 2
    constructor(props: any) {
        super(props);
        this.state= {click: 0};
    }
}


export { ClickButton }
