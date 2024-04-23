import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {name, test, title, photo, _id} = coffee;
    const handelDelete = (id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/delete-coffee/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
         
        }
      });
     
    }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        
      </div>
      <div className="card-actions flex flex-col text-end justify-end">
          <Link to={`updateCoffee/${_id}`} className="btn btn-primary">Update</Link>
          <button onClick={()=>handelDelete(_id)} className="btn btn-primary">delete</button>
          <button className="btn btn-primary">Watch</button>
        </div>
    </div>
  );
};

export default CoffeeCard;
