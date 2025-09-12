 export let cart = [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
 },{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2
 }];

 export function AddToCart(productId) {
   let matchingItem;
   cart.forEach((cartItem) => {
     if (productId === cartItem.id) {
       matchingItem = cartItem;
     }
   })
   if (matchingItem) {
     cartItem.quantity += 1;
   } else {
     cart.push({
       productId: productId,
       quantity: 1
     });
   }
 }
   
 
 export function updateCartQuantity() {
   let cartQuantity = 0;
 
   cart.forEach((cartItem) => {
     cartQuantity += cartItem.quantity;
   });
 
   document.querySelector('.cart-quantity').innerHTML = cartQuantity;
 }

 export function removefromCart(productId) {
  const newCart=[];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
 }
 