import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
function Footer() {
  return (
    <div className="pt-10 flex flex-col gap-2 items-center justify-center pb-8 bg-white">
      <div className="flex flex-row gap-4 pb-4">
        <FaLinkedin className="cursor-pointer  size-4" />
        <FaGithub className="cursor-pointer size-4" />
        <FaSquareXTwitter className="cursor-pointer size-4" />
        <FaInstagram className="cursor-pointer size-4" />
      </div>
      <div className="flex flex-row gap-1 items-center font-['Rubik'] text-xs">
        <CiAt className="size-5" />
        <p className="">DEMLIX Media Direct, LLC. All rights reserved</p>
      </div>
      <div className="flex flex-row gap-8 font-['Rubik'] text-xs">
        <button className="text-gray-600 cursor-pointer">Terms</button>
        <button className="text-gray-600 cursor-pointer">Privacy</button>
        <button className="text-gray-600 cursor-pointer">Help</button>
        <button className="text-gray-600 cursor-pointer">Devices</button>
      </div>
    </div>
  );
}

export default Footer;
