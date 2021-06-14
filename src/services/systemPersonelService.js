import axios from "axios";

export default class SystemPersonelService{
    getSystemPersonels(){
        return axios.get("http://localhost:8080/api/systempersonels/getall")
    }
}