import React from 'react';
import { Row, Col, Card, Button, CardHeader, CardBody, FormGroup, Label, Input, Form } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>Search</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                <Label for="topic">Topic</Label>
                <Input type="text" name="topic" id="searchTopic" />
                </FormGroup>
                <FormGroup>
                <Label for="startYear">Starting Year</Label>
                <Input type="text" name="startYear" id="startYear" />
                </FormGroup>
                <FormGroup>
                <Label for="endYear">Ending Year</Label>
                <Input type="text" name="endYear" id="endYear" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
