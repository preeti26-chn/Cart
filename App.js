import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{

  constructor(){
    super();
    this.state={
        products: [
            {
             price:99,
            title:'watch',
            quantity:1,
            imag:'',
            id:1
            },
            {
             price:10000,
             title:'Phone',
             quantity:1,
             imag:'',
             id:2
            },
            {
            price:6000,
            title:'Laptop',
            quantity:1,
             imag:'' ,
             id: 3 
            }
        ]
    }
}

handleIncreaseQuantity=(product)=>{
    console.log("Hey! please increase the quantity of", product);
    const {products}=this.state;
    const index=products.indexOf(product);

    products[index].quantity += 1;

    this.setState({
        products:products                      //or simply we can write "products" because key and value are the same.
    })
}

handleDecreaseQuantity=(product)=>{
    console.log("Please decrease the quantity of", product);
    const {products}=this.state;
    const index=products.indexOf(product);

    if(products[index].quantity===0){
        return;
    }

    products[index].quantity -= 1;

    this.setState({
        products
    })
}

handleDeleteProduct=(id)=>{
    const {products} = this.state;

    const items=products.filter((item)=> item.id !== id);     //this filter functions returns the array of product whose id is not equlas to the selected one.
    
    this.setState({
        products:items
    })
} 
getCartCount=()=>{
    const {products}= this.state;

    let count=0;

    products.forEach((product)=>{
       count+=product.quantity;
    })
    return count;
}

getcartTotal=()=>{
    const{products}=this.state;
    
    let cartTotal=0;

    products.map((product)=>{
      cartTotal += cartTotal+product.quantity * product.price
    })

    return cartTotal
}

  render() {
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <h1>Here is the Cart!!</h1>
      <Cart>
        products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
      </Cart>
      <div style={ {padding:10, fontSize:20} }>TOTAL: {this.getcartTotal()}</div>
    </div>
  );
}
}

export default App;
