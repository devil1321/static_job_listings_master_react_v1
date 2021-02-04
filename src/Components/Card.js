import React,{Component} from 'react'
import FooterBandge from './FooterBandge'

class Card extends Component{
        render(){
            const {logo,company,featured,position,postedAt,contract,location,role,level,languages,tools} = this.props.dataItems
        return(
            <div style={featured || this.props.dataItems.new  ? {borderLeft:"2px solid hsl(180, 29%, 50%)"} : {} } className="app__card">
            <img src={process.env.PUBLIC_URL + logo} alt="card-logo" className="app__card-img"/>
            <div className="app__card-inner-wrapper">
                <div className="app__card-header">
                    <div className="app__card-title d-flex a-i-c">
                        <p className="app__card-title-text">{company}</p>
                        {this.props.dataItems.new ? <p className="app__card-badge light">NEW!</p>:''}
                        {featured ? <p className="app__card-badge dark">FEATURED</p>:''}
                    </div>
                    <h1 className="app__card-subtitle">{position}</h1>
                    <div className="app__card-header-footer d-flex a-i-c">
                        <p className="app__card-header-footer-text">{postedAt}</p>
                        <div className="app__card-header-footer-dot"></div>
                        <p className="app__card-header-footer-text">{contract}</p>
                        <div className="app__card-header-footer-dot"></div>
                        <p className="app__card-header-footer-text">{location}</p>
                    </div>
                </div>
            </div>
            <div className="app__card-footer d-flex a-i-c f-w">
                <FooterBandge text={role} />
                <FooterBandge text={level} />
                {languages.map(language=>{
                    return <FooterBandge text={language} />
                })}
                {tools.map(tool=>{
                    return <FooterBandge text={tool} />
                })}
            </div> 
            </div>
        )
    }
}
export default Card