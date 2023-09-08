/**
 
 * This component is the page that renders when the webpage is first ran.
    It displays all items with filter options. 
 
 */
import React, { Component } from "react";
import "./MainPage.css";
import Item from "../Item/Item";

class MainPage extends Component{

    constructor(props){
        super(props);
        this._keyPressed = this._keyPressed.bind(this);
        this._filterItems = this._filterItems.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleRatioChange = this.handleRatioChange.bind(this);
        this.state = {
            items: null,
            filtersSet: false,
            filteredItems: null,
            searchQuery: "",
            category: "Any",
            ratio: "Any"
        };
    }

    componentDidMount(){
        //fetch api to get items
        fetch("http://localhost:5000/")
        .then(response => response.json())
        .then(data => {
            this.setState({items: data})
        });
    }

    //handle filter changes
    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
        //this._filterItems();
    }

    handleRatioChange= (event) => {
        this.setState({ ratio: event.target.value });
        //this._filterItems();
    }

    _keyPressed(event){
        if(event.key === "Enter"){
          this._filterItems();
        }
    }

    //filter
    _filterItems(){
        let lowerRatio = 0;
        let upperRatio = Infinity;
    
       switch(this.state.ratio){
         case "4":
            upperRatio = 4;
           break;
         case "4.1-7":
            lowerRatio = 4.1;
            upperRatio = 7;
           break;
         case "7.1":
            lowerRatio = 7.1;
            upperRatio = Infinity;
           break;
       }
    
        const filtered = this.state.items.filter(item =>
          // Filtering name
          item.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) &&
           
          // Filtering calories
          item.ratio >= lowerRatio && item.ratio <= upperRatio &&
       
          // Filtering category
          (this.state.category === "Any" || item.category === this.state.category)
        );
    
        this.setState({ filteredItems: filtered});
        this.setState({filtersSet: true});
      }


    render(){
        const { searchQuery } = this.state;
        const itemComponents = this.state.items && this.state.items.map(item => 
            (<Item key={item._id} item={item} />));
        const filteredItemComponents = this.state.filteredItems && this.state.filteredItems.map(item =>
            (<Item key={item._id} item={item} />));

        return(
            <div className="Main">

                <div>
                    <h1>Gym Rat Costco Finds!</h1>
                </div>
                {/* Search by title */}
                <div id="search-by-text">
                    <input
                        type="text"
                        id="text-search-box"
                        placeholder="Search by keyword..."
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                        onKeyDown={this._keyPressed}
                    />
                    <img id="search-icon" src='https://st.depositphotos.com/2868925/3523/v/600/depositphotos_35237803-stock-illustration-search-icon-vector-set.jpg' alt="search icon"/>
                </div>
                <div>
                    <button 
                        id='search-button'
                        onClick={this._filterItems}>
                        Search
                    </button>
                </div>

                <div id="bottom-section">
                    <div id="filters">
                        {/* Categories dropdown */}
                        <div>
                            <h3>Category</h3>
                            <select className="drop-down" onChange={this.handleCategoryChange}>
                            <option value="">All</option>
                            <option value="meal">Meal Items</option>
                            <option value="snack">Snacks</option>
                            </select>
                        </div>
                        {/* Ratios dropdown */}
                        <div id="ratios">
                            <h3>Macro Content</h3>
                            <select className="drop-down" onChange={this.handleRatioChange}>
                            <option value="">All</option>
                            <option value="4">Only Protein</option>
                            <option value="4.1-7">Mostly Protein</option>
                            <option value="7.1">Other Marcos</option>
                            </select>
                        </div>
                        <div>
                            <button 
                                id='search-button'
                                onClick={this._filterItems}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div id="grid">
                        <div id="item-container">
                                {this.state.filtersSet ? filteredItemComponents : itemComponents}
                        </div>
                    </div>
                        
                   
                </div>
            </div>
        );
    }
}

export default MainPage;