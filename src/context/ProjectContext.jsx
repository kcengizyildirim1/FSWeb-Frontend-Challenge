/*

{
    [
        {
            "title": "Workintech",
            "Desc": "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            "useTech": ["react", "redux", "axios"],
            "img": "../assets/workintech.png",
            },
            {
            "title": "Random",
            "Desc": "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            "useTech": ["react", "redux", "axios"],
            "img": "../assets/random.png",
            },
            {
            "title": "Journey",
            "Desc": "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            "useTech": ["react", "redux", "axios"],
            "img": "../assets/journey.png",
        },
    ];
}

*/

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://654fce63358230d8f0cdb606.mockapi.io/objects")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
