import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import { FaArrowDown19, FaArrowDown91 } from "react-icons/fa6";
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function InventoryTable({categoryItem,sortDirection,setSortDirection,onEdit,onDelete}) {
  return (
    <>
      <div className='mx-auto w-11/12 max-w-maxContent mt-5'>
        <Table>
          <Thead >
            <Tr className='border-b border-richblack-100 bg-richblack-200 py-5 rounded-sm'>
              <Th>
                Name
              </Th>
              <Th>
                Category
              </Th>
              <Th>
                Quantity
                <button onClick={() => setSortDirection((prev) => prev === "asc" ? "desc" : "asc")}>
                  {
                    sortDirection === "asc" ? <FaArrowDown19></FaArrowDown19> : <FaArrowDown91></FaArrowDown91>
                  }
                </button>
              </Th>
              <Th>
                Price
              </Th>
              <Th>
                Last Updated
              </Th>
              <Th>
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
              {
                categoryItem?.map((item,index) =>{
                  return (
                    <Tr key={index} className={`${item.quantity < 10 ? "bg-pink-100/40" : "bg-white"} place-items-center py-2`}>
                        <Td className='place-items-center'>
                        <p>{item.itemName}</p>
                        </Td>
                        <Td className='place-items-center'>
                        <p>{item.category}</p>
                        </Td>
                        <Td className='place-items-center'>
                          
                            <p>{item.quantity}</p>
            
                        </Td>
                        <Td className='place-items-center'>
                        <p>{item.price}</p>
                        </Td>
                        <Td className='place-items-center'>
                        <p>{item.lastUpdated}</p>
                        </Td>
                        <Td className='place-items-center'>
                          <div className="flex gap-2">
                            <button onClick={() => onEdit(item)}
                              className="text-blue-600 hover:text-blue-900">
                            <FaRegEdit/>
                            </button>
                            <button onClick={() => onDelete(item.id)}
                              className="text-pink-500 hover:text-pink-700">
                            <RiDeleteBinLine/>
                            </button>
                          </div>
                        </Td>
                    </Tr>
                  )
                })
              }
          </Tbody>
        </Table>
      </div>
    </>
    
  )
}

export default InventoryTable