import { useState } from "react";
import {PiImageBold} from 'react-icons/pi';
import {ImCheckboxChecked} from 'react-icons/im';
const imageArray = [
	{
	  id: "1",
	  src: "/images/image-11.jpeg",
	},
	{
	  id: "2",
	  src: "/images/image-2.webp",
	},
	{
	  id: "3",
	  src: "/images/image-3.webp",
	},
	{
	  id: "4",
	  src: "/images/image-4.webp",
	},
	{
	  id: "5",
	  src: "/images/image-5.webp",
	},
	{
	  id: "6",
	  src: "/images/image-6.webp",
	},
	{
	  id: "7",
	  src: "/images/image-7.webp",
	},
	{
	  id: "8",
	  src: "/images/image-8.webp",
	},
	{
	  id: "9",
	  src: "/images/image-9.webp",
	},
	{
	  id: "10",
	  src: "/images/image-10.jpeg",
	},
	{
	  id: "11",
	  src: "/images/image-1.webp",
	},
  ];
  
const ImageGallery = () => {
	const [image,setImage]=useState(imageArray);
	const [selected,setSelected]=useState([]);
	
	return (
		<div className="bg-white w-11/12 mx-auto  rounded-md h-auto mt-14">
			{selected && selected.length > 0 ?
			<div className="h-14 rounded-t-md flex items-center justify-between">
				<p className="font-semibold text-md flex flex-row   ml-10"><ImCheckboxChecked className="text-blue-500 self-center mr-3"/> {selected.length} File Selected</p>	
				<button className="font-semibold text-md text-red-500  mr-10" onClick={handleDelete}>Delete file</button>	
			</div> 
			:
			<div className="h-14 rounded-t-md flex items-center">
			<p className="font-semibold text-xl text-left ml-10">Gallery</p>	
			</div>
			}
			<hr />
			<div  className=" w-11/12 mx-auto py-6 " id="gallery">
			{image.map((img,index)=>
			<div key={img.id}  id="single-image">
				<div className=" relative hover:brightness-[60%] hover:bg-slate-100 rounded-[20px]">
						{/* input */}
				<input
				type="checkbox"
				value={img.id}
				className="absolute mt-5 ml-5 cursor-pointer opacity-0 "
				// onChange={handleSelected}
				/>

				{/* image */}
				<img  src={img.src} className=""/>
				</div>
			</div>
			)}
			{/* add image */}
			<div className="rounded-xl  outline-1 outline-dashed outline-gray-300 bg-gray-300 flex items-center justify-center h-full">
  <label htmlFor="file-input" className="cursor-pointer text-center">
    <PiImageBold className="text-3xl font-light ml-6" />
    <p className="font-semibold pt-2">Add Images</p>
  </label>
  <input type="file" id="file-input" className="hidden" />
</div>

			</div>

		</div>
	);
}

export default ImageGallery;
