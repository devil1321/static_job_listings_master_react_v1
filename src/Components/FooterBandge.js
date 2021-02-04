import React,{Component} from 'react'
import {DataConsumer} from '../api/context'

class FooterBandge extends Component{
    render(){
        return(
            <DataConsumer>
                {(data)=>{
                    return(
                        <p className="app__card-footer-badge" onClick={(e)=>{
                            let word = e.target.textContent
                            data.addSearchItem(word)
                            }}>{this.props.text}</p>
                    )
                }}
            </DataConsumer>
           
        )
    }
}
export default FooterBandge