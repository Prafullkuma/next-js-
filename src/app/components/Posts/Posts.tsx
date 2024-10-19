import React from "react";
import Button from "../Button/Button";
import { revalidateMyTag } from "@/app/lib/actions";

const getPostDetails = async () => {
  return await fetch(
    "https://6712b69c6c5f5ced66247492.mockapi.io/my-todos/Posts",
    { next: { tags: ["posts"] } }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err, "ERROR in post API");
      return [];
    });
};
const Posts = async () => {
  const postsList = await getPostDetails();
  return (
    <div>
      <form action={revalidateMyTag}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg">Posts</h1>
          <Button>Revalidate By Tags</Button>
        </div>
      </form>

      {/* {postsList?.map(
        (items: { createdAt: string; post: string; id: number }) => {
          return (
            <div
              className="border-2 border-red-200  p-2 rounded mb-4"
              key={items.id}
            >
              <h1>Post - {items.post}</h1>
              <p>Created At -{items.createdAt}</p>
            </div>
          );
        }
      )} */}
    </div>
  );
};

export default Posts;
