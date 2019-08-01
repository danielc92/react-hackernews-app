import axios from "axios";
/*
Routes I will be using in this application.
/v0/newstories.json
/v0/topstories.json
/v0/beststories.json
/v0/jobstories.json
/v0/showstories.json
/v0/askstories.json
/v0/item/{id}.json
*/
export default axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/'
})
