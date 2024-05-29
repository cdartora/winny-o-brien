import Image from "next/image";

const SideBar = ({ children }) => {
  return (
    <>
      <nav className="side-bar">
        <a
          href="https://www.threads.net/@winnyobrien"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/threads.svg" alt="Threads logo" width="42" height="42" />
        </a>

        <a
          href="https://wa.me/555189430417"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/whats.svg" alt="Whatsapp logo" width="42" height="42" />
        </a>

        <a
          href="https://www.instagram.com/winnyobrien/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/insta.svg" alt="Instagram logo" width="42" height="42" />
        </a>
      </nav>
      {children}
    </>
  );
};

export default SideBar;
