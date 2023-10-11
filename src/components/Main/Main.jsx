import "./main.css";

function Main() {
  const [leadSource, setLeadSource] = useState("");
 

  const botToken = "6469582452:AAFPwZGy8Khu_pS1CuERcCAL99enW2_Cv70";
  const urlApi = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const chatId = "-1001922657212";
  const [success, setSuccess] = useState("");

  const sendAlert = (e, source) => {
    e.preventDefault();
    setLeadSource(source)
    let message = `<b>Новый лид: ${leadSource}</b>\n`;
  
    axios
      .post(urlApi, {
        chat_id: chatId,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
      })
      .finally(() => {});
  };
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <img src="./images/smoke2.png" alt="" className="smokeImg" />
          <img src="./images/smoke1.png" alt="" className="smokeImg2" />
          <img src="./images/logo.png" alt="" className="ava" />

          <div className="dashbord">
            <a href="https://instagram.com/amy_shop_kharkiv?igshid=MzRlODBiNWFlZA==" onClick={sendAlert("INSTAGRAM")}>
              <div className="button">
                <p>INSTAGRAM</p>
                <img src="./images/inst.png" alt="" className="ico" />
              </div>
            </a>
            <a href="https://t.me/amy_shop_kh" onClick={sendAlert("TELEGRAM")}>
              <div className="button">
                <p>TELEGRAM</p>

                <img src="./images/tg.png" alt="" className="ico" />
              </div>
            </a>
          </div>
          <p className="copyright">
            developed by{" "}
            <a href="https://instagram.com/thepugga?igshid=MzRlODBiNWFlZA==">
              PUGGA
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
