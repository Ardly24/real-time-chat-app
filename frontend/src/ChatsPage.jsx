import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
      projectId="c50f3579-6984-412d-8150-b89869e94d6d"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  );
};

export default ChatsPage;
