import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CloseButton } from "react-bootstrap";

export default function Gallery() {
  const [imgUrl, setImgUrl] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (url) => {
    setImgUrl(url);
    setShow(true);
  };

  const handleClose = () =>{
   setShow(false);
   setImgUrl('');

  };

  return (
    <>
      <div>
        {Array.from(Array(6).keys()).map((index) => {
          return (
            <span
              className="p-3 d-inline-block img-tag"
              onClick={() => handleClick(`./images/${index}.jpg`)}
              key={`gallery-img-${index}`}
            >
              <img
                src={require(`./images/${index}.jpg`)}
                alt={`gallery-img-${index}`}
                width={400}
                height={300}
                className="border-radius-10"
              />
            </span>
          );
        })}
      </div>
      <Modal show={show} fullscreen size="lg">
        <Modal.Body>
          <span>
              
          <CloseButton className="close-button" onClick={handleClose}/>
          </span>
          {imgUrl?.length > 0 && (
          <img 
          height={"100%"} 
          width={"100%"} 
          src={require(`${imgUrl}`)}
          alt ="larger-img"
          />
           )}
        </Modal.Body>
      </Modal>
    </>
  );
}
