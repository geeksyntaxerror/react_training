import React, { Component } from 'react'

interface MainProps{
    data : string[][];
}

const Main: React.FunctionComponent<MainProps> = (props)=>{

    const { data }  = props;

    const content = data.map((row, i)=>{
        const rowContent = row.map((col,j)=><td key={j}>{col}</td>);
        return <tr key={i}>{rowContent}</tr>
    });

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h2>Section title</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                        </tr>
                    </thead>
                    <tbody>
                       {content}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Main;