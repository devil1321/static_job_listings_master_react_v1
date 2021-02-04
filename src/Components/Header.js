import React,{Component} from 'react'
import {DataConsumer} from '../api/context'
import SearchBandge from './SearchBandge'
class Header extends Component{
    render(){
        return(
            <DataConsumer>
                {(data)=>{
                    return(
                        <div className="app__header">
                            <div className="app__search-wrapper d-flex j-c-sb a-i-c">
                                <div className="app__search d-flex a-i-c f-w">
                                    {data.searchWords.map(word=>{

                                        return <SearchBandge text={word} />  
                                    })}
                                </div>
                                <button className="app__search-btn-clear" onClick={()=>{data.clearSearchItems()}}>Clear</button>
                            </div>
                        </div>
                    )
                }}
            </DataConsumer>
           
        )
    }
}
export default Header;