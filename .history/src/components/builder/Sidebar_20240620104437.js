import React from "react";
import SidebarRow from "./SidebarRow";
import SpeedIcon from "@material-ui/icons/Speed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "./Builder.css";

function Sidebar() {
  return (
    <div className="sidebar no-print">
      <div className="logo__holder">
        <h3> Logo </h3>
      </div>

      <div className="s-divider"></div>
      {/* <h3 className="ml-20p"> Administrators </h3> */}
      <SidebarRow path="/app/dashboard" Icon={SpeedIcon} title="Dashboard" />
      <SidebarRow
        path="/app/store"
        Icon={AddBusinessIcon}
        title="Store Management"
      />
      <SidebarRow
        path="/app"
        Icon={DirectionsCarIcon}
        title="Dispatch Management"
      />
      <SidebarRow path="/app" Icon={EmailIcon} title="Messaging/Support" />

      <div className="w-100 abs f-bottom">
        <div className="s-divider"></div>
        <SidebarRow
          path="/app/config"
          Icon={FingerprintIcon}
          title="Control Panel Config"
        />
        <SidebarRow
          path="/app/documentation"
          Icon={AutoStoriesIcon}
          title="Documentation"
        />
        <SidebarRow
          path="/app/notifications"
          Icon={NotificationsActiveIcon}
          title="Notification"
        />
        <div className="header__info">
          <div className="user__avatar bg-warning">
            <h3>AP</h3>
          </div>
          <h4 className="title-case c-chalk">
            {" "}
            Ahmed Peter <br />
            <span className="summary__label font-9 role">PMall Admin</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
