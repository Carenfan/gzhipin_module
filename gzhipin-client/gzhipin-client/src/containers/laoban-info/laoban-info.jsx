/*
* 老板信息完善组件
* */

import React, {Component} from "react"
import {connect} from 'reavt-redux'

class LaobanInfo extends Component{
    state={
        header:'',
        post:'',
        company:'',
        salary:'',
        info:'',

    }

    handleChange = (name,value)=>{
        this.setState({
            [name]:value
        })
    }
    setHeader =(header)=>{
        thid.setState({header})
    }
    save=()=>{
        this.props.updateUser(this.state)
    }

    render(){
        const {header}=this.props.user
        if(header){
            return<Readirect to='/laoban'/>
        }
        return(
            <div>
                <NavBar>完善老板信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem placeholder="招聘职位" onChange={value =>this.handlechange("post",value)}>招聘职位：</InputItem>
               <InputItem plaeceholder='公司名称' onChange={value=>this.handleChange('post',value)}>公司名称:</InputItem>
                <InputItem plaeceholder='职位薪资' onChange={value=>this.handleChange('post',value)}>职位薪资:</InputItem>

                <InputItem plaeceholder='职位要求' onChange={value=>this.handleChange('post',value)}>职位要求:</InputItem>

                <Button type={'primary' onClick={this.save}}>保存</Button>

    </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),{updateUser}
)(LaobanInfo)


