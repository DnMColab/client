import Action from "./components/Action";
import babich from "../../assets/Babich.jpg";
import house from "../../assets/icons/house.svg";
import search from "../../assets/icons/search.svg";
import notify from "../../assets/icons/notify.svg";
import message from "../../assets/icons/message.svg";
import trends from "../../assets/icons/trends.svg";
import random from "../../assets/icons/question.svg";
import settings from "../../assets/icons/settings.svg";
import styles from "./navigation.module.sass";
import about from "../../assets/icons/about.svg";
import app from "../../assets/icons/phone.svg";
import status from "../../assets/icons/status.svg";
import privacy from "../../assets/icons/privacy.svg";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className="navTop">
        <div className={styles.profile}>
          <img src={babich} alt="profile avatar" width={64} />
          <div className={styles.profileInfo}>
            <h2>Babich</h2>
            <p>@babach</p>
          </div>
        </div>
        <div className={styles.menu}>
          <h1>Actions</h1>
          <div className={styles.actions}>
            <Action img={house} link="/">
              Home
            </Action>
            <Action img={search} link="/">
              Search
            </Action>
            <Action img={notify} link="/">
              Notifications
            </Action>
            <Action img={message} link="/">
              DM
            </Action>
            <Action img={trends} link="/">
              Trends
            </Action>
            <Action img={random} link="/">
              Random
            </Action>
            <Action img={settings} link="/">
              Settings
            </Action>
          </div>
        </div>
      </div>
      <div className={styles.navBottom}>
        <div className={styles.navBottomRow}>
          <Action img={about} link="/" size="small">About</Action>
          <Action img={status} link="/" size="small">Status</Action>
        </div>
        <div className={styles.navBottomRow}>
        <Action img={app} link="/" size="small">App</Action>
          <Action img={privacy} link="/" size="small">Privacy</Action>
        </div>
      </div>
    </nav>
  );
}
