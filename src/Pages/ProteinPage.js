import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OnlyWhey from '../ProteinImages/only-whey-final-300x300.png';
import AfterTrainAdvanced1 from '../ProteinImages/orange-mango-advanced-aftertrain-for-web-300x300.png';
import AfterTrainAdvanced2 from '../ProteinImages/AFTER-TRAIN-ADVANCED-300x300.png';
import AfterTrainAdvanced3 from '../ProteinImages/advanced-aftertrain-strawberrylime-300x300.png';
import AfterTrainFruit from '../ProteinImages/1After_Train_Fruit_Punch-1-300x300.png';
import AfterTrainRaspberry from '../ProteinImages/2After_Train_Raspberry-1-300x300.png';
import AfterTrainOrange from '../ProteinImages/3After_Train_Orange-1-300x300.png';
import AfterTrainApple from '../ProteinImages/apple-aftertrain-300x300.png';

function ProteinPage() {
    return (
        <div>
            <div className="row">
                {/* First Card */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={OnlyWhey} />
                        <Card.Body>
                            <Card.Title>The Only Whey 2.2KG <br/> 74 servings </Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Add more cards here */}
                {/* Second Card */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainAdvanced1} />
                        <Card.Body>
                            <Card.Title>After Train Advanced: Orange and Mango Flavour </Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Third Card */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainAdvanced2} />
                        <Card.Body>
                            <Card.Title>After Train Advanced: Blue Candy Flavour</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Add more cards here */}
                {/* Fourth Card */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainAdvanced3} />
                        <Card.Body>
                            <Card.Title>After Train Advanced: Strawberry and LIme Flavour</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Fifth Card */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainFruit} />
                        <Card.Body>
                            <Card.Title>After Train: Fruit Punch Flavour Post Workout</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Sixth Card */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainApple} />
                        <Card.Body>
                            <Card.Title>After Train: <br/>Apple Flavour Post Workout</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainOrange} />
                        <Card.Body>
                            <Card.Title>After Train: <br/> Orange Flavour Post Workout</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={AfterTrainRaspberry} />
                        <Card.Body>
                            <Card.Title>After Train: <br/>Blue Raspberry Flavour</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Add To Basket</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProteinPage;

