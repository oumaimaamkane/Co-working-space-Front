import ClLayerIcon from "../../assets/img/layericon-1.png";
import LinkButton from "../../components/Buttons/LinkButton";
import playIcon from "../../assets/icons/play.svg";
import CowSpaceImg from "../../assets/img/bg-cw1-2.jpg";

export default function Home() {
  return (
    <>
      {/* About setion */}
      <section className="pt-24 pb-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center pb-20">
            <span className="mb-10 text-[#888F96] text-[18px] uppercase">
              About US
            </span>
            <h2 className="text-4xl font-bold text-center mb-4 text-[#1E3954]">
              Community, creativity,
              <br /> comfort & more
            </h2>
            <img src={ClLayerIcon} alt="layer icon" />
            <p className="text-center w-[790px] text-lg leading-8 text-gray-500 mt-12 mb-10">
              We are a community of bold minds who have decided to work under
              the same roof. Our workspace and the people around us inspire us
              to take action, to grow, to do better. By saying that our
              coworking space is sustainable and comfy we confirm that you will
              get 100% satisfaction from working here and making the best out of
              this experience.
            </p>
            <LinkButton>Book A Seet</LinkButton>
          </div>
        </div>
      </section>

      {/* vedio presetenation section */}
      <section
        className="mx-12 mb-24 bg-cover flex items-center justify-center leading-tight h-[41rem] bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${CowSpaceImg})` }}
      >
        <div className="text-center">
          {/* vedio Icon  */}
          <div className="vedio-icon p-4 mx-auto rounded-full">
            <img src={playIcon} className="w-8" alt="play icon" />
          </div>

          <p className="text-[20px] text-white my-12">COWORKERS</p>

          <p className="text-5xl font-[500] leading-[55px] text-white">
            Check this video presentation
            <br /> to know more about our coworking
          </p>
        </div>
      </section>

      {/* Services section */}
      <section className="pb-20 mx-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center pb-20">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#1E3954]">
              Our services
            </h2>
            <img src={ClLayerIcon} alt="layer icon" />
            <p className="text-center w-[920px] text-lg leading-8 text-gray-500 mt-12 mb-10">
              Beautiful setting, abundant natural light, amazing comfort,
              super-fast internet, industrial style interior, custom made desks,
              state-of-the-art AC system, top notch location,…
            </p>
            <LinkButton>Explore Spaces</LinkButton>
          </div>
        </div>

        <div className=" flex flex-wrap">
          {/* single Service item */}
          <div className="w-1/4 p-4">
            <div className="bg-[#F3F4F6] p-8 hover:bg-orange-500">
              <h3 className="text-2xl font-bold text-[#1E3954] mb-4">
                Coworking Space
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                faucibus, risus eu volutpat pellentesque, massa felis.
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
