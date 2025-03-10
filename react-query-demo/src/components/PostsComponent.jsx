import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const { data, isError, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Cache data for 5 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
