import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZSudKz2Dw8PGg8yI45Gc8gNtLaObSUmTGz8fCvoYFdw'
  }
})