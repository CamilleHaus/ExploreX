import getCurentUser from "../actions/getCurrentUser";
import CreateForm from "@/components/shared/CreateForm";

const Page = async () => {
  const user = await getCurentUser();

  return <CreateForm user={user} />;
};

export default Page;
