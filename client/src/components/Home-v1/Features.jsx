import FeaturesDesktop from "./Features/FeaturesDesktop";
import FeaturesApp from "./Features/FeaturesApp";

function Features() {
  return (
    <>
      <div className="hidden lg:block">
        <FeaturesDesktop />
      </div>
      <div className="block lg:hidden">
        <FeaturesApp />
      </div>
    </>
  );
}

export default Features;
