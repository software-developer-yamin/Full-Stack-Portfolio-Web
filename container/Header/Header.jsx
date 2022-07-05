import { motion } from "framer-motion";
import Image from "next/image";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Yamin</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <div className="iconContainer">
            <Image
            width={40}
            height={40}
              src="/assets/mern-stack-icon.png"
              alt="mern-stack-icon"
              objectFit="contain"
            />
            <p className="p-text p-title">
              MERN Stack Developer With NextJS & React Native
            </p>
          </div>
        </div>
        <a
          href="/assets/Yamin's Resume.pdf"
          download={"Yamin's Resume.pdf"}
          className="tag-cmp app__flex text-style-none"
        >
          <div className="iconContainer">
            <Image
              src="/assets/hireme.jpg"
              alt="hireme-icon"
              objectFit="contain"
              width={30}
              height={30}
              style={{
                paddingRight: "5px",
              }}
            />
            <p className="p-text p-title">download resume</p>
          </div>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={"/assets/yamin.png"} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={"/assets/circle.svg"}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[
        "/assets/nextjs.png",
        "/assets/react.png",
        "/assets/node.png",
        "/assets/reactnative.png",
      ].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
