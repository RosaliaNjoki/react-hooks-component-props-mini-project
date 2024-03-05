import React from "react";
import Article from "./Article";

const ArticleList=({posts})=>{
      return(
        <main>
            {posts.map((post, id)=>(
                <Article key={id} title={post.title} date={post.date} minutes={post.minutes} preview={post.preview} />

            ))}
            
        </main>
    );

}
export default ArticleList;