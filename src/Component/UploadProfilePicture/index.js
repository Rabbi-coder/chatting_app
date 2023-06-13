import React, { useRef, useState } from "react";
import "./style.css";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import Imagecropper from "./imagecropper";
import "cropperjs/dist/cropper.css";
import { getStorage, ref, uploadString,getDownloadURL  } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Loginusers } from "../../Features/Slice/userSlice";



const UploadProfilePicture = ({setOpen}) => {
  const [image,setImage]=useState("")
  const [cropData, setCropData] = useState("#");
  const dispatch = useDispatch()
  const user =useSelector((users)=>users.login.loggedIn)
  const [cropper,setCropper]=useState()
  const storage = getStorage();
const storageRef = ref(storage, "profile/"+ user.uid);
const auth = getAuth();

  // const cropperRef = useRef<ReactCropperElement>null;
  const ProfilePic = useRef(null);
  const handleProfileUpload= (e)=>{
    let files
    if(e.dataTransfer){
      files = e.dataTransfer.files
    }else if(e.target){
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload=()=>{
      setImage(reader.result);
    }
    reader.readAsDataURL(files[0])
  }
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const message4 = 
    cropper.getCroppedCanvas().toDataURL();
uploadString(storageRef, message4, 'data_url').then((snapshot) => {
  getDownloadURL(storageRef).then((downloadURL) => {
    updateProfile(auth.currentUser, {
       photoURL: downloadURL
    }).then(()=>{
      setOpen(false)
      dispatch(Loginusers({...user, photoURL: downloadURL}))
      localStorage.setItem('users', JSON.stringify({...user, photoURL: downloadURL}))
    })
  });
});
  };
    }
    
  return (
    <>
      <div className="upload_box">
        <input type="file" hidden ref={ProfilePic} onChange={handleProfileUpload} />
        <div className="upload">
          <div
            className="upload_icon"
            onClick={() => ProfilePic.current.click()}
          >
            <MdOutlinePhotoSizeSelectActual />
          </div>
          <p>Upload Photo</p>
        </div>
        {image && <Imagecropper setCropper={setCropper} getCropData={getCropData} setImage={setImage}image={image}/>}
      </div>
      
    </>
  );
};

export default UploadProfilePicture;
