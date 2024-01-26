// import "./App.css"

export default function Modal({ handleClose, handleOfferIsAccept }) {
  const handleOutsideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
      handleClose();
    }
  };
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button onClick={handleClose} className="close-btn">
          X
        </button>
        <div className="content">
          Click the button below to accept the offer
        </div>
        <button onClick={handleOfferIsAccept} className="accept-btn">
          Accept Offer
        </button>
      </div>
    </div>
  );
}
