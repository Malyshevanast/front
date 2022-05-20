import $api from "../http/index";

export async function getUser() {
   return $api.get("/getInfo")

}