import React, { useEffect } from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messages';
import MessagesBlocks from './MessagesBlocks';
import { useParams } from 'react-router-dom';

function Messages(props) {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.items);
  const contactsId = useParams().id;
  const filter = useSelector((state) => state.messages.filter);
  const filteredMessages = messages.filter(
    (messages) =>
      messages.content.toUpperCase().indexOf(filter.toUpperCase()) > -1,
  );

  useEffect(() => {
    dispatch(loadMessages(contactsId));
  }, [contactsId, dispatch]);

  return (
    <div className={styles.messagesModal} id="block_message">
      <div className={styles.messageScroll}>
        {filteredMessages.map((item) => {
          return <MessagesBlocks message={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default Messages;
