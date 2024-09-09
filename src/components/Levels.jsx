import { useRef } from "react";

import { Img } from "@customMUI/Img";
import { EffectCoverflow,  Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Typography } from "@components/customMUI/Typography";

import { levels } from "@variables/levels.js";

import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Levels = () => {
  const theme = useTheme();
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const navHeight = document.querySelector("header > nav").offsetHeight;
    const swiperOffsetTop = swiperRef.current.offsetTop;
    window.scrollTo(0, swiperOffsetTop - navHeight - 20);
  };

  return (
    <Swiper
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      allowTouchMove={false}
      speed={600}
      spaceBetween={30}
      effect={"coverflow"}
      slidesPerView={"1"}
      direction={"vertical"}
      pagination={{ clickable: true }}
      modules={[Pagination,  EffectCoverflow]}
    >
      {levels.map((level) => (
        <SwiperSlide key={level.id}>
          <Container>
            <Typography
              sx={{
                textAlign: "right",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                backdropFilter: "blur(3px)",
                WebkitTextStroke: "1px  black",
                textShadow: "1px 1px 3px rgba(88, 85, 85, 0.7)",
                ...(theme.palette.mode === "light" && {
                  textShadow: "1px 1px 3px rgba(255, 255, 255, 0.7)",
                  WebkitTextStroke: "1px  white",
                }),
              }}
              variant="h3"
            >
              {level.title}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                backdropFilter: "blur(3px)",
                WebkitTextStroke: "1px  black",
                textShadow: "1px 1px 3px rgba(88, 85, 85, 0.7)",
                ...(theme.palette.mode === "light" && {
                  textShadow: "1px 1px 3px rgba(255, 255, 255, 0.7)",
                  WebkitTextStroke: "1px  white",
                }),
              }}
              variant="h4"
              component="p"
            >
              {level.description}
            </Typography>
          </Container>
          <Img
            src={level.img}
            alt={level.title}
            loading="lazy"
            sx={{ position: "absolute", inset: 0, zIndex: -1 }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Levels;
