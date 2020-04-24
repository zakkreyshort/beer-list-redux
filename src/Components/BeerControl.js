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

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState({masterBeerList: newMasterBeerList, selectedBeer: null})
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
      this.setState({masterBeerList: editedMasterBeerList, editing: false, selectedBeer: null});
  }

  
  handleRestock = (item) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== item.id);
    const newBeerItem = {
      name: item.name,
      description: item.description,
      quantity: 124,
      id: item.id
    }
    const newerList = newMasterBeerList.concat(newBeerItem);
    this.setState({masterBeerList: newerList});
  }
  
  handleAddToCart = (item) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== item.id);
    const newBeerItem = {
      name: item.name,
      description: item.description,
      quantity: parseInt(item.quantity) - 1,
      id: item.id
    }
    const newerList = newMasterBeerList.concat(newBeerItem);
    this.setState({masterBeerList: newerList});
  }
  
  render(){
    console.log(this.state.masterBeerList);
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = <BeerList beerList={this.state.masterBeerList} 
      onBeerSelection={this.handleChangingSelectedBeer}
      onClickingDelete={this.handleDeletingBeer}
      onClickingRestock={this.handleRestock}
      onClickingAddToCart={this.handleAddToCart}/>;
      buttonText = "Add Beer"; 
    }
    return (
      <React.Fragment>
        <div>
          {currentlyVisibleState}
        </div>
        <div style={style2}>
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>  
    );
  }
  
}

const style1 = {

}

const style2 = {
  display: 'inlineBlock'
}

export default BeerControl;