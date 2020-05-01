import React from "react";
import BeerList from "./Beer/BeerList";
import NewBeerForm from "./Beer/NewBeerForm";
import BeerDetail from "./Beer/BeerDetail";
import EditBeerForm from "./Beer/EditBeerForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedBeer: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  
  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    this.setState({selectedBeer: null})
  }


  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.props.masterBeerList[id];
    this.setState({selectedBeer: selectedBeer});
  }
  
  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addBeer(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    }
   
  

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBeer(id);
    dispatch(action);
    this.setState({selectedBeer: null});
  }

  handleEditingBeerInList = (beerToEdit) => {
    const action = a.editBeer(beerToEdit);
    this.props.dispatch(action);
    this.setState({
      editing: false,
      selectedBeer: null
    })
  }

  
  handleRestock = (item) => {
    const newBeerList = this.state.masterBeerList.filter(beer => beer.id !== item.id);
    const newBeerItem = {
      name: item.name,
      description: item.description,
      quantity: 124,
      id: item.id
    }
    const action = newBeerList.concat(newBeerItem);
    this.props.dispatch(action);
  }

  
  
  handleAddToCart = (beerToUpdate) => {
    if (beerToUpdate.quantity > 0) {
      const newBeer = {
        name: beerToUpdate.name,
        description: beerToUpdate.description,
        quantity: beerToUpdate.quantity - 1,
        id: beerToUpdate.id,
      }
      const action = a.editBeer(newBeer);
      this.props.dispatch(action);
    }
    // const newBeerList = this.state.masterBeerList.filter(beer => beer.id !== item.id);
    // const newBeerItem = {
    //   name: item.name,
    //   description: item.description,
    //   quantity: parseInt(item.quantity) - 1,
    //   id: item.id
    // }
    // const newerList = newBeerList.concat(newBeerItem);
    // this.setState({masterBeerList: newerList});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.props.editing) {
      currentlyVisibleState = <EditBeerForm beer = {this.props.selectedBeer} onEditClick = {this.handleEditingBeerInList}/>
      buttonText = "Return to beer list";
    }
    else if (this.state.selectedBeer != null){
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer}  />
      buttonText= "Return to Beer List";
    }
    else if (this.props.formVisibleOnPage) {
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
          {currentlyVisibleState}
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
  masterBeerList: PropTypes.object,
  selectedBeer: PropTypes.func,
  formVisibleOnPage: PropTypes.bool
};


const mapStateToProps = state => {
  return {
    masterBeerList: state.masterBeerList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedBeer: state.selectedBeer
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;