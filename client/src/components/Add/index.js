import React from "react";

function Add() {
    return (
        <>
        <div className="container add">

            <form class="row g-3 addForm">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name of your buisness</label>
                    <input type="text" class="form-control" id="name"></input>
                </div>
                <div class="col-md-6">
                    <label for="yourName" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="yourName"></input>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
                <div class="col-12">
                    <label for="description" class="form-label">Describe your buisness</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Brief description for your buisness"></input>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"></input>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                            <label class="form-check-label" for="gridCheck">
                                Everything looks good!
                            </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Add;
