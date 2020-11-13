import React from "react";
import {
    Card, CardText, CardBody, CardTitle
} from 'reactstrap';

export default function HealthValue({text, value}) {
    return <div className='health-item'>
        <Card>
            <CardBody>
                <CardTitle tag="h5">{text}: </CardTitle>
            </CardBody>
            <CardBody>
                <CardText>{value}</CardText>
            </CardBody>
        </Card>
    </div>
}