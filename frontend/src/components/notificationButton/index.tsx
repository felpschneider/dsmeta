import axios from "axios";
import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

type Props = {
  saleID: number;
};

function handleClick(Id: number) {
  axios(`${BASE_URL}/sales/${Id}/notification`).then((Response) => {
    toast.info("SMS enviado com sucesso!");
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
