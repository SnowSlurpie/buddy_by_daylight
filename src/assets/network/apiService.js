import axios from "axios";
import dayjs from "dayjs";
import _ from 'lodash';
import localforage from 'localforage';

class APIService{
    consructor () {
        if(APIService._instance) {
            throw new Error ("APIService instance already exists!");
        }
        APIService._instance = this;
    }

    fetch = async (address) => {
        let response = await axios.get(address, { headers: {'req-src': 'web'}});
        let data = response.data;

        if(_.isUndefined(data)) {
            throw new Error('Could not contact the server.');
        }

        if(data instanceof String) {
            data = JSON.parse(data);
        }

        data = JSON.stringify(data);

        return data;
    }

    // TODO: Shrine/Profile data needed
}

var apiService = new APIService();
export default apiService;