import Axios from "axios";

const EMPLOYEE_URL = "http://localhost:3010/api/employees";
const TEAMS_URL = "http://localhost:3010/api/teams";
const POINT_TYPES_API = "http://localhost:3010/api/pointTypes";

export function fetchEmployees() {
    const request = Axios.get(EMPLOYEE_URL)
    return request;
}

export function fetchTeams() {
    const request = Axios.get(TEAMS_URL)
    return request;
}

export function fetchPointTypes() {
    const request = Axios.get(POINT_TYPES_API)
    return request;
}
