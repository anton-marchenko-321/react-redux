import axios from "axios";

const fetchPosts = ({id}) => (
    axios.get('http://localhost:3000/messages')
)

export { fetchPosts }