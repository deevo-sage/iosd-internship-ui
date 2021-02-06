import React from "react";
import { Sheet, Cog, Downarrow, Shield, Visibilityoff} from "../svgs";
import {
  Account,
  Listitem,
  Fillbar,
  Post,
  LowerRight,
} from "../components/dash";
import {Link} from '@reach/router'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <OuterLeft />
        <OuterRight />
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="dashboard-header">
      <Link to="/">
        <h3 className="title">
          Rep<span>suite</span>.
        </h3>
      </Link>
      <div className="header-right">
        <div className="circlebutton">
          <Sheet height="1.2rem" width="1.2rem" />
        </div>
        <div className="circlebutton">
          <Cog height="1.2rem" width="1.2rem" />
        </div>
        <div className="header-profile">
          <div className="circlebutton"></div>
          <div className="profile-data">
            <div className="profile-data-upper">
              <p>Profile</p>
              <Downarrow height="0.5rem" width="0.5rem" />
            </div>
            <p>Rachna Ranade</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const OuterLeft = () => {
  const accounts = [
    {
      name: "Rachna Ranade",
      type: "youtube",
      selected: true,
    },
    {
      name: "Rachna.ranade3",
      type: "instagram",
      selected: true,
    },
    { name: "Rachna Ranade", type: "facebook", selected: false },
    { name: "Rachna.ranade3", type: "instagram", selected: true },
  ];
  const list = [
    { data: "Requires Manual Action", sublist: null, selected: true },
    {
      data: "Marked as safe by:",
      sublist: [
        { data: "Manual Action", sublist: [], selected: true },
        { data: "AI", sublist: null, selected: true },
      ],
      selected: true,
    },
    {
      data: "Hidden By",
      sublist: [
        { data: "Manual Action", sublist: null, selected: false },
        { data: "AI", sublist: null, selected: true },
        { data: "Keywords", sublist: null, selected: false },
      ],
      selected: true,
    },
  ];
  return (
    <div className="outerflex-left">
      <div className="left-upper">
        <h3>Pages and Channels</h3>
        {accounts.map((item, key) => (
          <Account
            name={item.name}
            type={item.type}
            key={item.name + item.type + key}
            selected={item.selected}
          />
        ))}
        <h3>Status</h3>
        <ul className="multilist">{listmap(list)}</ul>
      </div>
      <div className="left-lower">
        <h3>Plan Usage</h3>
        <div className="content">
          <div>
            <p>Accounts Connected</p>
            <Fillbar value="66%" />
            <p className="content-lower"> 2 of 3</p>
          </div>
          <div>
            <p>Comments Processed</p>
            <Fillbar value="50%" />
            <p className="content-lower">5000 of 1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const OuterRight = () => {
  return (
    <div className="outerflex-right">
      <InnerUpper />
      <div className="innerflex-lower">
        <LowerLeft />
        <LowerRight />
      </div>
    </div>
  );
};
const InnerUpper = () => {
  return (
    <div className="innerflex-upper">
      <div className="upper-left-drop">
        <p>Date Range:</p>
        <div className="upper-dropdown">
          Last seven days
          <span>
            <Downarrow height="0.7rem" width="0.7rem" color="#a5a5a5" />
          </span>
        </div>
      </div>
      <Upperbox data="Require Manual Action" type="unsafe" number="134" />
      <Upperbox data="Marked as Safe" type="safe" number="128" />
      <Upperbox data="Hidden" type="hidden" number="128" />
    </div>
  );
};
const Upperbox = ({ type, data, number }) => {
  return (
    <div className="upperbox">
      <div className="upperbox-left">
        <p className="upperbox-data">{data}</p>
        <p className="upperbox-number">{number}</p>
      </div>
      <div
        className="upperbox-right "
        style={{
          backgroundColor:
            (type === "unsafe" && "#ff015b") ||
            (type === "safe" && "#459af7") ||
            (type === "hidden" && "#c9b500"),
        }}
      >
        {type === "unsafe" && <div style={{ color: "white" }}>!</div>}
        {type === "safe" && (
          <div>
            <Shield height="1.4rem" width="1.4rem" color="white" />
          </div>
        )}
        {type === "hidden" && (
          <div>
            <Visibilityoff height="1.4rem" width="1.4rem" color="white" />
          </div>
        )}
      </div>
    </div>
  );
};
const LowerLeft = () => {
  return (
    <div className="lower-left">
      <p>Showing 36 comments</p>
      <Post data={postdata} date="2:03 PM Today" name="Prayag Mukhi" />
      <Post data={postdata} date="2:03 PM Today" name="Prayag Mukhi" />
    </div>
  );
};

const listmap = (z) => {
  let x = z.map((item) => (
    <Listitem data={item.data} selected={item.selected}>
      {item.sublist && <ul>{listmap(item.sublist)}</ul>}
    </Listitem>
  ));
  return x;
};
export default Dashboard;
const postdata =
  "Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush";
const postlorem =
  "orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu metus in arcu finibus congue. Suspendisse consequat porta maximus. Nunc convallis rhoncus felis, quis ullamcorper neque eleifend a. Aenean hendrerit.";
