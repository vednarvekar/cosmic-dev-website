import { useSearchParams } from "react-router-dom";
import UnderDevelopmentPage from "@/components/UnderDevelopmentPage";

const UnderDevelopment = () => {
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get("project") || "This project";

  return <UnderDevelopmentPage projectName={projectName} />;
};

export default UnderDevelopment;
