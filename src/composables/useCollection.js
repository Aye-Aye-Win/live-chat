import { ref } from "vue";
import {getFirestore, addDoc, collection } from "firebase/firestore"
import {db} from "../firebase/config"

let useCollection=(collectionName)=>{
    let error=ref(null);

    let addingDoc=async(doc)=>{
        try{ 
           await addDoc(collection(db,collectionName), doc);
        }catch(err){
            console.log(err.message);
            error.value="could not send the message";
        }
    }
    return {error,addingDoc}
}

export default useCollection;