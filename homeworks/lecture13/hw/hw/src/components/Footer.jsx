import React from 'react';

export default class Footer extends React.Component {

    containerStyle = {
        display: 'flex',       // 使用 Flexbox 布局
        flexDirection: 'column',  // 垂直排列
        alignItems: 'flex-start'  // 在交叉轴（默认是垂直轴）的起始位置对齐
    };
    
    innerDivStyle = {
        display: 'flex',   // 内部元素水平排列
        justifyContent: 'space-between',  // 元素之间均匀分布
    };

    render() {
        const todos = this.props.todos;
        const remain = todos?.reduce((acc, item) => acc + (item.done?0:1), 0)
        return (
            <div style={this.containerStyle}>
                <div style={this.innerDivStyle}>
                    <p>{remain} remaining</p>
                    <button onClick={this.props.handleClearAllDone}>Clear Completed Todos</button>
                </div>
                <div style={this.innerDivStyle}>
                    <input type="checkbox" onChange={this.props.handleMarkAllDone}></input>
                    <p>Mark All Done</p>
                </div>
            </div>
        )   
    }

}