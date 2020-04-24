import React from "react";
import BeerList from "./Beer/BeerList";
import NewBeerForm from "./Beer/NewBeerForm";

class BeerControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterBeerList: [],
            formVisibleOnPage: false,
            selectedBeer: null,
            editing: false
        };
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }


    handleClick = () => {
        if (this.state.selectedBeer != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedBeer: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleChangingSelectedBeer = (id) => {
        const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
        this.setState({selectedBeer: selectedBeer});
    }

    handleAddingNewBeerToList = (newBeer) => {
        const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
        this.setState({masterBeerList: newMasterBeerList, formVisibleOnPage: false});
    }

    handleDeletingMerch = (id) => {
        const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !==id);
        this.setState({masterBeerList: newMasterBeerList, selectedBeer: null});
    }

    handleEditingBeerInList = (beerToEdit) => {
        const editiedMasterBeerList = this.state.masterBeerList
            .filter(beer => beer.id !== this.state.selectedBeer.id)
            .concat(beerToEdit);
            this.setState({masterBeerList: editiedMasterBeerList, editing: false, selectedBeer: null});
    }

    handleRestock = (drink) => {
        const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== drink.id);
        const newDrinkItem = {
            name: drink.name,
            type: drink.type,
            description: drink.description,
            quantity: parseInt(drink.quantity) + 1,
            id: drink.id
        }
        const newerList = newMasterBeerList.concat(newDrinkItem)
        this.setState({masterBeerList: newerList});
    }

    render(){
        
    }
}