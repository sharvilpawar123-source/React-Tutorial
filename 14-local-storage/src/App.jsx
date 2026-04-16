import React, { use } from 'react';

const App = () => {
    // localStorage.clear();
    //       localStorage.setItem("user","Sharvil");
    // //     //   localStorage.removeItem("user")
    //     const user= localStorage.getItem("user");
    //     console.log(user);


        // const user={
        //  user:"Sharvan",
        //  age: "18",
        // }
    //    const user= ( localStorage.setItem("user",JSON.stringify(user)))
    //     console.log(user);
        
       
        const user= JSON.parse(localStorage.getItem("user"));
        console.log(user);
        

  return (
    <div>
        App
    </div>
  );
}

export default App;
