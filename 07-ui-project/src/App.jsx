import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section1/Section2/Section2'


const App = () => {

    const users=[
      {
        img:"https://i.pinimg.com/736x/d5/fc/59/d5fc59a43c5029762858f3d382456d72.jpg",
        intro:"",
        color:"oklch(62.7% 0.194 149.214)",//copy from https://tailwindcss.com/docs/colors
        tag:"Satisfied"
      },
      {
        img:"https://i.pinimg.com/736x/84/8f/8d/848f8d54f737931455e16163972ab4e2.jpg",
        intro:"",
        color:"oklch(54.6% 0.245 262.881)",
        tag:"Underserved"
      },
      {
        img:"https://i.pinimg.com/736x/72/f5/cb/72f5cb79f067ae899829552cecf2199a.jpg",
        intro:"",
        color:"oklch(43.5% 0.029 321.78)",
        tag:"Underbanked"
      },
      {
        img:"https://i.pinimg.com/736x/94/8d/85/948d8526942281aa6dbe7bcda0e1c0ca.jpg",
        intro:"",
        color:"black",
        tag:"Underbanked"
      },
      {
        img:"https://i.pinimg.com/736x/26/dc/ea/26dcea02c7c6a264f8da4287c7e748d1.jpg",
        intro:"",
        color:"indigo",
        tag:"UNsatisfied"
      },
    ]


  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
