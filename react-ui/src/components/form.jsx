import { InputGroup, FormControl, Form, Button} from 'react-bootstrap'

const handleSubmit =(e) =>{
  alert('Question Submitted, Thank you!');
  e.preventDefault();

  
}

function AnonForm(){
 return(
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Your Name/Username</InputGroup.Text>
        <FormControl
          placeholder="Leave blank if you would like to remain anonymous"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form.Group>

    <Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text>Tip amount $</InputGroup.Text>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </Form.Group>
    <Form.Group>
      <InputGroup>
        <InputGroup.Text>Question</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" placeholder="enter your question here" />
      </InputGroup>
    </Form.Group>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
 )
}

export default AnonForm