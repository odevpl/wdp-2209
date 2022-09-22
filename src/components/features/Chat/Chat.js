import React from 'react';
import clsx from 'clsx';

import styles from './Chat.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faSync, faTimes, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(true);

  const handleClick = e => {
    e.preventDefault();
    setChatOpen(!chatOpen);
  };

  return (
    <div className={styles.chatBarCollapsible}>
      <div className={clsx(styles.contentHide, chatOpen && styles.contentShow)}>
        <div className={styles.topBar}>
          <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faTimes}
            size='lg'
            onClick={handleClick}
          ></FontAwesomeIcon>
        </div>
        <div className={styles.fullChatBlock}>
          <div className={styles.outerContainer}>
            <div className={styles.chatContainer}>
              <div className={styles.robot}>
                <FontAwesomeIcon icon={faRobot} size='lg'></FontAwesomeIcon>
              </div>
              <div className={styles.botText}>
                <p>
                  <span>How can I help?</span>
                </p>
              </div>
              <div className={styles.subjectBox}>Choose the subject</div>

              <div className={styles.chatBarInputBlock}>
                <input
                  type='text'
                  className={styles.inputBox}
                  name='msg'
                  placeholder='Put your question here'
                />
                <p></p>
                <div className={styles.chatBarIcons}>
                  <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div id='chat-bar-bottom'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      {!chatOpen && (
        <button className={styles.collapsible} onClick={handleClick}>
          Need help? Ask us! <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
        </button>
      )}
      {chatOpen && (
        <button className={styles.collapsible} onClick={handleClick}>
          <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
        </button>
      )}
      <div className={styles.closeButton}>
        <FontAwesomeIcon icon={faTimes} size='2xl'></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Chat;
