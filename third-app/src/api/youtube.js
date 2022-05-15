import axios from 'axios';

const KEY = 'AIzaSyCfckhlxbQ-H4l_Td0dtxDE20u0o1sbdzo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});