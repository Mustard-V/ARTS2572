import React from "react";
import { useParams } from "react-router-dom";
import DashBoard from "./DashBoard";
import BookMark from "./BookMark";
import Email from "./Email";
import Ingredient from "./Ingredient";
import Recipe from "./Recipe";
import ErrorPage from "./ErrorPage";
const PlaceHolder = (props) => {
    let { topicId } = useParams();

    switch (topicId) {
        case "bookmark":
            return <BookMark />;
        case "email":
            return <Email />;
        case "dashboard":
            return <DashBoard />;
        case "ingredient":
            return <Ingredient />;
        case "recipe":
            return <Recipe />;
        default:
            return <ErrorPage />;
    }
};
export default PlaceHolder;
