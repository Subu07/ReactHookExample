import React from "react";
import {Spring} from "react-spring/renderprops";

const posts = [
  { title: "My first Post", id: 1 },
  { title: "My Second Post", id: 2 },
  { title: "My Third Post", id: 3 },
  { title: "My Fourth Post", id: 4 }
];

function AllPosts()  {
  return (
      <Spring
      from = {{ number: 0}}
      to = {{number: 10 }}
      config = {{duration: 1000}}
      >
        {props => <div>{props.number.toFixed()}</div> }
      </Spring>

      /*
    <Trail
      items={ posts }
      keys={posts => posts.id}
      from={{ marginLeft: -20, opacity: 0, color: 'green'}}
      to={{ marginLeft: 100, opacity: 1, color: 'red' }}
    >
      {post => props => (
        <div style={props} className="post">
          {post.title}
        </div>
      )}
    </Trail>
    */
  )
}

export default AllPosts;
