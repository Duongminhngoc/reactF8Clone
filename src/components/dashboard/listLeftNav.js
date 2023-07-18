import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
const listNav = [
  {
    id: 1,
    name: "Home",
    link: "/",
    iconComponent: <HomeRoundedIcon></HomeRoundedIcon>,
  },
  {
    id: 2,
    name: "Lộ trình",
    link: "/learning-path",
    iconComponent: <FlightTakeoffRoundedIcon></FlightTakeoffRoundedIcon>,
  },
  {
    id: 3,
    name: "Học",
    link: "/learning",
    iconComponent: <LightbulbRoundedIcon></LightbulbRoundedIcon>,
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
    iconComponent: <LibraryBooksRoundedIcon></LibraryBooksRoundedIcon>,
  },
];

export default listNav;
