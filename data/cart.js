 export const cart = [];

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
 