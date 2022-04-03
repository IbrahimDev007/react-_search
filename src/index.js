import React from "react";
import ReactDOM from "react-dom";
import JSON from "./db.json";
//component
import Headerj from "./components/header";
import Newslist from "./components/news_list";
class App extends React.Component{
   state={
      news:JSON ,
      filtered:[],
   }
 getkeyword=(event)=>{
  
   // console.log(event.target.value)
   let keyword=event.target.value;
   let filtered =this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1
   });
   this.setState({
      filtered
   })
   //console.log(filtered);
 }
 
render(){ 
    const newswhole=this.state.news;
    const newsfilter=this.state.filtered;
   return (
     <div> 
       <Headerj keyword={this.getkeyword} /> 
        <Newslist news={this.state.filtered.length === 0 ? newswhole:newsfilter}>
          <h3>
             The news here:
          </h3>
        </Newslist>
     </div> 
   )   
 }
}
ReactDOM.render(<App/>,document.getElementById('root'))