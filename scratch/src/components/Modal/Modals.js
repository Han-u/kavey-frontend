import loadable from "@loadable/component";

import React from "react";
import { useContext } from "react";
import { ModalsStateContext } from "./ModalsContext";
import { ModalsDispatchContext } from "./ModalsContext";

export const modals = {
  myModal: loadable(() => import("./Mymodal")),   //여기다 import하면 필요할때 로드함
  
  modalAskReject: loadable(() => import("./ModalAskReject")),
  modalAskSend: loadable(() => import("./ModalAskSend")),
  modalAskDelete: loadable(() => import("./ModalAskDelete")),
  modalAskClose: loadable(() => import("./ModalAskClose")),
  
};



const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };

    const handleSubmit = async () => {
      // 비지니스 로직 처리
      if (typeof onSubmit === "function") {
        await onSubmit();
      }

      onClose();
    };

    return (
      <Component
        {...restProps}
        key={index}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    );
  });
};

export default Modals;
