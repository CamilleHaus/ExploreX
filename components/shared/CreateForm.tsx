"use client";

import Form from "../ui/Form";
import Input from "../ui/Input";
import { useEdgeStore } from "@/lib/edgestore";
import { use, useEffect, useState } from "react";
import Button from "../ui/Button";

const CreateForm = ({ user }) => {
  const [file, setFile] = useState<File>();

  const { edgestore } = useEdgeStore();

  const [imagePath, setImagePath] = useState("");

  const uploadimageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImagePath(res.url);
    }
  };

  useEffect(() => {
    if (file) {
      uploadimageHandler();
    }
  }, [file]);

  return <div>Form</div>;
};

export default CreateForm;
