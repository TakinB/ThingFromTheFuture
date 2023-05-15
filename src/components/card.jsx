import React from "react";
import './card.css'
/**
 * NOTES:
 * - On styling:
 * For this test I moved the styles to styles.css.
 * - On conditional rendering:
 * The conditional statement that checks whether or not to display an image
 * exists within the 'CardImage' function. Used in the component as:
 * <CardImage />
 * - On default props:
 * I have no idea whether this approach of handling defaults is the right/best one.
 * Next step would be to try variations on setting defaults.
 */

/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
  const isImageURL = props.image;
  // If an image was passed:
  if (isImageURL) {
    return (
      <div className="CardImage">
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="Seattle"
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  // if(props.type || props.title)
  return (
    <div className="CardContent">
      <p className="CardType">{props.type}</p>  
      <p className="CardTitle">{props.title}</p>
      <p className="CardDescription">{props.description}</p>
    </div>
  );
}

export default function Card(props) {
  
    return (
      <div >
        <div className="Card">
          <CardImage image={props.image} width={props.width} />
          <CardContent 
            title={props.title}
            type={props.type}
            description={props.description}
          />
        </div>
      </div>
    );
  }


// 2. Defaults /////////////////////////////////////////////
// Card.defaultProps = {
//   width: 400,
//   title: "not found",
//   type: "not found",
//   description: ""
// };
