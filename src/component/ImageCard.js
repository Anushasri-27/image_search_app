import { useState } from "react";
import icon from "../image/thumb-up.png";
import Modal from "./Modal";

const ImageCard = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div class="max-w-sm bg-white  rounded-lg shadow bg-gray-300 dark:border-gray-700">
      <a href={data.urls.regular} target="blank" rel="noreferrer">
        <img
          className="h-80 w-full card-img object-cover rounded-lg shadow-dark"
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
      <div class="parent py-4 px-5">
        <p class="user-wrap mb-3 font-normal text-black dark:text-black">
          <div className="avatar-wrap ">
            <span>
              <img
                className="avatar rounded-full "
                src={data.user.profile_image.small}
                alt="use avatar small"
              />
            </span>
            <span >
              <p> {data.user.first_name}</p>
              <p> {data.user.last_name}</p>
            </span>
          </div>
          <div class="likes items-center   py-2 text-sm font-medium text-center   ">
            <span>
              <img width="20" src={icon} alt="like" />
            </span>
            <p>{data.likes}</p>
          </div>
        </p>
        <div class="created-on   inline-flex items-center text-sm font-medium text-center text-white   ">
          <p className="created-on">
        <hr></hr>
            <button className="modal-btn" onClick={() => setOpenModal(true)}>View details</button>
            <Modal open={openModal} setOpenModal={setOpenModal} data={data} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
