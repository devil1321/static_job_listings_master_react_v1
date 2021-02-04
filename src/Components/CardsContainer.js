import React,{Component} from 'react'
import {DataConsumer} from '../api/context'
import Card from './Card'
class CardsContainer extends Component{
    render(){
        return(
            <React.Fragment>
            <DataConsumer>{
                (data)=>{
                    return(
                        <div className="app__list">
                        {data.tempItems.map(item=>{
                            return  <Card key = {item.id} dataItems = {item} />
                        })}
                        </div>
                    )
                }
            }</DataConsumer>
            </React.Fragment>
        )
    }
}
export default CardsContainer