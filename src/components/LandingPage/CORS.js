import React, { useState } from "react";
import {Button} from "react-bootstrap";


class Cors extends  React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
      fetch("https://pure-beach-98773.herokuapp.com/v1/cars",{mode: 'cors'})
      .then(res => res.json())
      
    }
    render() {
        return (
            <div>
                <Button variant="success"  onClick={this.onClick}>Check CORS</Button>
            </div>
        )
    }
}
export default Cors;
