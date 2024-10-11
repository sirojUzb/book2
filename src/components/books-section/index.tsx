import Body from "./customs/body";
import Header from "./customs/header";

const BooksSection = () => {
  return (
    <div className="w-full mt-[80px] bg-[#f5f5f5]">
      <div className="w-[80%] m-auto">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default BooksSection;
