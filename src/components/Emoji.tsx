import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thums-up.webp";
import meh from "../assets/meh.webp";

const Emoji = ({ rating }: { rating: number }) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, boxSize: "22px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
