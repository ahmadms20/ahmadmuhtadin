import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const From = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Masukan email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Masukan password" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Kelas</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </Input>
      </FormGroup>
      <Button color="danger">Submit</Button>
    </Form>
  );
}

export default From;