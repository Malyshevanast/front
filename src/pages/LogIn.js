import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { signin } from "../services/authService";

function LogIn() {


   const [login, setLogin] = useState()
   const [password, setPassword] = useState()

   function Login() {
      signin(login, password)
         .then(res => localStorage.setItem("token", res.data.token))
   }
   return (
      <div className="d-flex container w-50" style={{ justifySelf: "center" }}>
         <Card className="w-100" style={{ alignItems: "center", margin: 70 }}>
            <Card.Body>
               <Card.Text>
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Enter login"
                           onChange={e => { setLogin(e.target.value) }} />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
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
                           Login()
                        }}>
                        Log In
                     </Button>
                  </Form>
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default LogIn