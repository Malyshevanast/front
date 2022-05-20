import $api from "../http/index";

export async function signin(login, password) {
   return $api.post("/login", {login, password})
}

export async function signup(login, email, password) {
   return $api.post("/signup", {login, email, password})
}