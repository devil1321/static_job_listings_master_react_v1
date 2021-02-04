import React, { Component } from 'react'
import data from '../api/data.json'
const DataContext = React.createContext();

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            tempItems: [],
            searchWords: []
        }

    }
    componentDidMount() {
        this.setItems(data)
        this.customizeDOM()
    }
 
    setItems = (data) => {
        this.setState({ items: data},()=>{this.setState({tempItems:this.state.items})})
    }
    customizeDOM = () => {
        let appSearch = document.querySelector('.app__search')
        let searchWrapper = document.querySelector('.app__search-wrapper ')
        if (appSearch.children.length <= 0) {
            searchWrapper.style.opacity = '0'
        } else {
            searchWrapper.style.opacity = '1'
        }
    }
    handleSearch = (words,items) => {
        for(let word of words){
            items = items.filter(({role,level,languages,tools})=>{
                    return tools.includes(word) ||
                    role.includes(word) ||
                    level.includes(word) ||
                    languages.includes(word)
            })
        }
        this.setState({
            tempItems:items
        })
    }
    addSearchItem = (word) => {
        let tempWords = [...this.state.searchWords, word]
        this.setState({
            searchWords: tempWords
        }, () => {
            let words = this.state.searchWords
            let items = this.state.items
            this.customizeDOM()
            this.handleSearch(words,items)
        })
        
    }
    removeSearchItem = (word) =>{
        let words = this.state.searchWords.filter(item =>item !== word)
        let items = this.state.items
        this.setState({
            searchWords:words
        },()=>{
            this.customizeDOM()
        })
        this.handleSearch(words,items)
    }
    clearSearchItems = () => {
        this.setState({
            searchWords: []
        }, () => {
            this.customizeDOM()
        })
    }




    render() {

        return ( < DataContext.Provider value = {
                {...this.state,
                        addSearchItem: this.addSearchItem,
                        removeSearchItem:this.removeSearchItem,
                        clearSearchItems: this.clearSearchItems
                }
            } > { this.props.children } <
            /DataContext.Provider>
        )
    }
}
const DataConsumer = DataContext.Consumer;
export { DataProvider, DataConsumer }