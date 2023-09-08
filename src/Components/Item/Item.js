/**
 
 * This component populates the grid of items that are displayed on the MainPage. 
    It renders each item's image, protein info, and price. 
 */
import React, { Component } from "react";
import "./Item.css";

class Item extends Component{
    constructor(){
        super();
        this._itemClicked = this._itemClicked.bind(this);
    }

    _itemClicked(){
        let name = this.props.item.name.replaceAll(" ", "%20");
        window.location.href = `/item/${name}`;
    }

    render(){
        return(
            <div className="Item" onClick={()=>this._itemClicked()}>
                <img className="item-pic" src={this.props.item.image} alt="product"/>
                <div className="info">
                    <h5>{this.props.item.name}</h5>
                    <p>{this.props.item.protein}g of protein/serving</p>
                    <p>${this.props.item.price}</p>
                </div>
            </div>
        );
    }
}

export default Item;