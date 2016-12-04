import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface props{
    data:any[];
    height:number;
    itemHeight:number;
}

export default class DynamicScroll extends React.Component<props,any>{

    refs:any;

    constructor(){
        super();
        this.state={
            currentMin:0,
            displayNum:40,
            children:[]
        }
    }

    componentWillMount(){
        const displayNum:number = this.props.height / this.props.itemHeight + 10;

        this.setState({
            currentMin:0,
            displayNum:displayNum,
            children:this.props.data.slice(this.state.currentMin,this.state.currentMin + displayNum)
        })
    }

    componentDidMount(){
        this.refs.scrollFather.addEventListener('scroll' , ()=>{
            const scrollTop = this.refs.scrollFather.scrollTop;
            const itemHeight = this.props.itemHeight;
            let currentMin:number = 0;
            if(scrollTop > itemHeight*5){
                currentMin = (scrollTop - itemHeight*5)/itemHeight
            }
            this.setState({
                currentMin:currentMin,
                children:this.props.data.slice(currentMin,currentMin + this.state.displayNum)
            })
        })
    }

    render(){
        const divStyle = {
            height:this.props.height,
            overflow:'auto'
        }

        const topHeight = this.props.itemHeight * this.state.currentMin;
        const bottomHeight = (this.props.data.length - this.state.currentMin - this.state.displayNum)* this.props.itemHeight;


        return(
            <div id='scrollFather' ref='scrollFather' style={divStyle}>
                <div style={{height:topHeight}}></div>
                {this.state.children}
                <div style={{height:bottomHeight}}></div>
            </div>
        )
    }
} 