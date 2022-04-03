import React from "react";
import NewsItem from "./news_list_item";
const Newslist=(props)=>{
    const items=props.news.map((item)=>{
        return(
            <div>
            <NewsItem key={item.id} item={item}/>
            </div>

        )});

return(
    <div>
        {props.children}
        {items}
    
    </div>

)

   
}
export default Newslist;