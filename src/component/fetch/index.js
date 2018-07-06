import react from "react";


let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  
const addtocart=()=>{

           fetch("http://www.esigntech.com.au/2018/cdc_test/public/api/food/add-to-cart", {
           method: 'post',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             // password:auth.password,
             // email:auth.email,
           
             on_date: date,
             tax: 13,
             discount: "12345",
             pay_by: "cash",
             is_paid: "1",
             item_id: [
                 "1",
                 "2"
             ],
             "type": [
                 "package",
                 "menu"
             ],
             quantity: [
                 "2",
                 "3"
             ],
             price: [
                 "123",
                 "123"
             ],
             bank_name: "standard charter",
             seller_id: "123",
             sub_total: "1234"

           }),
         }).then(function(response) {
           return response.json();
           
         }).then((data) =>{ 
           console.log("add to cart",data)
        
         }
         )
         .catch(error => {
         console.log(error)
         }) 
}






export {addtocart}