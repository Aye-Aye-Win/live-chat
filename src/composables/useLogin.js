const { ref } = require("vue");
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";

let error=ref(null);

let signIn=async(email,password)=>{
    try{
        let res=await signInWithEmailAndPassword(auth,email,password);
          if(! res){
            throw new Error("can't login account");
          }
          return res;
     }catch(err){
        error.value=err.message
        console.log(error.value);
     }
}

let userLogin=()=>{
    return {error,signIn}
}

export default userLogin;