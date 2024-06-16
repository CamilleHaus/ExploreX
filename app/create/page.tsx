import CreateForm from "@/components/shared/CreateForm";
import getCurentUser from "../actions/getCurrentUser";

const Page = async () => {
  const user = await getCurentUser();

  return <CreateForm user={user} />;
};

export default Page;
