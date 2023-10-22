import React from "react";

const Modal = ({ open, setOpenModal, data }) => {
  if (!open) return null;
  const displaHidden = (temp) => {
    if (temp === null) {
      return "hidden-app";
    }
  };


  return (
    <div onClick={()=>{setOpenModal(false)}} className="overlay">
      <div onClick={(e)=>{ e.stopPropagation()}} className="modalContainer">
        <p>
          <img className="img-display" src={data.urls.regular} alt="" />
        </p>
        <div className="modalRight">
          <button onClick={() => setOpenModal(false)} className="closeBtn">
            X
          </button>
          <div className="content">
            <h1 className="title">{data.alt_description}</h1>
            <div className="imageDetail">
              <h2 className={`about-img ${displaHidden(data.description)}`}>
                {" "}
                Image description{" "}
              </h2>
              <p
                className={` desc ${displaHidden(
                  data.description
                )}`}
              >
                {data.description}
              </p>
              <div className="img-attribute-wrap">
                <p className=" size">
                  {data.height} x {data.width}
                </p>
                <p className="size">Created 0n {data.created_at}</p>
              </div>
            </div>
            <hr></hr>
            <div className="userDetail">
              <p className="avatar-lg-wrap">
                <img
                  className="avatar-lg-img"
                  src={data.user.profile_image.large}
                  alt="avatar"
                />
                <span className="fullname-wrap">
                  <span className="fullname">
                    <p className="name-items"> {data.user.first_name}</p>
                    <p className="name-items last-name"> {data.user.last_name}</p>
                  </span>
                   
                  <p> {data.user.bio}</p>
                </span>
              </p>
               <hr></hr>
              <div className="user-social">
                <p className="user-social-items">
                  {" "}
                  total collection :{data.user.total_collections}
                </p>
                <p className="user-social-items">
                  {" "}
                  total likes :{data.user.total_likes}
                </p>
                <p className="user-social-items">
                  {" "}
                  total photos:{data.user.total_photos}
                </p>
              </div>
            </div>
          
          </div>

          <div className="btnConatiner">
            <a href={data.urls.full}>
              <button className="btnOutline">
                <h1 className="dbtn-text">click on the  button to download the image</h1>
                <span className="bold download-btn">Download</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
