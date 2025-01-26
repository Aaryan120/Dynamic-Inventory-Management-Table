import images from "./assets/images.jpg"
import './App.css';
import InventoryTable from './components/InventoryTable';
import { useEffect, useState } from "react";
import InventoryForm from "./components/InventoryForm";

function App() {
  const [inventoryItems,setInventoryItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem("inventory");
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (error) {
      console.log("ERROR GETTING ITEMS");
    }
  });
  const [allCategory,setAllCategory] = useState([]);
  const [category,setCategory] = useState("");
  const [categoryItem,setCategoryItem] = useState([]);
  // const [inputValue,setInputValue] = useState("");
  const [showForm,setShowForm] = useState(false);
  const [initialData,setInitialData] = useState(null);
  const [sortDirection,setSortDirection] = useState("asc");
  // console.log(allCategory)

  const handleAddItems = (data) =>{
    // console.log("Printing Data",data);
    const item = {
      itemName:data.itemName,
      category:data.category,
      price:data.price,
      quantity:data.quantity,
      id:Date.now(),
      lastUpdated:new Date().toLocaleString()
    };
    const category = data.category.toLowerCase();
    const matchingCategories = allCategory.map((category) => category.toLowerCase());
    if(!allCategory.includes(category)){
      setAllCategory((prev) => [...prev,category]);
    }
    setInventoryItems((prev) => {
      const updatedItems = [...prev, item];
      // console.log("Updated Inventory Items:", updatedItems); // Log updated state here
      return updatedItems;
    });
    // console.log(inventoryItems);
    setShowForm(false);
  }

  useEffect(() => {
    const uniqueCategories = [...new Set(inventoryItems.map(item => 
      item.category.toLowerCase()
    ))];
    setAllCategory(uniqueCategories);
    
    // Reset category filter if selected category no longer exists
    if (category && !uniqueCategories.includes(category.toLowerCase())) {
      setCategory("");
    }
  }, [inventoryItems]);
  
  const handleEditItems = (updatedItem) => {
    console.log("UPDATED ITEM",updatedItem);
    if(!initialData) return;
    setInventoryItems((prev) => 
      prev.map((item) =>
        item.id === initialData.id
          ? {
              ...item,
              itemName: updatedItem.itemName, // Match the form field name
              category: updatedItem.category,
              price: updatedItem.price,
              quantity: updatedItem.quantity,
              lastUpdated: new Date().toLocaleDateString(),
            }
          : item
      )
    );
    
    setInitialData(null);
    setShowForm(false);
  };

  const handleDeleteItems = (item) =>{
    setInventoryItems((prev) => prev.filter((currItem) => currItem.id !== item))
  }

  useEffect(() => {
    try {
      localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
    } catch (error) {
      console.error('Error saving items to localStorage:', error);
    }
  }, [inventoryItems]);

  useEffect(() => {
    const filteredItems = category === "" 
      ? inventoryItems 
      : inventoryItems.filter((item) =>
          item.category.toLowerCase() === category.toLowerCase()
        );

    const sortedItems = [...filteredItems].sort((a, b) => {
      const modifier = sortDirection === "asc" ? 1 : -1;
      return (a.quantity - b.quantity) * modifier;
    });

    setCategoryItem(sortedItems);
  }, [category, inventoryItems, sortDirection]);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <div className="border-b border-richblack-700/50">
          <div className="mx-auto w-11/12 max-w-maxContent flex flex-row justify-between items-center h-[50px] mb-2">
            <img src={`${images}`} alt="logo"  className="h-[50px] w-[50px] aspect-square object-cover"></img>
            <div className="text-3xl font-semibold text-black">
              <p>Inventory Management Table</p>
            </div>
            <div>
              <button className="px-[12px] py-[8px] rounded-md bg-black text-richblack-5"
              onClick={() =>{
                setShowForm(true);
                setInitialData(null);
              }}
              >
                Add Items
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-maxContent mt-5">
          <p className="text-2xl font-semibold text-richblack-800 mb-2">Search By Category</p>
          <div className="flex justify-between gap-5">
            <input
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            onKeyDown={(event) => {
              if(event.key === "Enter") ;
            }}
            className="w-full p-3 border border-richblack-800 rounded-md">
            </input>
          </div>
          <div className="flex gap-3 mt-2 justify-between">
            {
              allCategory.length > 0 && <>
              <div className="flex gap-3">
              {
                allCategory.map((category,index)=>{
                  return (
                    <div key={index} className="border bg-blue-100 rounded-3xl w-auto px-3 text-white opacity-2 cursor-pointer">
                      <button onClick={() => {
                        setCategory(category);
                      }}>
                        {category}
                      </button>
                    </div>
                  )
                })
              }
              </div>

              <div className="border bg-blue-100 rounded-3xl w-auto px-3 text-white opacity-2 cursor-pointer ">
                <button onClick={() =>{
                  setCategory("");

                }}>
                  show all
                </button>
              </div>
              </>
            }
            
            
          </div>
        </div>
      {
        categoryItem.length > 0 ? 
        (
          <InventoryTable 
          categoryItem={categoryItem} 
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          onEdit={(item) =>{
            // console.log("PRINTING INITIAL DATA",initialData)
            setInitialData(item);
            setShowForm(true)
          }}
          onDelete={(id) => handleDeleteItems(id)}
        />) :
        (<div className="place-items-center text-4xl font-semibold mt-6"> 
            <p>No Data Found Yet</p>
        </div>)
      }
      </div>
      {
        showForm &&
         <InventoryForm initialData={initialData && {
          itemName: initialData.itemName, // Convert back to form field names
          category: initialData.category,
          price: initialData.price,
          quantity: initialData.quantity
        }}
         setShowForm={setShowForm} 
         onSubmit={initialData ? handleEditItems : handleAddItems}/>
      }
    </div>
  );
}

export default App;
