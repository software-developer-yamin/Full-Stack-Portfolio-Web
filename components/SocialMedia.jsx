import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://twitter.com/DeveloperYamin"
        rel="noreferrer"
        target="_blank"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/developer.yamin"
        rel="noreferrer"
        target="_blank"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/developer.yamin"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
