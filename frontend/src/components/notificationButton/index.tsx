import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

type Props = {
  saleID: number;
};

function handleClick(Id: number) {
  axios(`${BASE_URL}/sales/${Id}/notification`).then((Response) => {
    console.log("Sucesso!");
  });
}

function NotificationButton({ saleID }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleID)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
