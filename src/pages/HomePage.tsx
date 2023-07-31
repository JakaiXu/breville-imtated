import Layout from "../components/header/Layout";
import Home from "../components/home/Home";
import { CloseSearchProvider } from "../hooks/closeSearchContext";
const HomePage = () => {
  return (
    <CloseSearchProvider>
    <Layout>
      <Home />
    </Layout>
    </CloseSearchProvider>
  );
};

export default HomePage;
