import React from "react";
import BeerList from "./Beer/BeerList";
import NewBeerForm from "./Beer/NewBeerForm";
import BeerDetail from "./Beer/BeerDetail";
import EditBeerForm from "./Beer/EditBeerForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Beer from "./Beer/Beer";

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
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
    const selectedBeer = this.props.masterBeerList[id];
    this.setState({selectedBeer: selectedBeer});
  }
  
  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = newBeer;
    const action = {
      type: 'ADD_BEER',
      id: id,
      name: name,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_BEER',
      id: id
    }
    dispatch(action);
    this.setState({selectedBeer: null});
  }

  handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = beerToEdit;
    const action = {
      type: 'ADD_BEER',
      id: id,
      name: name,
      description: description,
      quantity, quantity,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedBeer: null
    });
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
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditBeerForm beer = {this.state.selectedBeer} onEditBeer = {this.handleEditingBeerInList}/>
      buttonText = "Return to beer list";
    }
    else if (this.state.selectedBeer != null){
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer} />
      buttonText= "Return to Beer List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} onClickingEdit = { this.handleEditClick }/>;
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = <BeerList beerList={this.props.masterBeerList} 
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


const style2 = {
  display: 'inlineBlock'
}

BeerControl.propTypes = {
  masterBeerList: PropTypes.object
};


const mapStateToProps = state => {
  return {
    masterBeerList: state
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;