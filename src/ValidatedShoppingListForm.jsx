import  { useState } from 'react';

function ValidatedShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: "", quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);
    const handleChange = (e) => {
        if(e.target.name === "product")
        {
            validate(e.target.value);
        }
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = (product) => {
        if(product.length === 0){
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }


    const handleSubmit = (e) => {        
        e.preventDefault();
        if(productIsValid){
            addItem(formData);
            setFormData({product: "", quantity: 0});
            validate("");
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input 
                type="text" 
                placeholder="product name" 
                name="product"
                id="product" 
                onChange={handleChange}
                value={formData.product}
                />
            {!productIsValid && <p style={{color: "red"}}>Product name cannot be empty</p>}
            <label htmlFor="quantity">Quantity</label>
            <input 
                type="number" 
                placeholder="1" 
                name="quantity"
                id="quantity" 
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    );

}

export default ValidatedShoppingListForm;