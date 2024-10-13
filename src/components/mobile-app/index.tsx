const MobileApp = () => {
  return (
    <div className="w-[80%] m-auto h-[417px] flex flex-col justify-end mt-[80px] relative">
      <div className="h-[308px] flex justify-between px-[77px] bg-[#ff8b22]">
        <div>
          <h3 className="text-4xl font-semibold text-[#fff] mt-[36px]">
            Book.uz Mobil ilovamizni <br /> telefoningizga ko'chirib <br />
            oling
          </h3>
          <div className="flex gap-2 mt-[24px]">
            <div className="flex gap-2 bg-[#ffff] rounded-[8px] items-center py-[12px] px-[24px]">
              <div>
                <img
                  src="/icons/app_store.svg"
                  alt=""
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div>
                <p>Download on</p>
                <h3 className="font-semibold">App Store</h3>
              </div>
            </div>
            <div className="flex gap-2 bg-[#ffff] rounded-[8px] items-center py-[12px] px-[24px]">
              <div>
                <img
                  src="/icons/google_play.svg"
                  alt=""
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div>
                <p>Download on</p>
                <h3 className="font-semibold">Google Play</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/book_mobile.png"
            alt="book mobile"
            className="w-[300px] h-[96%] absolute right-[110px] top-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
