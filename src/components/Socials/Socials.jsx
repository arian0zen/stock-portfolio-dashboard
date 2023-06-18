import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="hidden w-[90%] px-8 mx-auto md:flex justify-around items-center rounded-lg mt-8 bg-gray-200 shadow py-4">
        <a href="https://github.com">
          <BsGithub className="text-2xl mr-2" />
        </a>
        <a href="https://twitter.com">
          <BsTwitter className="text-2xl mr-2" />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin className="text-2xl mr-2" />
        </a>
        <a href="https://instagram.com">
          <BsInstagram className="text-2xl" />
        </a>
    </div>
  );
};

export default Social;
