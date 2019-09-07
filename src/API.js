import Axios from "axios";

const EMPLOYEE_URL = "http://localhost:3010/api/employees";
const TEAMS_URL = "http://localhost:3010/api/teams";

export function fetchEmployees() {
    const request = Axios.get(EMPLOYEE_URL)
    return request;
}

export function fetchTeams() {
    const request = Axios.get(TEAMS_URL)
    return request;
}
