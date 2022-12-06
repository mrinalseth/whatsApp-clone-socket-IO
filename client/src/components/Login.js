import react, {useRef} from 'react'
import {Container, Form} from 'react-bootstrap'


const Login = () => {

  const idRef = useRef()
  
    return (
      <Container className="d-flex align-items-center" style={{height: "100vh"}} >
        <Form className="w-100">
          <Form.Group>
            <Form.Label>Enter Your Id</Form.Label>
            <Form.Control ref={idRef} required />
          </Form.Group>
        </Form>
      </Container>
    )
}

export default Login