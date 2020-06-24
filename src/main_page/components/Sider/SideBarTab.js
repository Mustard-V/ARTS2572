import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Tag, Input } from "antd";
import "antd/dist/antd.css";
import SideBarCollapse from "./SideBarCollapse.js";
import "../../css/SideBarTab.css";
import SideButtonGroup from "./SideButtonGroup.js";
import { useSelector, useDispatch } from "react-redux";
import { deleteIngredient } from "../../redux/actions";

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Badge,
} from "reactstrap";

const mock_data = {
    SideBarData: [
        {
            type: "Dairy",
            ingredients: ["butter", "egg", "milk", "parmesan", "cheddar"],
        },
        {
            type: "Vegetables",
            ingredients: ["onion", "garlic", "tomato", "potate", "carrot"],
        },
        {
            type: "Fruit",
            ingredients: ["lemon", "apple", "banana", "lime", "strawberry"],
        },
        {
            type: "Alcohol",
            ingredients: [
                "white wine",
                "beer",
                "red wine",
                "vodka",
                "rum",
                "teqila",
                "sherry",
                "cooking wine",
            ],
        },
    ],
};

const SiderBarTab = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const [data, setData] = useState([]);

    // state of the expand all button
    const [activeB, setActiveB] = useState(false);
    const { Search } = Input;

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    //state.allSelectedIngredients
    const selectedIngredients = useSelector(
        (state) => state.ingredient.allSelectedIngredients
    );
    function fetchData() {
        // fetch("/ingredients/list")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data.sidebarData);
        //     });
        setData(mock_data.SideBarData);
    }
    const dispatch = useDispatch();
    /* 
		Note: the empty deps array [] means
		this useEffect will run once
		similar to componentDidMount()
		when user add or delete ingredients on other components 
		should trigger refetch data here, make an indicator varible and 
		pass here into the dependency array
	*/
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Nav tabs className="side-tabs">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                            toggle("1");
                        }}
                    >
                        Category
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                            toggle("2");
                        }}
                    >
                        Cart
                        <Badge className="sider-badge" color="light">
                            {selectedIngredients.length}
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                            toggle("3");
                        }}
                    >
                        Search
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Nav vertical className="sidebar-item">
                                <SideButtonGroup
                                    className="sidebar-bg"
                                    toogle={() => setActiveB(!activeB)}
                                />
                                {data.map((sitem, index) => (
                                    <SideBarCollapse
                                        IngredientType={sitem.type}
                                        key={index}
                                        IngredientName={sitem.ingredients}
                                        btnState1={activeB}
                                    />
                                ))}
                            </Nav>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <div className="sidebar-item">
                        <p>everything selected should be presented here.</p>
                        {selectedIngredients.map((item, index) => (
                            <Tag
                                className="tag-item"
                                closable
                                key={index}
                                onClose={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteIngredient(item));
                                }}
                            >
                                {item}
                            </Tag>
                        ))}
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div className="sidebar-item">
                        <Search
                            className="sider-search"
                            placeholder="input search text"
                            onSearch={(value) => console.log(value)}
                        />
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default SiderBarTab;
