import { styled } from "@mui/system";
export const SpanWithScrollToH3 = styled("span")(  {
    backgroundClip: "text",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0% 100%",
    color: "hsl(0 0% 100% / 0.2)",
    backgroundImage: "linear-gradient(90deg, red, blue)",
    animation: "scroll-reveal linear forwards",
    animationTimeline: "view(y)",
    animationRangeStart: "cover 5dvh",
    animationRangeEnd: "cover 30dvh",
});
  
export  const SpanWithScrollToP = styled(SpanWithScrollToH3)(({theme}) => ({
  
    backgroundImage: `linear-gradient(90deg, ${theme.vars.palette.text.default}, ${theme.vars.palette.text.default})`,
    animationRangeEnd: "cover 90dvh",
  
}));