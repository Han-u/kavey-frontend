import React from "react";

import useModals from "./useModal";
import { modals } from "./Modals";

function ModalTestPage(props) {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.myModal, {
      onSubmit: () => {
        console.log("로직 처리...");
      },
    });
  };

  const openModalReject = () => {
    openModal(modals.modalAskReject, {
      onSubmit: () => {
        console.log("거절로직 넣기");
      },
    });
  };

  return (
    <div>
      <h1>modal test page</h1>

      <button onClick={handleClick}>모달 열기</button>
      <button onClick={openModalReject}>설문 거절 모달 열기</button>
    </div>
  );
}

export default ModalTestPage;
