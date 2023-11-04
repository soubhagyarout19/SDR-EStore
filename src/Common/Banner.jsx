import { BannerImage } from "../../Constant";

const Banner = ({content}) => {
  return (
    <>
      <div className="banner-main">
        <img className="banner-image" src={BannerImage} alt="banner-image"></img>
        <div className="banner-right-side">
          <h1>{content}</h1>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            explicabo esse cum consectetur suscipit, sint aspernatur ipsum!
            Corrupti reprehenderit nostrum, dolorem fugit tempora tenetur,
            maiores veritatis eligendi officia optio magnam!
          </p>
          <button>Continue Shopping</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
