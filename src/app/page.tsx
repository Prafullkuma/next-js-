import Button from "./components/Button/Button";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import { revalidateMyTag } from "./lib/actions";

export default async function Home() {
  return (
    <div className="m-6">
      <h1> Do it entire page</h1>
      <form action={revalidateMyTag}>
        <Button>Revalidate with entire Page</Button>
      </form>
      <Users />
      <Posts />
    </div>
  );
}
