import axios from "axios";

const getAllDevelopers = async () => {
    try {
        const responseDevelopers = await axios.get('http://localhost:4400/developers')
       return responseDevelopers.data
    }
    catch(err) {
        console.log(err)
    }
}

export default getAllDevelopers;