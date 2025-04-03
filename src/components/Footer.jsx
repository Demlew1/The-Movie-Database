import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
function Footer() {
  return (
    <div className="pt-5 flex flex-col gap-2 items-center justify-center pb-4 bg-white">
      <div className="flex flex-row gap-4 pb-2">
        <FaLinkedin className="cursor-pointer  size-3" />
        <FaGithub className="cursor-pointer size-3" />
        <FaSquareXTwitter className="cursor-pointer size-3" />
        <FaInstagram className="cursor-pointer size-3" />
      </div>
      <div className="flex flex-row gap-1 items-center font-['Rubik'] text-xs">
        <CiAt className="size-4" />
        <p className="text-[10px]">
          DEMLIX Media Direct, LLC. All rights reserved
        </p>
      </div>
      <div className="flex flex-row gap-8 font-['Rubik'] text-[10px]">
        <button className="text-gray-600 cursor-pointer">Terms</button>
        <button className="text-gray-600 cursor-pointer">Privacy</button>
        <button className="text-gray-600 cursor-pointer">Help</button>
        <button className="text-gray-600 cursor-pointer">Devices</button>
      </div>
    </div>
  );
}

export default Footer;
