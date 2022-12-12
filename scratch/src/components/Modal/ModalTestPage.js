import React from "react";

import useModals from "./useModal";     // modal 필요한 컴포넌트에 useModals import 하기 open close 함수 있음
import { modals } from "./Modals";      // modal 컴포넌트들은 여기다 import 하기 

function ModalTestPage(props) {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.myModal, {         //확인버튼에서 처리할 로직함수 전달하기
      onSubmit: () => {
        console.log("로직 처리...");
      },
    });
  }

  const openModalReject = () => {
    openModal(modals.modalAskReject, {
      onSubmit: () => {
        console.log("거절로직 넣기");
      },
    });
  }

  
  const openModalSend = () => {
    openModal(modals.modalAskSend, {
      onSubmit: () => {
        console.log("설문발송 넣기");
      },
    });
  }

  const openModalDelete = () => {
    openModal(modals.modalAskDelete, {
      onSubmit: () => {
        console.log("설문삭제 넣기");
      },
    });
  }

  const openModalClose = () => {
    openModal(modals.modalAskClose, {
      onSubmit: () => {
        console.log("설문종료 넣기");
      },
    });
  }

  return (
    <div>
      <h1>modal test page</h1>

      <button onClick={handleClick}>모달 열기</button>
      <button onClick={openModalReject}>설문 거절 모달 열기</button>
      <button onClick={openModalSend}>설문 발송 모달 열기</button>
      <button onClick={openModalDelete}>설문 삭제 모달 열기</button>
      <button onClick={openModalClose}>설문 종료 모달 열기</button>
    </div>
  );
}

export default ModalTestPage;
