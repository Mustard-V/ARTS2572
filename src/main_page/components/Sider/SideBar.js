import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import SiderBarTab from "./SideBarTab.js";
import "../../css/SideBar.css";

const SiderBar = (props) => {
    return (
        <Container fluid>
            <SiderBarTab />
        </Container>
    );
};

export default SiderBar;
