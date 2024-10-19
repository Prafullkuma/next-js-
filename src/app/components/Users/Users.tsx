import { revalidateMyTag } from "@/app/lib/actions";
import Button from "../Button/Button";
import { error } from "console";

const userURL = `https://6712b69c6c5f5ced66247492.mockapi.io/my-todos/users`;

const getUserList = async () => {
  return await fetch(userURL, { next: { tags: ["users"] } })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error, "ERROROOOORr");
      return [];
    });
};

const Users = async () => {
  const users = await getUserList();
  console.log(users, "usersusersusers");

  return (
    <div>
      <form action={revalidateMyTag}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg">Users</h1>
          <Button>Revalidate By Tags</Button>
        </div>
      </form>

      {/* {users?.map((items: { name: string; id: number; createdAt: string }) => {
        return (
          <div
            key={items.id}
            className="border-2 border-red-200  p-2 rounded mb-4"
          >
            <p>Current User ID : {items.id}</p>
            <h1>User Name:{items.name}</h1>
            <p>Created at - {items.createdAt}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Users;
