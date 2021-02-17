import React, { Component } from 'react'
import './multiSelectionRadioBtn'


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            hobbies:[]
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        
        if(target.checked){
            this.state.hobbies[value] = value;   
        }else{
            this.state.hobbies.splice(value, 1);
        }
        
    }

    submit(){
        console.warn(this.state)
    }

    render(){
        return(
            <div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <br /><br />
                        
                            <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Choose Category :</label><br />
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="1" onChange={this.handleInputChange} />
                                    <label class="form-check-label" for="inlineCheckboxh1">Reading</label>
                                </div>  
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh2" value="2" onChange={this.handleInputChange} />
                                    <label class="form-check-label" for="inlineCheckboxh2">Developing</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh3" value="3" onChange={this.handleInputChange} />
                                    <label class="form-check-label" for="inlineCheckboxh3">Desiging</label>
                                </div>
                            </div>
                        </div>

                      {/*   <div class="form-row">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        )  
    }
}

export default App;