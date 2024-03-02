import { ref } from "vue";
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";

let error=ref(null);

let createAccount=async(email,password,displayName)=>{
    try{
        let res=await createUserWithEmailAndPassword(auth,email,password)
        if(!res){
            throw new Error("could not create new user")
        }else{
            res.user.updateProfile({displayName})
        }
        return res;
   }catch(err){
       error.value=err.message;
   }
}
let useSignup=()=>{
    return {error,createAccount};
}

export default useSignup;