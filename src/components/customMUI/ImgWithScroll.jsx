import { styled } from "@mui/system";
import { Img } from "@customMUI/Img";

export const ImgWithScroll = styled(Img)(  {
    translate: "-100vw 0",
    animation: "scroll-position-image linear  forwards",
    animationTimeline: "view(y)",
    animationRangeStart: "cover 5dvh",
    animationRangeEnd: "cover 30dvh",
  });