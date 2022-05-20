import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router";
import { signup } from "../services/authService";

function Signup() {

   const [login, setUsername] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   function Signup() {
      signup(login, email, password)
         .then(res => localStorage.setItem("token", res.data.token))
   }
   return (
      <div className="d-flex container w-50" style={{ justifySelf: "center" }}>
         <Card className="w-100" style={{ alignItems: "center", margin: 86 }}>
            <Card.Body>
               <Card.Text>
                  <Form>
                     <Form.Label>Sing Up</Form.Label>
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control
                           type="text"
                           placeholder="Enter username"
                           onChange={e => { setUsername(e.target.value) }} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control
                           type="text"
                           placeholder="Enter email"
                           onChange={e => { setEmail(e.target.value) }} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                           type="password"
                           placeholder="Enter password"
                           onChange={e => { setPassword(e.target.value) }}
                        />
                     </Form.Group>
                     <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => {
                           e.preventDefault()
                           Signup()
                        }}>
                        Sing Up
                     </Button>
                  </Form>
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Signup