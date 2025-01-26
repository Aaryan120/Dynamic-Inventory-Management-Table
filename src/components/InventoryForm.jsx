import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RxCross2 } from "react-icons/rx";
function InventoryForm({initialData,setShowForm,onSubmit}) {
  const [formData,setFormData] = useState([{
    itemName:'',
    category:'',
    quantity:0,
    price:0,
  }]);

  useEffect(() =>{
    if(initialData){
      setFormData({
        itemName:initialData.itemName,
        category:initialData.category,
        quantity:initialData.quantity,
        price:initialData.price,
      })
    }
  },[initialData])

  const handleAdd = (event) =>{
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      itemName:'',
      category:'',
      quantity:0,
      price:0,
    })
  }
  return (
    <div>
      
      <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm" >
        
        <form onSubmit={handleAdd} className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-white p-6">
        <div className='flex justify-between items-center border-b border-richblack-500 py-2'>
          <p>
            {`${initialData ? "Edit" : "Add"} Item`}
          </p>
          <RxCross2 onClick={() => setShowForm(false)} className='cursor-pointer'/>
        </div>
          <label>
            <p className='text-md font-medium'>Item Name<sup className='text-pink-200'>*</sup></p>
            <input type="text" 
            value={formData.itemName}
            name='itemName'
            onChange={(e) => setFormData({...formData,itemName:e.target.value})}
            className="p-2 border border-richblack-800 rounded-md w-full"
            required/>
          </label>
          <label>
            <p className='text-md font-medium'>Category<sup className='text-pink-200'>*</sup></p>
            <input type="text" 
            value={formData.category}
            name='category'
            onChange={(e) => setFormData({...formData,category:e.target.value})}
            className="p-2 border border-richblack-800 rounded-md w-full"
            required/>
          </label>
          <label>
            <p className='text-md font-medium'>Quantity<sup className='text-pink-200'>*</sup></p>
            <input 
            type="Number" 
            value={formData.quantity}
            name='quantity'
            onChange={(e) => setFormData({...formData,quantity:e.target.value})}
            className="p-2 border border-richblack-800 rounded-md w-full"
            required/>

          </label>
          <label>
            <p className='text-md font-medium'>Price<sup className='text-pink-200'>*</sup></p>
            <input 
            type="Number" 
            name='price'
            value={formData.price}
            onChange={(e) => setFormData({...formData,price:e.target.value})}
            className="p-2 border border-richblack-800 rounded-md w-full"
            required/>

          </label>
          <div className='mt-4 flex flex-row justify-end w-full gap-2'>
              <button onClick={() => setShowForm(false)}
                className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900">
                Cancel
              </button>
              <button type='submit'
              className="cursor-pointer rounded-md bg-blue-200 py-[8px] px-[20px] font-semibold text-richblack-900">
                {initialData ? "Update Item" : "Add Item"}
              </button>

          </div>
          
        </form>
      </div>
    </div>
  )
}

export default InventoryForm