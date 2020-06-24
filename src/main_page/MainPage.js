import React from "react";
import "./css/MainPage.css";
import SiderBar from "./components/Sider/SideBar.js";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header.js";
import FrontPanel from "./components/FrontPanel/FrontPanel.js";
import CostumePagination from "./components/Pagination/CostumePagination.js";
const MainPage = (props) => {
    const selectedIngredients = useSelector(
        (state) => state.ingredient.allSelectedIngredients
    );
    const allblackListItems = useSelector(
        (state) => state.blackList.allblackListItems
    );
    const allTags = useSelector((state) => state.tag.allTags);
    return (
        <Container fluid>
            <Row>
                <Col md="2" className="sider">
                    <SiderBar />
                </Col>
                <Col md="10" className="main-body">
                    <Header className="main-header" />
                    <div>
                        <p>main content</p>
                        <button
                            onClick={() => {
                                console.log(selectedIngredients);
                            }}
                        >
                            test button1
                        </button>
                        <button
                            onClick={() => {
                                console.log(allTags);
                            }}
                        >
                            test button2
                        </button>
                        <button
                            onClick={() => {
                                console.log(allblackListItems);
                            }}
                        >
                            test button3
                        </button>
                    </div>
                    <FrontPanel />
                </Col>
            </Row>
            <Row>
                <CostumePagination className="main-pignation" />
            </Row>
        </Container>
    );
};

export default MainPage;
