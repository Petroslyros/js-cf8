import PI from "./lib2";      // default export dont need {}
import { EPSILON, API_URL } from "./lib2";

let radius = 10
let circumference = 2 * PI * radius
const equal = Math.abs(circumference) < EPSILON