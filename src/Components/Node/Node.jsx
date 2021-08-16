import React, {Component} from 'react';
import './NodeStyle.css'

class Node extends Component{
    render(){
        const {
            index,
            ElementValue,
            onSelection,
            width,
            Sorted
        } = this.props;
        const ClassNameSelected = onSelection ? "node-selected" : Sorted ? "node-Sorted" : "";
        const myStyle = {
            width: width,
            height: ElementValue * 2
        }
        return(
            <div
                id = {'node-'+index}
                className = {'node '+ClassNameSelected}
                style={myStyle}
            ></div>
        )
    }
   
}


export default Node;