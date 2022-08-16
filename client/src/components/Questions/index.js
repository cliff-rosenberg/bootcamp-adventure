import React, { useState } from "react";

import Queston1 from './question_1'
import Queston2 from './question_2'

function Questions(props) {

    const [start, setStart] = useState(false);
    const [question, setQuestion] = useState("");

    function loadQuestion() {

     
        if(!start && question === "") {
            return (
                <>
                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <img src="/images/Logo1.png" className="img w-100"></img>
                        </div>
                    </div>

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
                    <Queston1 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("q_1_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("question_one_no")} className="btn btn-primary text-center w-25"> No </button>
                        </div>
                    </div>
                </>
                
            )
        }
        else if(question === 'q_1_yes' && start) {
            return (
                <>
                    <Queston2 />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                        <button onClick={() => setQuestion("question_one_yes")} className="btn btn-primary text-center w-25"> Yes </button>
                        <button onClick={() => setQuestion("question_one_no")} className="btn btn-primary text-center w-25"> No </button>
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
