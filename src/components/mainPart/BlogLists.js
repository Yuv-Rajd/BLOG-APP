import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Button } from "@mui/material";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { getAllPost } from "../../utils/PostControl";
import { useEffect, useState } from "react";
import { Description } from "@mui/icons-material";
import {
  BlogListStyle,
  cursor,
  mainDivStyle,
} from "../../styles/MainPart.style";
import SkeletonBox from "../Skeleton";

export default function BlogList(props) {
  const { handleBlogView } = props;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //scrolling top fucntion
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //fetch all blog posts
  async function getData() {
    setLoading(true);
    const res = await getAllPost();
    if (res.status) {
      setPosts(res.posts.data.data);
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box sx={mainDivStyle}>
        {loading ? (
          <SkeletonBox />
        ) : (
          <List sx={BlogListStyle} subheader={<li />}>
            <ListSubheader>{"Scroll all Blogs here...."}</ListSubheader>
            {posts.map((post) => (
              <ListItem
                key={`item-${post.id}`}
                onClick={() => {
                  handleBlogView(post.id);
                  goToTop();
                }}
                sx={cursor}
              >
                <ListItemText
                  primary={`${post.title} `}
                  secondary={post.slug}
                />
                <Button
                  startIcon={<NorthWestIcon />}
                  onClick={() => {
                    handleBlogView(post.id);
                  }}
                ></Button>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </div>
  );
}
