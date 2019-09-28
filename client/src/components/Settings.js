import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button' 
 
function Settings(props) {

  const [workDef, setWorkDef] = useState(0)
  const [breakDef, setBreakDef] = useState(0)

  function updateSettings(e) {
    e.preventDefault()
    props.setWorkDefinition(workDef)
    props.setBreakDefinition(breakDef)
  }
    return ( 
            <Form>
  <Row>
    <Col>
      <Form.Control placeholder="Work Length" type="number" onChange={(e) => setWorkDef(e.target.value)} />
    </Col>
    <Col>
      <Form.Control placeholder="Break Length" type="number" onChange={(e) => setBreakDef(e.target.value)} />
    </Col>
  </Row>

  <Button variant="primary" type="submit" onClick={(e) => updateSettings(e)} >
        Save
    </Button>
</Form> 
    );
}

export default Settings