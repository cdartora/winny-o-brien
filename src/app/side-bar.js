import Image from "next/image";

const SideBar = ({ children }) => {
  return (
    <>
      <div className="fixed z-10 bottom-0 left-0 pl-3 pb-3 md:pl-8 md:pb-8 flex flex-col justify-end items-center gap-6">
        <button
          type="button"
          className="shadow-2xl opacity-60 hover:opacity-100 transition-all"
        >
          <Image src="/whats.svg" alt="Whatsapp logo" width="42" height="42" />
        </button>

        <button
          type="button"
          className="shadow-2xl opacity-60 hover:opacity-100 transition-all"
        >
          <Image
            src="/twitter.svg"
            alt="Twitter logo"
            width="42"
            height="42"
            className="md:52"
          />
        </button>

        <button
          type="button"
          className="shadow-2xl opacity-60 hover:opacity-100 transition-all"
        >
          <Image src="/insta.svg" alt="Instagram logo" width="42" height="42" />
        </button>
      </div>
      {children}
    </>
  );
};

export default SideBar;
