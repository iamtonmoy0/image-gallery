import { useState } from "react";

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
		<div>
			ok
		</div>
	);
}

export default ImageGallery;
