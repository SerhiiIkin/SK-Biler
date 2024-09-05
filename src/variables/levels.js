import levelOne from "@assets/level-1.webp";
import levelTwo from "@assets/level-2.webp";
import levelThree from "@assets/level-3.webp";
import levelFour from "@assets/level-4.jpg";
import levelFive from "@assets/level-5.jpg";

export const levels = [
  {
    id: 1,
    title: "Niveau 1",
    description:
      "Det laveste niveau er førerstøtte, hvor bilen kan køre selv uden, at man trykker på speederen",
    img: levelOne,
  },
  {
    id: 2,
    title: "Niveau 2",
    description:
      "Det næste niveau er meget populært lige nu, fordi flere biler kan styre, bremse og accelerere uden, at føreren aktivt skal gøre noget",
    img: levelTwo,
  },
  {
    id: 3,
    title: "Niveau 3",
    description:
      "Biler på det tredje niveau overvåger trafikken og justerer kørsel selv, men kræver stadig, at føreren kan overtage styringen.",
    img: levelThree,
  },
  {
    id: 4,
    title: "Niveau 4",
    description:
      "På det næste niveau kan bilerne køre selv uden fører, men kun inden for bestemte geografiske områder og under specifikke forhold.",
    img: levelFour,
  },
  {
    id: 5,
    title: "Niveau 5",
    description:
      "Det sidste niveau er fuld autonomi, hvor køretøjet kan køre selv under alle forhold uden fører bag rattet.",
    img: levelFive,
  },
];
