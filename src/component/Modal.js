import React from "react";

const Modal = ({ open, setOpenModal, data }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p>
          <img className="img-display" src={data.urls.regular} alt="" />
        </p>
        <div className="modalRight">
          <button onClick={() => setOpenModal(false)} className="closeBtn">
            X
          </button>
          <div className="content">
            <h1>{data.alt_description}</h1>
            <div className="imageDetail">
              <p>content</p>
              <p>content</p>
              <p>Created 0n {data.created_at}</p>
            </div>
            <div className="userDetail">
              <p className="avatar-lg-wrap">
                <img
                  className="avatar-lg-img"
                  src={data.user.profile_image.large}
                />
                <span className="fullname-wrap">
                  <span className="fullname">
                  fullname :{" "}
                    <p> {data.user.first_name}</p>
                    <p> {data.user.last_name}</p>
                  </span>
                  <p>img description :{data.description}</p>
                  <p>about : {data.user.bio}</p>
                </span>
              </p>

              <div className="user-social">
                <p className="user-social-items"> total collection :{data.user.total_collections}</p>
                <p className="user-social-items"> total likes :{data.user.total_likes}</p>
                <p className="user-social-items"> total photos:{data.user.total_photos}</p>
              </div>
             
            </div>
            <div className="additionalInfo">
              <p>content</p>
              <p>content</p>
            </div>
          </div>
          <div className="btnConatiner">
            <button className="btn-primary">
              <span className="bold">yes</span>
            </button>
            <button className="btnOutline">
              <span className="bold">no</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
