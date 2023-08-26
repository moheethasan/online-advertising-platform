

const AddAdvertise = () => {
    return (
        <div >
            <h2 className='text-center text-3xl font-semi pt-24 '>Publish Your Add</h2>

            <form 
             >
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name='name'  placeholder="Company Name" className="input input-bordered" />
                        </div>   
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Logo URL</span>
                            </label>
                            <input type="text" name='photo'  placeholder="Logo URL" className="input input-bordered" />
                        </div>                  
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Email</span>
                            </label>
                            <input type="text" name='email'  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name='category' placeholder='Phone' className="input input-bordered" />

                        </div>                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address'  placeholder="Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder='Rating' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name='details' placeholder='Detail Description' className="input input-bordered" />
                        </div>
                       
                        
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div> 
    );
};

export default AddAdvertise;