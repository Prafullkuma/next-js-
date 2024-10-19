"use server";

import { revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";

export const revalidateMyTag = () => {
  revalidateTag("users");
};

export const revalidateMyPost = () => {
  revalidateTag("posts");
  // redirect("/")
};
