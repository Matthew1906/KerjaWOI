'use client'

import { useRef } from "react";
import Button from "@/components/utils/Button";

const FileButton = (props) => {
  const fileInputRef = useRef();

  const { name, id, children } = props;

  const imageChangeHandler = (event) => {
    props.onFileSelect(props.name, URL.createObjectURL(event.target.files[0]));
  };

  const imageUploadHandler = async () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        id={id}
        onChange={imageChangeHandler}
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
      />
      <Button type="button" onClick={imageUploadHandler}>
        {children}
      </Button>
    </div>
  );
};

export default FileButton;
