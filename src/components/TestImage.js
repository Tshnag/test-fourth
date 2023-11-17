import image from "./carphoto.jpg"
import "./TestImage.css"

function TestImage({onHover, newHeight}){

    let imageStateHeight = "100px";
    let imageStateWidth =" 100px";

    function mouseOver(){
        onHover();
    }

    return(
        <div className="card-img">
            <img onMouseOver={mouseOver} src={image} alt="card-img" height={newHeight} width={imageStateWidth}></img>
        </div>
    )

}
export default TestImage;