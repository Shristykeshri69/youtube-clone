import React, { useEffect ,useState} from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomName , makeRandomMessage} from "../utils/helper";


const LiveChat = () => {

  const [livemessage,setLivemessage]=useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message)  || [];

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api calling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20)
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (

    <>
     <div className="w-[620px] h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
      <h1 className="font-bold">LiveChat</h1>
      <div>
         {chatMessages.map((c,i)=>(
        <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
      </div>
      </div>

      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        // console.log("on form submit")
        dispatch(
          addMessage({
            name:"Shristy keshri",
            message:livemessage,
          })
        )
        setLivemessage(" ");
      }}>
        <input 
        className="px-2 w-96 border border-black mx-2 "  
        type="text" 
        value={livemessage}
        onChange={(e)=>{
          setLivemessage(e.target.value);
        }}/>
        <button className="px-2 mx-2 bg-blue-400 rounded-lg">Send</button>
      </form>
    </>
   
  );
};

export default LiveChat;
