import React from 'react';

const Navbar=(props)=>{
    
           return(
               <div style={styles.nav}>
                   <div style={styles.cartIconContainer}>
                       <span style={styles.cartCount}>{props.count}</span>
                       <img style={ styles.cartIcon} src="https://img-premium.flaticon.com/png/512/1170/1170678.png?token=exp=1623477688~hmac=ef95a8d7224ffc831451117c49488424" alt="cart Icon"></img>
                   </div>
               </div>
           );
       }


const styles={
    cartIcon:{
         height:32,
         marginRight:20
         
    },
    nav:{
        height:70,
        background:'cyan',
        display:'flex',
        justifyContengt:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px, 8px',
        position:'absolute',
        right:0,
        top:-9
    }
}

export default Navbar;