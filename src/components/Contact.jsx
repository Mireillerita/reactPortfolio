import React from "react";
const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen contact justify-center items-center p-4 text-black">
        <form action="" className="flex flex-col  max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-yellow-400 text-black">Contacts</p>
                <p className="text-black py-4 ">Please feel free touch with me. </p>

            </div>
            
            <input className="rounded-full bg-black focus:bg-yellow-500 focus:outline-none text-black px-4" type="text" placeholder="Name"name="name"/>
            <input className="rounded-full bg-black focus:bg-yellow-500 focus:outline-none text-black px-4 my-4" type="email" placeholder="Email"name="email"/>
            <textarea className="rounded-3xl resize-none bg-black focus:bg-yellow-500 focus:outline-none text-black px-4 my-4  " name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-black rounded-full border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 mx-auto flexitems-center">Contact me</button>
            </form> 
            

    </div>
  )
}
export default Contact