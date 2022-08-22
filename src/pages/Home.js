import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container flex justify-center mt-4 mx-auto ">
        <div className="text-[60px] ">Bienvenido</div>
      </div>
      <SearchBox />
      <Footer />
    </>
  );
}
