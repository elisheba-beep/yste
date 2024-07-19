import Wrapper from "../components/Wrapper";
import handshake_gif from "../assets/images/animated_handshake.webp";

export default function About() {
  return (
    <Wrapper>
      <div>
        <h1 className="font-primaryBold text-center text-3xl">
          Our wonderfully weird story
        </h1>
        <div className="flex py-8">
          {/* animation */}
          <div className="w-1/2">
            <img src={handshake_gif} alt="handshake gif" />
          </div>
          <p className="font-primaryRegular text-2xl w-1/2">
            In a time of increasing automation, it’s our mission to keep human
            connection at the heart of commerce. That’s why we built a place
            where creativity lives and thrives because it’s powered by people.
            We help our community of sellers turn their ideas into successful
            businesses. Our platform connects them with millions of buyers
            looking for an alternative—something special with a human touch, for
            those moments in life that deserve imagination.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
