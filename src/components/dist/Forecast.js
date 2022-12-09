"use strict";
exports.__esModule = true;
var helpers_1 = require("../helpers");
var Sunrise_1 = require("./Icons/Sunrise");
var Sunset_1 = require("./Icons/Sunset");
var Degree = function (_a) {
    var temp = _a.temp;
    return (React.createElement("span", null,
        temp,
        " ",
        React.createElement("sup", null, "o")));
};
var Forecast = function (_a) {
    var data = _a.data;
    var today = data.list[0];
    return (React.createElement("div", { className: "w-full md:max-w-[500px] py-4 md:py-4 \r\n      md:px-10 lg:px-24 h-full lg:h-auto bg-white\r\n      bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg" },
        React.createElement("div", { className: "mx-auto w-[300px]" },
            React.createElement("section", { className: "text-center" },
                React.createElement("h2", { className: "text-2xl font-black" },
                    data.name,
                    React.createElement("span", { className: "font-thin pl-2" }, data.country)),
                React.createElement("h1", { className: "text-4xl font-extrabold" },
                    React.createElement(Degree, { temp: Math.round(today.main.temp) })),
                React.createElement("p", { className: "text-sm" },
                    today.weather[0].main,
                    "(",
                    today.weather[0].description,
                    ")"),
                React.createElement("p", { className: "text-sm" },
                    "H: ",
                    React.createElement(Degree, { temp: Math.ceil(today.main.temp_max) }),
                    "L: ",
                    React.createElement(Degree, { temp: Math.floor(today.main.temp_min) }))),
            React.createElement("section", { className: "flex overflow-x-scroll mt-4 pb-2 mb-5" }, data.list.map(function (item, i) { return (React.createElement("div", { className: "inline-block text-center w-[50px] flex-shrink-0", key: i },
                React.createElement("p", { className: "text-sm" }, i === 0 ? 'Сейчас' : new Date(item.dt * 1000).getHours()),
                React.createElement("img", { src: "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png", alt: "wrather-icon-" + item.weather[0].description }),
                React.createElement("p", { className: "text-sm font-bold" },
                    React.createElement(Degree, { temp: Math.round(item.main.temp) })))); })),
            React.createElement("section", { className: "flex justify-between text-zinc-700" },
                React.createElement("div", { className: "w-[140px] text-xs font-bold flex flex-col \r\n            items-center bg-white/20 backdrop-blur-1s rounded drop-shadow-lg\r\n            py-4 mp-5" },
                    React.createElement(Sunrise_1["default"], null),
                    React.createElement("span", { className: 'mt-2' }, helpers_1.getSunTime(data.sunrise))),
                React.createElement("div", { className: "w-[140px] text-xs font-bold flex flex-col \r\n            items-center bg-white/20 backdrop-blur-1s rounded drop-shadow-lg\r\n            py-4 mp-5" },
                    React.createElement(Sunset_1["default"], null),
                    React.createElement("span", { className: 'mt-2' }, helpers_1.getSunTime(data.sunset)))))));
};
exports["default"] = Forecast;
