import ReactModal from "react-modal";

const ModalAskSend = ({ onSubmit, onClose }) => {

  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onClose();
    
  };

  return (
    <ReactModal isOpen>
      <div>설문 발?송</div>
      <img src="data:image/jpeg;base64,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" />

      <div>
        <button onClick={handleClickSubmit}>거절</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};

export default ModalAskSend;
