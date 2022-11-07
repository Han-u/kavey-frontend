import loadable from "@loadable/component";

import React from "react";
import { useContext } from "react";
import { ModalsStateContext } from "./ModalsContext";
import { ModalsDispatchContext } from "./ModalsContext";

export const modals = {
  myModal: loadable(() => import("./Mymodal")),
  
  modalAskReject: loadable(() => import("./ModalAskReject")),
  
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
