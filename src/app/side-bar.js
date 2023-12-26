import Image from "next/image";

const SideBar = ({ children }) => {
  return (
    <>
      <div className="bg-slate-500 fixed top-0 left-0 w-14 h-screen flex flex-col justify-end items-center p-2">
        <button type="button" className="border-[2px] rounded-full p-2 mb-1">
          <Image src="/whats.png" alt="Whatsapp logo" width="64" height="64" />
        </button>

        <button type="button" className="border-[2px] rounded-full p-2 mb-1">
          <Image src="/x.webp" alt="X logo" width="64" height="64" />
        </button>

        <button type="button" className="border-[2px] rounded-full p-2 mb-1">
          <Image src="/insta.png" alt="Instagram logo" width="64" height="64" />
        </button>
      </div>
      {children}
    </>
  );
};

export default SideBar;
