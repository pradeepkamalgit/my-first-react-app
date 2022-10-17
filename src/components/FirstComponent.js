import "../UI/Card.css";
import ImageComponent from "./ImageComponent";

function FirstComponent(props) {
  return (
    <div className="card">
      <ImageComponent />
      <div className="container">
        <h3>
          {props.name} {props.age} {props.sex}
        </h3>
      </div>
    </div>
  );
}

export default FirstComponent;
