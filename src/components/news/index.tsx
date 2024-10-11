import { Button } from "../ui/button";

const News = () => {
  return (
    <div className="w-[80%] m-auto mt-[80px] mb-[100px]">
      <div className="flex justify-between">
        <h3 className="text-4xl">Yangiliklar</h3>
        <Button>Barcha yangiliklar</Button>
      </div>
      <div className="flex gap-4 mt-[24px]">
        <div className="h-[280px] rounded-[8px] relative">
          <img
            className="w-full h-full rounded-[8px]"
            src="https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?w=192&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="piled-book"
          />
          <div className="bg-[#000] w-full h-full absolute top-0 left-0 rounded-[8px] opacity-[0.5]" />
          <div className="w-full h-full p-4 absolute top-0 left-0 rounded-[8px] flex flex-col justify-end items-start text-white">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
        <div className="h-[280px] rounded-[8px] relative">
          <img
            className="w-full h-full rounded-[8px]"
            src="https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?w=192&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="piled-book"
          />
          <div className="bg-[#000] w-full h-full absolute top-0 left-0 rounded-[8px] opacity-[0.5]" />
          <div className="w-full h-full p-4 absolute top-0 left-0 rounded-[8px] flex flex-col justify-end items-start text-white">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
        <div className="h-[280px] rounded-[8px] relative">
          <img
            className="w-full h-full rounded-[8px]"
            src="https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?w=192&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="piled-book"
          />
          <div className="bg-[#000] w-full h-full absolute top-0 left-0 rounded-[8px] opacity-[0.5]" />
          <div className="w-full h-full p-4 absolute top-0 left-0 rounded-[8px] flex flex-col justify-end items-start text-white">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
        <div className="h-[280px] rounded-[8px] relative">
          <img
            className="w-full h-full rounded-[8px]"
            src="https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?w=192&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="piled-book"
          />
          <div className="bg-[#000] w-full h-full absolute top-0 left-0 rounded-[8px] opacity-[0.5]" />
          <div className="w-full h-full p-4 absolute top-0 left-0 rounded-[8px] flex flex-col justify-end items-start text-white">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
