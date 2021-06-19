import React from 'react';
import styles from './messages.module.css';
import MessageSendForm from './MessageSendForm';
import MessageWriteRightBlock from './MessageWriteRightBlock';

function WriteMessage(props) {
  return (
    <div className={styles.writeMessage}>
      <MessageSendForm />
      <MessageWriteRightBlock />
    </div>
  );
}

export default WriteMessage;