import React, { useState } from "react";
import {
  Facebook,
  Youtube,
  Thumbs,
  Stop,
  Instagram,
  Tick2,
  Shield,
  Visibilityoff,
  Smiley,
} from "../svgs";
const postdata =
  "Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush";
const postlorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu metus in arcu finibus congue. Suspendisse consequat porta maximus.";

export const Tick = ({ selected }) => {
  const [selectedstate, setselected] = useState(selected);
  return (
    <div
      className={`tick ${selectedstate && "bggreen"}`}
      onClick={() => {
        setselected(!selectedstate);
      }}
    >
      <Tick2 height="0.6rem" width="0.6rem" color="#e8eff7" />
    </div>
  );
};
export const Account = ({ name, type, selected }) => {
  return (
    <div className="account">
      <Tick selected={selected} />
      <p>{name}</p>
      <div className="circlesvg">
        {type === "facebook" && <Facebook height="1.3rem" width="1.3rem" />}
        {type === "youtube" && <Youtube height="1.3rem" width="1.3rem" />}
        {type === "instagram" && <Instagram height="1.3rem" width="1.3rem" />}
      </div>
    </div>
  );
};
export const Listitem = ({ children, data, selected }) => {
  return (
    <li>
      <p>
        <Tick selected={selected} />
        {data}
      </p>
      {children}
    </li>
  );
};

export const Fillbar = ({ value }) => {
  return (
    <div className="bar">
      <div style={{ flexBasis: value }}></div>
    </div>
  );
};
export const Post = ({ name, data, date, platform }) => {
  return (
    <div className="post">
      <div className="post-top">
        <div className="post-topleft">
          <div className="post-img"></div>
          <div className="post-person">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
          </div>
        </div>
        <div className="exclmation">!</div>
      </div>
      <div className="post-body">
        <p>{data}</p>
        <div>></div>
      </div>
      <div className="post-bottom">
        <div className="platform">
          <div>
            <Instagram height="1.3rem" width="1.3rem" />
          </div>
          <p>Rachna.ranade3</p>
        </div>
        <Postsvgs />
      </div>
    </div>
  );
};
export const Postsvgs = () => {
  return (
    <div className="post-svgs">
      <div>
        <Shield height="0.9rem" width="0.9rem" color="#459af7" />
      </div>
      <div>
        <Visibilityoff height="0.9rem" width="0.9rem" color="#c9b500  " />
      </div>
      <div>
        <Tick2 height="0.9rem" width="0.9rem" color="#08bf98" />
      </div>
    </div>
  );
};
export const Postsvgsright = () => {
  return (
    <div className="post-svgs post-svgs2">
      <div>
        <Tick2 height="0.9rem" width="0.9rem" color="#08bf98" />
      </div>
      <div>
        <Shield height="0.9rem" width="0.9rem" color="#459af7" />
      </div>
      <div>
        <Visibilityoff height="0.9rem" width="0.9rem" color="#c9b500  " />
      </div>
    </div>
  );
};
export const LowerRight = () => {
  const [name, date] = ["Rachna Ranade", "2:03 PM Today"];
  const [name2, date2] = ["Prayag Mukhi", "2:03 PM Today"];

  return (
    <div className="lower-right">
      <div className="right-data">
        <div className="post-topleft">
          <div className="post-img"></div>
          <div className="post-person">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
          </div>
        </div>
        <p className="right-upper-data">{postlorem}</p>
        <div className="right-img"></div>
        <div className="right-bottomtop">
          <div className="post-bottom-topleft">
            <div className="post-img"></div>
            <div className="post-person">
              <p className="name">{name2}</p>
              <p className="date">{date2}</p>
            </div>
          </div>
          <Postsvgsright />
        </div>
        <div className="right-lowerdata">{postdata}</div>
        <div className="right-form">
          <input type="" placeholder="Write a reply..." />
          <span>
            <Smiley height="1rem" width="1rem" color="black" />
          </span>
        </div>
        <div className="right-bottom">
          <div className="bottom-left-buttons">
            <div className="button like">
              <p style={{ color: "#459af7" }}>Like</p>{" "}
              <Thumbs height="0.8rem" width="0.8rem" color="#459af7" />
            </div>
            <div className="button ban">
              <p style={{ color: "#ff015b" }}>Ban</p>{" "}
              <Stop height="0.8rem" width="0.8rem" color="#ff015b" />
            </div>
          </div>
          <div className="bottom-right-buttons">Reply</div>
        </div>
      </div>
    </div>
  );
};
