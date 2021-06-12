import React from 'react';

const CartItem=(props)=>{
    
       // this.increaseQuantity= this.increaseQuantity.bind(this);    --> "Binding"

   /* testing(){
        const promise= new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('done');
            }, 5000);
        })

    promise.then(()=> {
            //setState() acts like a sybchronous call here
            this.setState({quantity:this.state.quantity+10});

            this.setState({quantity:this.state.quantity+10});

            this.setState({quantity:this.state.quantity+10});

            console.log('state', this.state);
    });
}
    increaseQuantity=()=>{                                        //-->Alternate way to Bind using arrow functions
            //this.state.quantity+=1;                           // by this quantity will only increase on console not on UI
            //console.log('this', this.state);

            //so, we have to set the state of quantity--> Form 1
           // {*/  //this.setState({
            //    quantity: this.state.quantity+1                               // called shwallow merging
           // }.()=>{
            //   console.log('this.state', this.state);
          // });  

            // Form 2 of shallow merging
            /* this.setState((prevState)=>
            {
                return{
                quantity:prevState.quantity+1
                }
            }, ()=>{                                               //callback function here because setState() is asynchronous
                console.log('this.state', this.state);
            }
            );
        }

    decreaseQuantity=()=>{                            // funstion for decreasing the item

        const {quantity} = this.state;                 //object destructuring

        if(quantity===0){
            return;
        }
       // console.log('this', this.state);

        this.setState((prevState)=>
        {
            return{
                quantity: prevState.quantity-1
            }
        }, ()=>{                                              //callback function here because setState() is asynchronous
            console.log('this.state', this.state);
        }
        );
            
    } */


        const{price, title, quantity}=props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct}=props;
        
        return(
        <div className="cart-item">
           {props.jsx}
            <div className="left-block">
             <img alt="error" style={styles.image}/>
            </div>
            <div className="right-clock">
                <div style={ {fontFamily:'sans-serif'}}>{title}</div>
                <div style={ {color:'#777'}}>Rs {price}</div>
                <div style={ {color:'#777'}}>quantity:{quantity}</div>
                <div className="cart-item-actions">
                    {/*Buttons*/}
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/3303/3303893.png" onClick={()=> onIncreaseQuantity(product)}/>
                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/334/334047.png" onClick={()=> onDecreaseQuantity(product)}/>
                    <img alt="delete" className="action-icons" src="https://as1.ftcdn.net/jpg/03/46/38/40/500_F_346384092_9IjWPjfxbFo5lySkTTZkZU8xpK306oQ6.jpg" onClick={()=> onDeleteProduct(product.id)}/>
                </div>
            </div>
            </div>
        );
        }


const styles={
    image:{
         height:150,
         width:110,
         borderRadius:4,
         background:'#ccc'
    }
}

export default CartItem;