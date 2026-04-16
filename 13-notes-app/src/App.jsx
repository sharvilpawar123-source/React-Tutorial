import React, { useState } from 'react';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    settitle('');
    setval('');

    const copyTask = [...task];
    copyTask.push({ title, val });
    setTask(copyTask);

  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  const [title, settitle] = useState('');
  const [val, setval] = useState('');

  const [task, setTask] = useState([]);

  return (


    <div className='bg-black text-white h-screen  justify-between lg:flex' >
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='justify-center items-center flex flex-col gap-5 lg:w-1/2  bg-cover p-5 bg-[url("https://i.pinimg.com/1200x/0f/89/ee/0f89eee10dd0883ed50bc57d5655a102.jpg")]' action="post ">
        <h1 className='font-bold text-4xl'>Add Notes</h1>

        {/* 1st input box */}
        <input
          className='border-2 p-3 w-full rounded-xl outline-none'
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }
          } />


        {/* 2nd input box */}
        <textarea className='border-2 p-3 h-40 w-full rounded-xl outline-none'
          type="text"
          placeholder='Write Details'
          value={val}
          onChange={(e) => {
            setval(e.target.value);
          }
          } />
        <button className=' active:scale-95 border-2 p-3 bg-white text-black font-bold w-full rounded-xl'>Add Notes</button>
        <img className='rotate-y-180 shrink-0 lg:h-60 lg:w-60 rounded-full ' src="https://th.bing.com/th/id/OIP.UcJwf25fEq7ac5GWURu0lQHaHa?w=193&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
      </form>




{/* recent notes */}

      <div className=' lg:w-1/2 lg:border-l-4 p-10 bg-cover  bg-[url("https://i.pinimg.com/1200x/0f/89/ee/0f89eee10dd0883ed50bc57d5655a102.jpg")] '>
        <h1 className='font-bold text-4xl mb-2' >Recent Notes</h1>
        <div className='flex flex-wrap gap-5 overflow-auto h-full  justify-start items-start '>
          {task.map(function(ele,idx) {
            return <div key={idx} className=' flex flex-col justify-between  bg-cover px-5 py-5 bg-[url("https://i.pinimg.com/736x/b8/c6/2b/b8c62b77b81b29ac2e37dd509f200d85.jpg")] h-54 w-40 rounded-2xl text-black'>
               <div>
                 <h1 className=' leading-snug font-bold text-2xl wrap-break-word'>{ele.title}</h1>
                <p className='mb-2 leading-tight text-gray-700  wrap-break-word '>{ele.val}</p>
               </div>
               <button 
               onClick={(idx)=>{
                deleteNote(idx);
               }}
               className='bg-red-500 active:scale-95 cursor-pointer text-white rounded-sm w-full text-s font-bold'>Delete</button>
              </div>
            
          })}



        </div>
      </div>
    </div>
  );
}

export default App;
