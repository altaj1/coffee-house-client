

const AddToCoffee = () => {
    const handeSubmit =(event)=>{
        event.preventDefault();
        console.log("bro ouch")
        const form = event.target;
        const name = form.name.value;
        const test = form.test.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const newCoffee = {name, test, title, photo}
        fetch("http://localhost:4000/addCoffee",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
      }
      return (
       <form onSubmit={handeSubmit}>
        {/* first row name ,test */}
         <div className="flex mx-auto w-full gap-8">
            <label className=" flex flex-col w-1/2  text-start">
              <span>Coffee Name: </span>
              <input type="text" name="name" className="grow input input-bordered"  placeholder="name" />
            </label>
            <label className=" flex flex-col w-1/2  text-start">
              <span>Test: </span>
              <input type="text" className="grow input input-bordered" name="test" placeholder="Test" />
            </label>
          </div>
        {/* 2nd row title ,test */}
         <div className="flex mx-auto w-full gap-8">
            <label className=" flex flex-col w-1/2  text-start">
              <span>title: </span>
              <input type="text" name="title" className="grow input input-bordered"  placeholder="Title" />
            </label>
            <label className=" flex flex-col w-1/2  text-start">
              <span>Photo URL: </span>
              <input type="text" className="grow input input-bordered" name="photo" placeholder="Photo URL" />
            </label>
          </div>
          <input type="submit" className="btn btn-block" value="Submit" />
        {/* first row name ,test */}
         {/* <div className="flex mx-auto w-full gap-8">
            <label className=" flex flex-col w-1/2  text-start">
              <span>Coffee Name: </span>
              <input type="text" name="name" className="grow input input-bordered"  placeholder="name" />
            </label>
            <label className=" flex flex-col w-1/2  text-start">
              <span>Test: </span>
              <input type="text" className="grow input input-bordered" name="test" placeholder="Test" />
            </label>
          </div>
        {/* first row name ,test */}
         {/* <div className="flex mx-auto w-full gap-8">
            <label className=" flex flex-col w-1/2  text-start">
              <span>Coffee Name: </span>
              <input type="text" name="name" className="grow input input-bordered"  placeholder="name" />
            </label>
            <label className=" flex flex-col w-1/2  text-start">
              <span>Test: </span>
              <input type="text" className="grow input input-bordered" name="test" placeholder="Test" />
            </label>
          </div>  */}
       </form>
      );
};

export default AddToCoffee;