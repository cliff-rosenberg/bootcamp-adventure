import React, { useState } from "react";

import Question1 from './question_1'
import Question2 from './question_2'
import Question3 from './question_3'
import Question4 from './question_4'
import Question5 from './question_5'
import Question6 from './question_6'
import Question7 from './question_7'
import Question8 from './question_8'
import Question9 from './question_9'
import Question10 from './question_10'
import Question11 from './question_11'
import Question12 from './question_12'
import Question13 from './question_13'
import Question14 from './question_14'
import Question15 from './question_15'
import Question16 from './question_16'
import Question17 from './question_17'
import Question18 from './question_18'
import Question19 from './question_19'

function Questions(props) {

    const [start, setStart] = useState(false);
    const [question, setQuestion] = useState("");

    function loadQuestion() {

     
        if(!start && question === "") {
            return (
                <>
                    {/* <div className="row">
                        <div className="col-12 text-center mt-3">
                            <img src="/images/Logo1.png" className="img w-100"></img>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setStart(true)} className="btn btn-primary text-center w-25"> Start </button>
                        </div>
                    </div>
                </>
                
        
            )
        }
        else if(start && question === "") {
            return (
                <>
                    <Question1 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_1_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_1_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
            )
        }
        else if(question === 'q_1_yes' && start) {
            return (
                <>
                    <Question2 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_2_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_2_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }
        else if(question === 'q_1_no' && start) {
            return (
                <>
                    <Question3 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_3_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_3_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_3_yes' && start) {
            return (
                <>
                    <Question4 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_4_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_4_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_4_yes' && start) {
            return (
                <>
                    <Question5 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_5_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_5_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_5_yes' && start) {
            return (
                <>
                    <Question6 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_6_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_6_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_6_yes' && start) {
            return (
                <>
                    <Question7 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_7_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_7_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_7_yes' && start) {
            return (
                <>
                    <Question8 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_8_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_8_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_8_yes' && start) {
            return (
                <>
                    <Question9 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_9_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_9_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_9_yes' && start) {
            return (
                <>
                    <Question10 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_10_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_10_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_10_yes' && start) {
            return (
                <>
                    <Question11 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_11_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_11_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_11_yes' && start) {
            return (
                <>
                    <Question12 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_12_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_12_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_12_yes' && start) {
            return (
                <>
                    <Question13 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_13_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_13_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_13_yes' && start) {
            return (
                <>
                    <Question14 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_14_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_14_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_14_yes' && start) {
            return (
                <>
                    <Question15 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_15_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_15_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_15_yes' && start) {
            return (
                <>
                    <Question16 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_16_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_16_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_16_yes' && start) {
            return (
                <>
                    <Question17 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_17_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_17_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_17_yes' && start) {
            return (
                <>
                    <Question18 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_18_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_18_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }else if(question === 'q_18_yes' && start) {
            return (
                <>
                    <Question19 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_19_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("q_19_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
        
            )
        }
    }
  
    return (
        <div className="container">
            {loadQuestion()}
        </div>
        
    );
  }
  
export default Questions;
