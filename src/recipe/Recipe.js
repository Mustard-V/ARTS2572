import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, Button, Badge, Media , InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './css/RecipePage.css'

const images = JSON.parse(sessionStorage.getItem('images') || '[]');

const RecipePanel = props => {
    
    console.log(images)
    const { id } = props.match.params;
    const goods = images.find(item => item.meal_name === id )

    return (
        <Container className="mt-2">
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Card className="mb-2">
                        <CardImg className="recipe-img" top width="100%" src={process.env.PUBLIC_URL + "/image/" + goods.image_file_name} alt="Card image cap" />
                        <div className="share-wrap">
                            <Button color="link" size="sm" className="mr-2">
                                <svg t="1593013818062" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2217" width="24" height="24"><path d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#00C800" p-id="2218"></path><path d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#00C800" p-id="2219"></path></svg>
                            </Button>
                            <Button color="link" size="sm" className="mr-2">
                                <svg t="1593014357015" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2217" width="24" height="24"><path d="M967.601349 1024c31.076808 0 56.398651-25.321843 56.398651-56.398651V56.398651c0-31.076808-25.321843-56.398651-56.398651-56.398651H56.398651C25.321843 0 0 25.321843 0 56.398651v910.819034c0 31.076808 25.321843 56.398651 56.398651 56.398651h911.202698z" fill="#3C5A99" p-id="3229"></path><path d="M706.709629 1024V627.29112h133.13151l19.950543-154.61671h-153.082053V374.072686c0-44.888722 12.277257-75.198202 76.732859-75.198201h81.720494v-138.119146c-14.195579-1.918321-62.920944-6.138629-119.319595-6.138629-118.168602 0-198.738104 72.128887-198.738104 204.109405v113.948295h-133.515174v154.61671h133.515174v396.70888h159.604346z" fill="#FFFFFF" p-id="3230"></path></svg>
                            </Button>
                            <Button color="link" size="sm" className="mr-2">
                                <svg t="1593014410118" className="icon" viewBox="0 0 1031 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2217" width="24" height="24"><path d="M0 0z m790.037 519.76c0 149.27-121.04 270.277-270.276 270.277-149.269 0-270.276-121.007-270.276-270.276a266.31 266.31 0 0 1 5.1-51.976H72.767v359.252c0 77.12 62.468 139.718 139.718 139.718h614.552c77.12 0 139.718-62.533 139.718-139.718V467.785H785.001a271.41 271.41 0 0 1 5.036 51.976z m37-446.993H212.485c-77.185 0-139.718 62.566-139.718 139.718v151.348h226.29c48.923-69.129 129.518-114.348 220.704-114.348s171.78 45.22 220.703 114.348h226.291V212.485c0-77.12-62.566-139.718-139.718-139.718z m68.349 172.56c0 13.774-11.24 24.949-24.949 24.949h-74.78c-13.71 0-24.95-11.24-24.95-24.949v-74.845c0-13.774 11.273-24.949 24.95-24.949h74.78c13.774 0 24.949 11.24 24.949 24.949v74.845zM686.084 519.761c0-91.9-74.488-166.324-166.323-166.324s-166.324 74.424-166.324 166.324 74.489 166.323 166.324 166.323 166.323-74.423 166.323-166.323z" fill="#CF2F79" p-id="4145"></path></svg>
                            </Button>
                        </div>
                        <CardBody>
                            <CardTitle>{goods.meal_name}</CardTitle>
                            <dl className="info-item">
                                <dt>tags</dt>
                                <dd>
                                    <Badge className="mr-2" color="secondary">Spicy</Badge>
                                    <Badge className="mr-2" color="secondary">Asia</Badge>
                                    <Badge className="mr-2" color="secondary">Breakfast</Badge>
                                </dd>
                            </dl>
                            <dl className="info-item my-2">
                                <dt>Ingredients</dt>
                                <dd>
                                    <ol className="ml-0 pl-4">
                                        <li>土豆</li>
                                        <li>辣椒</li>
                                        <li>盐</li>
                                        <li>酱油</li>
                                    </ol>
                                </dd>
                            </dl>
                            <dl className="info-item my-2">
                                <dt>Shop In Coles</dt>
                                <dd><a href="www.coles.com/au">www.coles.com/au</a></dd>
                            </dl>
                        </CardBody>
                    </Card>
                    <Card className="mb-2">
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <InputGroup className="mb-2">
                                <Input placeholder="Add you comment"/>
                                    <InputGroupAddon addonType="append">
                                    <Button color="secondary">submit</Button>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <Media className="comment-item">
                                <Media left href="#" className="mr-2">
                                    <svg t="1593019304039" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4491" width="48" height="48"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM384.8 376c4-64 56-115.2 120-119.2 74.4-4 135.2 55.2 135.2 128 0 70.4-57.6 128-128 128-73.6 0-132-62.4-127.2-136.8zM768 746.4c0 12-9.6 21.6-21.6 21.6H278.4c-12 0-21.6-9.6-21.6-21.6v-64c0-84.8 170.4-128 255.2-128 84.8 0 255.2 42.4 255.2 128l0.8 64z" p-id="4492" fill="#dbdbdb"></path></svg>
                                </Media>
                                <Media body>
                                    <Media heading>Jam <small className="text-muted ml-2">2020-01-21 14:13:09</small></Media>
                                    That's awasome
                                </Media>
                            </Media>
                            <Media className="comment-item">
                                <Media left href="#" className="mr-2">
                                    <svg t="1593019304039" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4491" width="48" height="48"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM384.8 376c4-64 56-115.2 120-119.2 74.4-4 135.2 55.2 135.2 128 0 70.4-57.6 128-128 128-73.6 0-132-62.4-127.2-136.8zM768 746.4c0 12-9.6 21.6-21.6 21.6H278.4c-12 0-21.6-9.6-21.6-21.6v-64c0-84.8 170.4-128 255.2-128 84.8 0 255.2 42.4 255.2 128l0.8 64z" p-id="4492" fill="#dbdbdb"></path></svg>
                                </Media>
                                <Media body>
                                    <Media heading>Jam <small className="text-muted ml-2">2020-01-21 14:13:09</small></Media>
                                    That's awasome
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipePanel;