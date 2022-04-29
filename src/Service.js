import parse from "html-react-parser";
import "./service.css";

const Service = ({ id, title, desc1, desc2, photo, icon }) => {
  return (
    <div className="main" id={id}>
      {id % 2 !== 0 ? (
        <>
          <div className="left">
            <div className="icon">
              <img src={icon} alt={title} />
            </div>
            <div className="title">
              <h3>{title}</h3>
            </div>

            <div className="some">
              {parse(desc1)}
              {parse(desc2)}
            </div>
          </div>
          <div className="img">
            <img src={photo} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="img">
            <img src={photo} alt={title} />
          </div>
          <div className="left">
            <div className="icon">
              <img src={icon} alt={title} />
            </div>
            <div className="title">
              <h3>{title}</h3>
            </div>

            <div className="some">
              {parse(desc1)}
              {parse(desc2)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Service;
