import React, {Component} from 'react';
import Header from "./component/header";
import Cart from "./component/cart";
import Menu from "./component/menu";
import Product from "./component/product";
import handleLogin from "./component/fetch";

// const sampleData = require('./sampleData')

class Mainapp extends Component {
  state = {
    data: [],
    currentCategoryIndex: null,
    selectedProductIds: [],
    selectedProducts: [], // products
    cartTotal: 0,
    loggin:false,
    
  }
  
   handleData=()=>{
    console.log("login")
    fetch("http://www.esigntech.com.au/2018/cdc_test/public/api/food/all-details", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
   
  }).then(function(response) {
    return response.json();
    
  }).then((data) =>{ 
    console.log("data-main",data)
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
    console.log()
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
    console.log("oncancle")
    
    this.setState({
      
      selectedProductIds: [],
      selectedProducts: [], // products
      cartTotal: 0
    })
  }
  
  render() {
    console.log("banks", this.state.data.banks)
    const {data, currentCategoryIndex, selectedProducts, cartTotal} = this.state;
    console.log("datahere",this.state.data,this.state.datas)
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
