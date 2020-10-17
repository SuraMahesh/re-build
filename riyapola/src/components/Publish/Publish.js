import React from 'react'
import "./Publish.css";

function Publish() {
    return (
        <div className="publish">
            <div className="publish__card">
                <div className='publish__container'>
                    <h1>General Information</h1>

                    <form>
                        <div className="details">
                            <h6 className="topic">Category</h6>
                            <select class="form-control">
                                <option>select a category</option>
                                <option>Vehicles</option>
                                <option>Electronics</option>
                                <option>Property</option>
                                <option>Jobs</option>
                                <option>Education</option>
                                <option>Home and Garden</option>
                            </select>
                        </div>
                        <p />
                        <div className="details1">
                            <div className="details">
                                <h6 className="topic">Title</h6>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="inputCity"></input>
                                </div>

                            </div>
                        </div>
                        <p />
                        <h6 className="topic">Price</h6>
                        <div className="form-group col-md-4">
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <p />
                        <h6 className="topic">Describtion</h6>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <p />
                        <h6 className="topic">Location</h6>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputCity"></input>
                        </div>
                        <p />
                        <h6 className="topic">Contact No</h6>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputCity"></input>
                        </div>
                        <p />
                        <div className="details1">
                            <button type="button" class="btn btn-success btn-lg">Publish</button>
                            <button type="button" class="btn btn-secondary btn-lg">Cancel</button>
                        </div>



                    </form>



                </div>
            </div>
        </div>
    )
}

export default Publish

