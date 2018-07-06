import React, {Component} from 'react';
import Header from "./component/header";
import Cart from "./component/cart";
import Menu from "./component/menu";
import Product from "./component/product";
import {addtocart} from "./component/fetch";

class Mainapp extends Component {
  state = {
    data: [],
    currentCategoryIndex: null,
    selectedProductIds: [],
    selectedProducts: [], // products
    cartTotal: 0,
    loggin:false,
    hold:[],
    tax:13,
    note:"note",
    bankSelected:"sbi"
  }

  
  
   handleData=()=>{
          fetch("http://www.esigntech.com.au/2018/cdc_test/public/api/food/all-details", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        
        }).then(function(response) {
          return response.json();
          
        }).then((data) =>{ 
        
          this.setState({
            data:data.data,
          
              loggin:true,
          })
        }
        )
        .catch(error => {
        console.log(error)
        }) 
 }




  componentDidMount(){
   
    this.handleData();
   
  }


  onCategorySelect = index => this.setState({currentCategoryIndex: index})
  getItemIndex = item => this.state.selectedProductIds.indexOf(item.id);
  onProductSelect = item => {
    let selectedIds = this.state.selectedProductIds;
    let selectedItems = this.state.selectedProducts;
    let index =this.getItemIndex(item);
    let cartTotal = this.state.cartTotal;
    if(index !== -1) {
      selectedItems[index].count++;
      selectedItems[index].totalPrice += parseInt(selectedItems[index].price);
      cartTotal += parseInt(selectedItems[index].price);
    } else {
      let itemObj = {
        ...item, 
        count: 1,
        totalPrice: parseInt(item.price)
      }
      cartTotal += parseInt(item.price);
      selectedItems.push(itemObj);
      selectedIds.push(item.id);
    }
    this.setState({selectedProductIds: selectedIds, selectedProducts: selectedItems, cartTotal});
  }
  
  onHoldclick=()=>{
    
    // selectedProducts,
    let holditem=this.state.selectedProducts
    this.setState({
      hold:[holditem,...this.state.hold],

    })
    this.onCancel();
  }
  onChangeItem = direction => item => {
    let index = this.getItemIndex(item);
    let selectedIds = this.state.selectedProductIds;
    let selectedProducts = this.state.selectedProducts;
    let currentItem = selectedProducts[index];
    currentItem.count = currentItem.count + direction;
    currentItem.totalPrice = currentItem.totalPrice + (direction * parseInt(currentItem.price));
    let cartTotal = this.state.cartTotal + (direction * parseInt(currentItem.price));
    selectedProducts[index] = currentItem;
    if(currentItem.count === 0) {
      selectedIds.splice(index, 1);
      selectedProducts.splice(index, 1);
    }
    this.setState({selectedProductIds: selectedIds, selectedProducts,cartTotal})
  }
  onClearItem = item => {
    let index = this.getItemIndex(item);
    let selectedIds = this.state.selectedProductIds;
    let selectedProducts = this.state.selectedProducts;
    let cartTotal = this.state.cartTotal;
    cartTotal -= item.totalPrice;
    selectedIds.splice(index, 1);
    selectedProducts.splice(index, 1);
    this.setState({cartTotal, selectedProductIds: selectedIds, selectedProducts});
  }
  onCancel=()=>{
    this.setState({
      selectedProductIds: [],
      selectedProducts: [], // products
      cartTotal: 0
    })
  }
  
  onCardpay=()=>{
      console.log("card pay")
  }
  onnoteClicked=()=>{
    console.log("onnoteclicked")
  }


  render() {
    const {data, currentCategoryIndex, selectedProducts, cartTotal} = this.state;
    if(!this.state.loggin){
      return(
        <h1>Loading.....</h1>
      )
    }
    return (

      <div>
        <Header/>
        <Menu 
          data={this.state.data.cats}
          onSelect={this.onCategorySelect}
        />
        <div className="item-menu">
          <div className="product">
            <Product 
              data={data.items[currentCategoryIndex]}
              onSelect={this.onProductSelect}
            />
          </div>
          <div className="cart">
            <Cart 
           onCardpay={this.onCardpay}
           onnoteClicked={this.onnoteClicked}
            hold={this.state.hold}
              onHoldclick={this.onHoldclick}
              banks={this.state.data.banks}
              className="cart"
              onCancel={this.onCancel}
              data={selectedProducts}
              onReduce={this.onChangeItem(-1)}
              onAdd={this.onChangeItem(1)}
              cartTotal={cartTotal}
              onClear={this.onClearItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainapp;
