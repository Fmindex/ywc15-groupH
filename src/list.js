import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div className="container">
                <table className="table" style={{ width: '80%', left: 0, right: 0, margin: 'auto' }} >
                    <thead>
                    <tr>
                        <th style={{ width: 250, fontSize: 20 }} >#</th>
                        <th style={{ fontSize: 20, textAlign: 'left' }} >ชื่อ-สกุล</th>
                        <th style={{ width: 250, fontSize: 20 }} >สาขา</th>
                    </tr>
                    </thead>
                    <tbody border="0">
                    {
                        this.props.users.map((user, index) => {
                            return (
                                <tr key={ index } >
                                    <td style={{ width: 250, textAlign: 'left'  }} >{ user.interviewRef } </td>
                                    <td style={{ textAlign: 'left' }}> {`${user.firstName} ${user.lastName}`} </td>
                                    <td style={{ width: 240, textAlign: 'left'}} >WEB { user.major.toUpperCase() }</td>
                                </tr>
                            );
                        })
                        
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;