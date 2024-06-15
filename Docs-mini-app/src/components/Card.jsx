import React from 'react';
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <div>
          <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2} } className=' relative w-60 h-72 rounded-2xl bg-zinc-900/90 text-white p-5 overflow-hidden flex flex-row'>
                   <MdOutlineContactPage size="3em" />
              <p className=' mt-14 text-sm leading-tight'>{data.des }</p>
              <div className='footer bottom-0 left-0 w-full absolute  '>
                  <div className='flex justify-between items-center px-5 py-3'>
                      <h5>{ data.filesize }</h5>
                      { data.close ?<IoCloseCircleOutline /> : <MdOutlineDownloadForOffline /> }
                     
                     
                  </div>
                  {
                      data.tag.isOpen ? <div className={ `w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} bg-green-500 py-3 flex justify-center items-center` }>
                          <h3 className='text-sm'>{ data.tag.tagTitle }</h3>
                   </div> : null
                  }
                
              </div>
          </motion.div>
    </div>
  )
}

export default Card
