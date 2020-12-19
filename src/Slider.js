import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import "./Slider.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
//import animation from "./animations/christmas-gifts.json";
import { ageGroups } from "./data.js";
import Lottie from "react-lottie-player";

// for images : fetch from here : https://www.lottiefiles.com/
//http://airbnb.io/lottie/#/web
//https://www.youtube.com/watch?v=LIoRZZ_va_o&pbjreload=101

//YT: Reactjs material ui tutorial in Hindi #7 Slider
// Watch: https://www.youtube.com/watch?v=SrkzrcgyMmo
//React Slider with Material UI and Typescript
//https://github.com/airbnb/lottie-web  ( install : npm install lottie-web)
//filter () ---> https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples#:~:text=get%20you%20started.-,What%20is%20Filter%20in%20React%3F,a%20condition%20that%20you%20provide.
//https://mifi.github.io/react-lottie-player/
//https://www.npmjs.com/package/react-lottie-player
//https://www.youtube.com/watch?v=A3VPjS_OPvY

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

const WeeklyAllowanceSlider = () => {
  const [age, setAge] = useState(6);
  const [rate, setRate] = useState(0);
  const [path, setPath] = useState("null");

  const handleChange = (event, newAge) => {
    setAge(newAge); // I have got the value/event here so we can perform some operations here....
  };

  useEffect(() => {
    try {
      setAge(ageGroups.filter((children) => children.age === age)[0].age);
      setRate(ageGroups.filter((children) => children.age === age)[0].rate);
      setPath(
        ageGroups.filter((children) => children.age === age)[0].imagePath
      );
    } catch (e) {
      console.error(e);
    }
  }, [age]);

  console.log(age);

  const mark = [
    {
      value: 6,
      label: "Age",
    },
  ];

  return (
    <div className="slider__container">
      <div className="slider__sliderAge">
        <div className="slider__text">
          {age < 11 ? (
            <h4>Weekly Allowance for a {age} years old</h4>
          ) : (
            <h4>Monthly Allowance for a {age} years old</h4>
          )}
        </div>

        <ThemeProvider theme={muiTheme}>
          <Slider
            value={age}
            marks={mark}
            min={6}
            max={18}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </ThemeProvider>

        {age < 17 ? (
          <h4>
            {`${age} years old ---> Based on your age we recommendation is that you received ${rate}
          dollar`}
          </h4>
        ) : (
          <h4>
            {`You are ${age} ---> you should get 300 dollor/monthly, 
             Based on your age we reccommand that you get all your studie loan and 
             should have a monthly plan budget `}
          </h4>
        )}

        {age < 11 ? (
          <h1>${rate} dollar / weekly </h1>
        ) : (
          <h1>${rate} dollar / Monthly </h1>
        )}
      </div>

      <div className="slider__lotties">
        <Lottie animationData={path} play style={{ width: 300, height: 300 }} />
      </div>
    </div>
  );
};

export default WeeklyAllowanceSlider;
