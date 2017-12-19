import React from 'react';
import ReactDOM from 'react-dom';
import Progress from 'antd/lib/progress';
import 'antd/lib/progress/style/css';        // 加载 CSS
import  noData from  './img/noData.png';
import './recordList.css';


let GetQueryString = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

let getTitle = (title, totalScore)  => {
    switch (title) {
        case "SDS":
            return "Zung氏抑郁自评(共" + totalScore + "分)";
        case "SAS":
            return "Zung氏焦虑自评(共" + totalScore + "分)";
        case "DEPRESSED":
            return "抑郁症状筛查(共" + totalScore + "分)";
        case "MANIA":
            return "躁狂症状筛查(共" + totalScore + "分)";
    }
};

let  getStatus = (name, score)  => {
    let status = "green";
    switch (name) {
        case "SDS": {
            if (score >= 0 && score < 62.5) {
                status =  "green";
            } else if (score >= 62.5 && score <= 73.75) {
                status = "yellow";
            } else if (score > 73.75 && score <=  86.25) {
                status =  "orange";
            } else if (score >= 86.25 && score <= 100) {
                status =  "red";
            }
            break;

        }

        case "SAS": {
            if (score >= 0 && score < 20) {
                status = "green";
            } else if (score > 20 && score <= 35) {
                status = "yellow";
            } else if (score > 35 && score <= 40) {
                status =  "orange";
            } else if (score > 40 && score <= 80) {
                status = "red"
            }
            break;
        }
        case "DEPRESSED": {
            if (score >= 0 && score <= 5) {
                status = "green";
            } else if (score > 5 && score <= 9) {
                status = "yellow";
            }
            break;
        }
        case "MANIA": {
            if (score >= 0 && score <= 4) {
                status = "green";
            } else if (score > 4 && score <= 9) {
                status = "yellow";
            }
        }
    }
    return status;
};

const URL = "http://202.16.199.50:8088/Gauge/scale/records";
const Config = {
    /*获取量表检测记录结果路径*/
    //本地测试地址
    GAUGE_GET_RECORD_REPORT : "http://202.16.199.50:8088/Gauge/scale/records",
    //测试服地址
    // GAUGE_GET_RECORD_REPORT : "http://59.110.4.83:8080/Gauge/scale/records",
    //云端地址
    // GAUGE_GET_RECORD_REPORT : "http://www.healai.com:8033/Gauge/scale/records",
};

class RecordTitle extends React.Component {
    render() {
        const styles = {
            fontColor: "gray",
            marginTop: "1rem", //20dp 1rem=20dp
            marginLeft: "0.75rem", //15dp
            fontWeight: "300"
        };

        return (
            <div style={styles}>{this.props.name}</div>
        )
    }
}

class Result extends React.Component {
    render() {
        const styles = {
            marginTop: "1rem", //20dp
            marginLeft: "0.75rem", //15dp
            fontSize: "1.4rem",
            fontWeight: "700",
            padding: "0",
        };

        return (
            <div style={styles}>{this.props.result}</div>
        )
    }
}

class RecordDate extends React.Component {
    render() {
        const styles = {
            fontColor: "gray",
            marginTop: "1rem", //20dp
            marginBottom: "1rem", //20dp
            marginLeft: "0.75rem", //15dp
            fontWeight: "300"
        };
        return (
            <div style={styles} className="recordDate">{this.props.data}</div>
        )
    }
}

class Record extends React.Component {
    constructor() {
        super();
    }

    render() {
        const styles = {
            display: "inline-block", //设置为内联元素
            float: "left",
            width: "70%"
        };

        const styles2 = {
            float: "right",
            display: "inline-block", //设置为内联元素
            marginRight: "0.75rem",
            marginTop: "2rem",
            marginLeft: "0.75rem",
            marginBottom: "1.5rem",
            stroke: "#ffcb7c",

        };

        const style3 = {
            width: "96%",
            float: "left",
            marginRight: "0.75rem",
            marginTop: "0.75rem",
            marginLeft: "0.75rem",
            border: "0.075rem solid rgb(235,235,235)",
            borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
            backgroundColor: "#ffffff"
        };
        return (
            <div style={style3}>
                <div style={styles}>
                    <RecordTitle name={this.props.name}/>
                    <Result result={this.props.result}/>
                    <RecordDate data={this.props.data}/>
                </div>
                <div style={styles2}>
                    <Progress type="circle"
                              percent={this.props.percent}
                              width={80}
                              format={percent => `${this.props.score} 分`}
                              status={this.props.status}
                    />
                </div>
            </div>
        )
    }
}

class RecordReport extends React.Component {
    constructor() {
        super();
        this.state = {
            recordList: [],
            imgStaus: "none",
        };
    }

    componentWillMount() {
        this.getList();
    }

    getList = () => {
        if (GetQueryString("patientID") == null || GetQueryString("paperList") == null)  {
            this.setState({
                imgStaus: "",
            });
            return console.log("参数错误");
        }
        const path = Config.GAUGE_GET_RECORD_REPORT + "?patientID=" + GetQueryString("patientID") + "&paperList=" + GetQueryString("paperList");
        fetch(path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => response.json()).then((responseJson) => {
            if (responseJson.status === '0') {
                this.setState({
                    imgStaus: "",
                });
                return alert("糟糕，网络有问题");
            }
            return this.setList(responseJson.records);
        })
    };

    setList = (records) => {
        let recordList = [];
        if (records.length === 0 || records === null) {
            this.setState({
                imgStaus: "",
            });
        }
        records.map(function (record, index) {
            let re = {};
            re.name = getTitle(record.scaleType, record.totalScore);
            re.result = record.result;
            re.data = record.recordTime.substring(0, 10);
            re.score = record.score;
            re.percent = parseInt((record.score / record.totalScore) * 100);
            re.status = getStatus(record.scaleType, record.score);
            recordList.push(re);
        });
        this.setState({
            recordList: recordList,
            align: "center",
        })
    };

    render() {
        const styles = {
            backgroundColor: "#f0f0f0",
        };

        const List = this.state.recordList;

        const imgStyle = {
            display: this.state.imgStaus,
            textAlign: "center",
            fontSize: "1.5rem",
            fontColor: "#999999",
        };

        const  styleImg = {
            marginTop: "7rem",
            marginBottom: "2.5rem",
            width: "12.6rem",
            height: "12.6rem",
        };
        return (
            <div style={styles}>
                {
                    List.map(function (list, index) {
                        return <Record
                            key={index}
                            name={list.name}
                            result={list.result}
                            data={list.data}
                            percent={list.percent}
                            score={list.score}
                            status={list.status}
                        />
                    })
                }
                <div style={imgStyle}>
                    <img src={noData} alt=""  style={styleImg}/>
                    <div>暂无量表测评记录</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <RecordReport/>,
    document.getElementById('root')
);

export default RecordReport;