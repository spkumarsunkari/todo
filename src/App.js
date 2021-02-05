import React,{Component} from 'react';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      formInputData:"",
      storeData:[]
    }
  }
  storeInputData=(event1)=>{
    this.setState({
      formInputData:event1.target.value
    })
  }
  storeFinalData=()=>{
    this.setState({
      storeData:[...this.state.storeData,this.state.formInputData]
    })
  }
  deleteStoreData=(event2)=>{
    var tempData=this.state.storeData;
    if(window.confirm("Are you sure to delete"==true)){
      tempData.splice(Number(event2.target.id),1)
      this.setState({
        storeData:tempData
      })
    }
  }
  render(){
    return(
      <div className="row justify-content-center">
        {/* First column */}
        <div className="col-lg-5 col-md-10">
          <div className="card mt-3">
            <div className="card-body">
              <form>
                <input type="text" className="form-control" placeholder="Enter data" onKeyUp={(inputEvent)=>{this.storeInputData(inputEvent)}}/><br />
                <button type="button" class="btn btn-info" onClick={this.storeFinalData}>Ok</button>
              </form>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-lg-5 col-md-10">
        <div className="card mt-3">
            <div className="card-body">
              <ul className="list-group">
                {this.state.storeData.map((item,index)=>(
                  <li className="list-group-item" key={index}> {item} <button className="btn btn-secondary" id={index} onClick={(deleteEvent)=>{this.deleteStoreData(deleteEvent)}}>
                    Delete</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}