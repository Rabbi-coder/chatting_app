import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import Cropper from "react-cropper";
import "./style.css"
import { Button } from '@mui/material';

const Imagecropper = ({setImage,image,getCropData,setCropper }) => {
  return (
    <>
    <div className="cropper_box">
        <div className="crosse_box" onClick={()=>setImage("")}>
        <RxCross2/>
        </div>
        <div className="preview_photo">
        <div
            className="img-preview"
          />
        </div>
        <Cropper
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
          onInitialized={(instance)=>{
            setCropper(instance)
          }}
        />
        <div className="upload_btn" onClick={getCropData}>
          <Button variant='outlined'>Upload</Button>
        </div>
    </div>
    </>
  )
}

export default Imagecropper