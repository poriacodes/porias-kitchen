import Ofada from "../assets/ofada-rice.png"
import Jollof from "../assets/jollof-rice2.png" 
import Macaroni from "../assets/macaroni.png"
import Edikaikong from "../assets/edikaikong-2.png"

export const heroData = [
    {  
        id: 1,
        name: 'Ofada Rice',
        description: 'Ofada Rice, Plaintain & Assorted meat', 
        price: '3,000 (per plate)', 
        imageSrc:  Ofada,
    },

    { 
        id: 2, 
        name: 'Jollof Rice', 
        description: 'Jollof Rice, Plaintain & Chicken', 
        price: '3,000 (per plate)', 
        imageSrc: Jollof
    },
    { 
        id: 3,
        name: 'Macaroni', 
        description: 'Macaroni and Asun', 
        price: '4,000 (per plate)', 
        imageSrc: Macaroni 
    },
    { 
        id: 4, 
        name: 'Edikaikong', 
        description: 'Edikaikong Soup with assorted meat & Ponmo', 
        price: '3,000 (per plate)', 
        imageSrc: Edikaikong 
    },
    
];


export const categories = [
    {
      id: 1,
      name: "Chicken",
      urlParamName: "chicken",
    },
    {
      id: 2,
      name: "Soup",
      urlParamName: "soup",
    },
    {
      id: 3,
      name: "Rice",
      urlParamName: "rice",
    },
    {
      id: 4,
      name: "Foodtray",
      urlParamName: "foodtray",
    },
    {
      id: 5,
      name: "swallow",
      urlParamName: "swallow",
    },
    {
      id: 6,
      name: "Pasta",
      urlParamName: "pasta",
    },
  
    {
      id: 7,
      name: "Moinmoin",
      urlParamName: "moinmoin",
    },
  ];