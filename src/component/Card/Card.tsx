import { CCard, CCardImage, CCardBody, CCardText } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./Card.css";
import { useEffect, useState } from "react";

export const Card = ({
  img,
  description,
}: {
  img: string;
  description: string;
}) => {
  const [isClick, setIsClick] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsClick(false)
    }, 3000)
  }, [isClick])
  return (
    <div className={isClick ? "card--active" : "card"} onClick={() => setIsClick(true)}>
      <CCard className="card__container">
        <CCardImage
          orientation="top"
          src={img}
          style={{
            borderBottom: "1px solid silver",
            width: "366px",
            height: "245px",
            backgroundColor: "white",
          }}
        />
        <CCardBody>
          <CCardText>{description}</CCardText>
        </CCardBody>
      </CCard>
    </div>
  );
};
