import React from 'react'
import "../css/report.css"
import RenderRow from "./RenderRow"

class   ReportList extends React.Component {

    getKeys = () => {
        console.log("colExists "+this.props.data[0])
        if (!this.props.hasOwnProperty("columns"))
            return Object.keys(this.props.data[0])
        else {
            return (this.props.columns)
        }  //true
    }


    getHeader = () => {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })


    }
    getD = (rowArray, keyArray, items) => {

        items = rowArray;
        return items.map((row, index) => {
            return <RenderRow key={index} data={row} keys={keyArray[index]} columns={this.props.columns} />

        })
    }

    getRowsData = () => {
        if (!this.props.hasOwnProperty("columns")) {
            var items = this.props.data;
            var keys = this.getKeys();
            return items.map((row, index) => {
                return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
            })
        } else {
            var items;
            var rowIndex = -1;
            var keyArray = this.getKeys();

            return (
                this.props.rows.map((rowArray, i) => {
                    rowIndex = rowIndex + 1
                    return <tr key={rowIndex}>{this.getD(rowArray, keyArray, items)}</tr>

                })

            )
        }
    }


    render() {
        return (<>

            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>

        </>
        );
    }

}
export default ReportList









