/**
 * Created by choleece on 2017/7/13.
 */
import React, { Component } from 'react';
import xiaobai from '../../images/xiaobai.png';
import RadioButton from './CRadioButton';
import CMultiButton from './CMultiCheckBox';
import CTextArea from './CTextArea';
import SimpleBlank from "./SimpleBlank";
import MultiModal from './MultiModal';
import SimpleDouble from './RadioButtonDouble';
import  $ from 'jquery';
import  Config from '../constant/Config';

import '../../styles/Content.css';
import '../../styles/RobotContent.css';

import QuestionType from '../constant/QuestionType';
import QuestionAnswerDescription from '../constant/QuestionAnswerDescription';

export default class CRobotContent extends Component {

    static propTypes = {
        handleUserActions: React.PropTypes.func,
        questionType: React.PropTypes.string,
        questionSummarize: React.PropTypes.string,
        userid: React.PropTypes.string,
        recordid: React.PropTypes.string,
        questionGroup: React.PropTypes.string,
        questionNo: React.PropTypes.string,
        miniResults: React.PropTypes.object,
        miniOrder: React.PropTypes.string,
        handleMINIResult: React.PropTypes.func,
        source: React.PropTypes.string,
        handleQuitResult: React.PropTypes.func,
        width: React.PropTypes.number.isRequired,
        changeAnswer: React.PropTypes.func,
        isLast: React.PropTypes.bool,
        hasEdit: React.PropTypes.bool
    };

    createRobotContent = () => {

        if (this.props.questionType === QuestionType.QuestionType.simple) {
            let options = this.props.questionSummarize === QuestionType.mini ?
                QuestionAnswerDescription[QuestionType.mini][this.props.questionType][this.props.questionGroup][this.props.questionNo].options
                :
                QuestionAnswerDescription[this.props.questionSummarize][this.props.questionType][this.props.questionNo].options;
            return (
                <RadioButton options={options}
                             handleChoice={this.props.handleUserActions} questionSummarize={this.props.questionSummarize}
                             recordid={this.props.recordid} userid={this.props.userid} questionGroup={this.props.questionGroup}
                             questionNo={this.props.questionNo} miniResults={this.props.miniResults}
                             miniOrder={this.props.miniOrder} handleMINIResult={this.props.handleMINIResult} source={this.props.source}
                             handleQuitResult={this.props.handleQuitResult} changeAnswer={this.props.changeAnswer}
                             isLast={this.props.isLast} hasEdit={this.props.hasEdit}
                />
            );
        }
        if (this.props.questionType === QuestionType.QuestionType.multi_double) {
            let options = this.props.questionSummarize === QuestionType.mini ?
                QuestionAnswerDescription[QuestionType.mini][this.props.questionType][this.props.questionGroup][this.props.questionNo].options
                :
                QuestionAnswerDescription[this.props.questionSummarize][this.props.questionType][this.props.questionNo].options;
            return (
                <CMultiButton options={options}
                              handleChoice={this.props.handleUserActions} questionSummarize={this.props.questionSummarize}
                              recordid={this.props.recordid} userid={this.props.userid} questionGroup={this.props.questionGroup}
                              questionNo={this.props.questionNo} miniResults={this.props.miniResults}
                              miniOrder={this.props.miniOrder} handleMINIResult={this.props.handleMINIResult} source={this.props.source}
                />
            );
        }
        if (this.props.questionType === QuestionType.QuestionType.blank) {
            return (
                <CTextArea handleUserSubmit={this.props.handleUserActions} questionSummarize={this.props.questionSummarize} recordid={this.props.recordid}
                           userid={this.props.userid} miniResults={this.props.miniResults}
                           questionGroup={this.props.questionGroup} questionNo={this.props.questionNo} miniOrder={this.props.miniOrder}
                           handleMINIResult={this.props.handleMINIResult} source={this.props.source} handleQuitResult={this.props.handleQuitResult}
                />
            );
        }
        if (this.props.questionType === QuestionType.QuestionType.simple_blank) {
            return (
                <SimpleBlank options={QuestionAnswerDescription[this.props.questionSummarize][this.props.questionType][this.props.questionNo].options}
                             handleChoice={this.props.handleUserActions} questionSummarize={this.props.questionSummarize}
                             recordid={this.props.recordid} userid={this.props.userid} source={this.props.source}
                             placeholder={this.props.questionNo === "nation" ? "其他民族" : "其他职业"} questionNo={this.props.questionNo}
                />
            );
        }
        // 弹出两列
        /*if (this.props.questionType === QuestionType.QuestionType.multi_modal) {
            return (
                <MultiModal options={QuestionAnswerDescription.basic.multi_modal.nation.options} placeholder="请选择您直系亲属的精神类疾病"/>
            );
        }*/
        // 单选变两列
        if (this.props.questionType === QuestionType.QuestionType.simple_double) {
            return (
                <SimpleDouble options={QuestionAnswerDescription[this.props.questionSummarize][this.props.questionType][this.props.questionNo].options} handleChoice={this.props.handleUserActions}
                              questionSummarize={this.props.questionSummarize} source={this.props.source}
                              recordid={this.props.recordid} userid={this.props.userid} questionNo={this.props.questionNo}
                />
            );
        }
    };

    render() {

        const { width } = this.props;

        return (
            <div className="robot-content">
                <img src={xiaobai} style={{width: 100, height: 100, borderRadius: 10, float: 'left'}}/>
                <div>
                    {
                        Number.prototype.toPercent = function () {
                            return parseInt(Math.round(this*100)/167+'%');
                        }
                    }
                </div>
                <div className="talk-bubble robot-talk-bubble" style={{width: '80%'}}>
                    <div className="robot-title">
                        {
                            this.props.questionSummarize === QuestionType.mini ?
                                QuestionAnswerDescription[QuestionType.mini][this.props.questionType][this.props.questionGroup][this.props.questionNo].content
                                :
                                QuestionAnswerDescription[this.props.questionSummarize][this.props.questionType][this.props.questionNo].content
                        }{this.props.questionType === QuestionType.QuestionType.multi_double ? <text style={{color: '#999999'}}>(可多选)</text> : null}
                    </div>
                    <div style={{paddingTop: 15}}>
                        {
                            this.createRobotContent()
                        }
                    </div>
                </div>
                <div style={{clear: 'both'}}/>
            </div>
        );
    }

    componentDidMount() {
        let nodes = document.getElementsByClassName("robot-content");
        let nodeHeight = nodes[nodes.length - 1].offsetHeight;
        let windowHeight = document.getElementById("body").scrollHeight;

        $('html, body').animate({scrollTop: windowHeight - nodeHeight - Config.content_foot_height}, Config.duration);
    }
}