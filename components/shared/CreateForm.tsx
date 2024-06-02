"use client";

import Form from "../ui/Form";
import Input from "../ui/Input";
import { useEdgeStore } from "@/lib/edgestore";
import { use, useEffect, useState } from "react";
import Button from "../ui/Button";
import { SingleImageDropzone } from "../ui/SingleImageDropZone";
import { userTypes } from "@/types/userTypes";
import { createPost } from "@/app/actions/blogActions";

const CreateForm = ({ user }: { user: userTypes }) => {
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

  return (
    <div className="mt-8 mx-auto w-full max-w-3xl px-4">
      <div className="bg-white py-8 shadow rounded-lg px-10">
        <h1 className="text-center text-2xl font-extrabold mb-10">
          Create a Post ✍🏻
        </h1>
        {!user ? (
          <h2 className="text-center text-xl font-extrabold uppercase">
            Please Sign up or Log in to create a post
          </h2>
        ) : (
          <>
            <SingleImageDropzone
              onChange={(file) => {
                setFile(file);
              }}
              value={file}
              width={200}
              height={200}
            />
            <Form
              action={createPost}
              className="flex flex-col gap-5 mt-5"
              onSubmit={() => setFile(undefined)}
            >
              <Input type="hidden" name="image" value={imagePath} />
              <Input type="text" name="title" placeholder="Enter Title" />
              <textarea
                required
                name="description"
                rows={10}
                placeholder="Write here..."
                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border 
                w-full border-gray-200 p-2 rounded-md py-1.5"
              ></textarea>
              <select
                name="category"
                required
                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
              placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border 
              w-full border-gray-200 p-2 rounded-md py-1.5"
              >
                <option value="" disabled selected>
                  Choose Tag
                </option>
                <option value="Adventure">Adventure</option>
                <option value="Culture">Culture</option>
                <option value="Journey">Journey</option>
                <option value="Discovery">Discovery</option>
                <option value="Wanderlust">Wanderlust</option>
              </select>
              <Input type="hidden" name="email" value={user?.email || ""} />
              <Button type="submit" text="Create" aria="create blog" />
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
