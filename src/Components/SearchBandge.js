import React,{Component} from 'react'
import {DataConsumer} from '../api/context'

class SearchBandge extends Component{
    render(){
        return(
            <DataConsumer>
            {(data)=>{
                return(
                    <div className="app__search-bandge d-flex j-c-sb a-i-c">
                        <p className = "app__search-bandge-text">{this.props.text}</p>
                        <div className = "app__search-bandge-delete" onClick = {(e)=>{
                            let word = e.target.previousElementSibling.textContent
                           
                            data.removeSearchItem(word)
                            }}>X</div>
                    </div>
                )
            }}
           
            </DataConsumer>
           
        )
    }
}
export default SearchBandge