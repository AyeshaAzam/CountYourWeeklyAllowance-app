import React, { useState, useRef, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import "./Slider.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import animation from "./animations/christmas-gifts.json";
import lottie from "lottie-web";

// for images : fetch from here : https://www.lottiefiles.com/
//http://airbnb.io/lottie/#/web
//https://www.youtube.com/watch?v=LIoRZZ_va_o&pbjreload=101

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        height: 20,
        width: 20,
        backgroundColor: "#fff",
        border: "1px solid #005fa5",
        marginTop: -9,
        marginLeft: -11,
        boxShadow: "#ebebeb 0 2px 2px",
        "&:focus, &:hover, &$active": {
          boxShadow: "#ccc 0 2px 3px 1px",
        },
        color: "#005fa5",
      },
      track: {
        height: 6,
        borderRadius: 2,
      },
      rail: {
        color: "#8f8f8f",
        padding: "2px 0",
      },
      root: {
        color: "#005fa5",
      },
    },
  },
});

//simaple example:
// var bildpath = "./img/0.svg",

// if( år == 7){
//   bildpath = "./img/7.svg",
// }

// Här är bild: <img src={bildpath} />

//en array of objects
const ageGroups = [
  {
    imagePath: "./animations/christmas-gifts.json",
    //age_6: "20 dollor/week",
    age:
      "20 dollor/week , Base on your age we recommand that you get 20 dollor in a week",
  },

  {
    imagePath: "./animations/santa-claus.json",
    //age_7: "25 dollor/week",
    age: "25 dollor/week",
  },
  {
    imagePath: "./animations/lovestruck-heart.json",
    //age_8: "30 dollor/week",
    age: "30 dollor/week",
  },
  {
    imagePath: "./animations/save-piggy-bank.json",
    //age_9: "35 dollor/week",
    age: "35 dollor/week",
  },
  {
    imagePath: "./animations/boots.json",
    //age_10: "100 dollor/week",
    age: "100 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "120 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "140 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "150 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "160 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "180 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "200 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age: "250 dollor/monthly",
  },
  {
    imagePath: "./animations/santa-claus.json",
    age:
      "300 dollor/monthly, Based on your age we  reccommand that you get all your studie loan and should have a monthly plan budget",
  },
  // {
  //   imagePath: "./animations/santa-claus.json",
  //   age6: "Base on your age we recommand that you get 20 dollor in a week",
  // },
  // {
  //   imagePath: "./animations/santa-claus.json",
  //   age18:
  //     "Based on your age we  reccommand that you get all your studie loan and should have a monthly plan budget",
  // },
];

const WeeklyAllowanceSlider = () => {
  const [value, setValue] = useState(6);
  const [age, setAge] = useState([]);

  const container = useRef(null);

  const mark = [
    {
      value: 6,
      label: "Age",
    },
  ];

  const handleChange = (name, newValue) => {
    setValue(newValue); // I have got the value/event here so we can perform some operations here....
    console.log("newVAlue", newValue);
  };

  // const animations = ageGroups.map((ageGroup, index) =>
  //   value === index ? (
  //     <div>
  //       <img src={ageGroup.imagePath} alt="" />
  //       <h3>{ageGroup.age}</h3>
  //     </div>
  //   ) : null
  // );

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      //animationData: require("./animations/christmas-gifts.json"),
      animationData: animation,
    });
  }, []);

  return (
    <div className="slider__container">
      <div className="slider__sliderAge">
        <div className="slider__text">
          <h3>Count your Weekly Allowance</h3>
        </div>
        <ThemeProvider theme={muiTheme}>
          <Slider
            defaultValue={6}
            name="slider"
            marks={mark}
            min={6}
            max={18}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </ThemeProvider>
        <h4>
          {`${value} Years old--> Based on your age we recommend that you received 20
          dollar a week`}
        </h4>

        {ageGroups.map((ageGroup, index) =>
          value === index ? (
            <div className="slider__lotties" ref={container} key={index}>
              <img src={ageGroup.imagePath} alt="" />
              <h3>{ageGroup.age}</h3>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default WeeklyAllowanceSlider;

//https://linkedin-clone-yt.web.app/

//  console.log("age", ageGroup, "value", value, "index", index);
//Read : https://dev.to/ugglr/adding-web-animations-to-your-react-project-using-lottie-18fo
