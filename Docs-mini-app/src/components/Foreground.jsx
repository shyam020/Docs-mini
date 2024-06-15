import React, { useRef } from 'react';
import Card from './Card'


const Forrground = () => {
  const ref = useRef(null)
  const data = [
    {
      des: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      filesize: ".4mb",
      close: true,
      tag: {
        isOpen: true, tagTitle: "Download Now", tagColor: "green",
      }

    },
    {
      des: "lorem ipsum dolor sit amet consectetur hello how are you elit. Quisquam, quos.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: false, tagTitle: "Download Now", tagColor: "blue",
      }

    },
    {
       des: "lorem ipsum dolor sit amet consectetur hello how are you elit. Quisquam, quos.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true, tagTitle: "Upload", tagColor: "blue",
      }

    },
     {
       des: "lorem ipsum dolor sit amet consectetur hello how are you elit. Quisquam, quos.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true, tagTitle: "Download Now", tagColor: "green",
      }

    },
  ]
  return (
    <div>
      <div ref={ref} className='fixed z-[3] p-5 top-0 left-0 h-screen w-full flex gap-5 flex-row flex-wrap'>
        { data.map((item, index) => (
          <Card data={ item} reference= {ref} />
     ))}
       </div>
    </div>
  )
}

export default Forrground
