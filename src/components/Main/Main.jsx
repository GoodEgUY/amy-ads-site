import "./main.css";

function Main() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <img src="./images/smoke2.png" alt="" className="smokeImg" />
          <img src="./images/smoke1.png" alt="" className="smokeImg2" />
          <img src="./images/logo.png" alt="" className="ava" />

          <div className="dashbord">
{/*             <a href="https://instagram.com/amy_shop_kharkiv?igshid=MzRlODBiNWFlZA==">
              <div className="button">
                <p>INSTAGRAM</p>
                <img src="./images/inst.png" alt="" className="ico" />
              </div>
            </a> */}
            <a href="https://t.me/amy_shop_kh">
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
