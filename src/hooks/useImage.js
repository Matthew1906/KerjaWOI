import { useState } from "react";

const useImage = (profileImage)=>{
    const [image, setImage] = useState(profileImage);
    const uploadImage = (e)=>{
        if(e.target.files){
            const file = e.target.files[0];
            setImage(URL.createObjectURL(file));
        }
    }
    const resetImage = ()=>setImage(null);
    return { image, uploadImage, resetImage }
}

export default useImage;