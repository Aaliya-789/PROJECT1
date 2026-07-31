import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import {
  getDepartments,
  createDepartment,
  deleteDepartment,
  updateDepartment,
  createDepartmentOfficer
} from "../../services/departmentService";


const ManageDepartments = () => {


  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);


  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);


 const [formData, setFormData] = useState({
  departmentName: "",
  description: "",
  email: "",
  phone: "",
  location: "",
});



  const [showOfficerForm, setShowOfficerForm] = useState(false);

  const [selectedDepartment, setSelectedDepartment] = useState(null);


  const [officerData, setOfficerData] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
  });




  useEffect(()=>{
    fetchDepartments();
  },[]);




  const fetchDepartments = async()=>{

    try{

      const token = localStorage.getItem("token");

      const data = await getDepartments(token);

      setDepartments(data.departments || []);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      const token = localStorage.getItem("token");


      if(editId){

        await updateDepartment(
          token,
          editId,
          formData
        );

        alert("Department updated successfully");


      }
      else{

        await createDepartment(
          token,
          formData
        );

        alert("Department created successfully");

      }



      setShowForm(false);

      setEditId(null);


      setFormData({
  departmentName: "",
  description: "",
  email: "",
  phone: "",
  location: "",
});


      fetchDepartments();



    }catch(error){

      console.log(error);

      alert("Operation failed");

    }

  };







  const handleEdit = (department) => {

  setEditId(department._id);

  setFormData({
    departmentName: department.departmentName,
    description: department.description || "",
    email: department.email || "",
    phone: department.phone || "",
    location: department.location || "",
  });

  setShowForm(true);

};








  const handleDeleteDepartment=async(id)=>{


    if(!window.confirm(
      "Are you sure you want to delete this department?"
    ))
    return;



    try{


      const token = localStorage.getItem("token");


      await deleteDepartment(
        token,
        id
      );


      alert(
        "Department deleted successfully"
      );


      fetchDepartments();


    }catch(error){

      console.log(error);

    }


  };







  const handleCreateOfficer=async(e)=>{


    e.preventDefault();


    try{


      const token = localStorage.getItem("token");


      await createDepartmentOfficer(

        token,

        selectedDepartment,

        officerData

      );



      alert(
        "Department Officer created successfully"
      );



      setShowOfficerForm(false);



      setOfficerData({

        name:"",
        email:"",
        password:"",
        phone:"",

      });



      fetchDepartments();



    }catch(error){


      console.log(error);

      alert(
        "Failed to create officer"
      );


    }

  };






return (

<div className="bg-white rounded-xl shadow-md p-6">



<div className="flex justify-between items-center mb-6">


<h2 className="text-2xl font-bold">
Manage Departments
</h2>



<button

onClick={()=>{

setShowForm(!showForm);

setEditId(null);

}}

className="bg-blue-600 text-white px-4 py-2 rounded-lg"

>

+ Add Department

</button>


</div>






{showForm && (

<form
onSubmit={handleSubmit}
className="bg-slate-50 p-4 rounded-lg mb-6"
>

<input
className="border p-2 w-full mb-3 rounded"
placeholder="Department Name"
value={formData.departmentName}
onChange={(e)=>
setFormData({
...formData,
departmentName:e.target.value
})
}
required
/>

<textarea
className="border p-2 w-full mb-3 rounded"
placeholder="Description"
value={formData.description}
onChange={(e)=>
setFormData({
...formData,
description:e.target.value
})
}
required
/>

<input
type="email"
className="border p-2 w-full mb-3 rounded"
placeholder="Department Email"
value={formData.email}
onChange={(e)=>
setFormData({
...formData,
email:e.target.value
})
}
required
/>

<input
className="border p-2 w-full mb-3 rounded"
placeholder="Phone Number"
value={formData.phone}
onChange={(e)=>
setFormData({
...formData,
phone:e.target.value
})
}
required
/>

<input
className="border p-2 w-full mb-3 rounded"
placeholder="Location"
value={formData.location}
onChange={(e)=>
setFormData({
...formData,
location:e.target.value
})
}
required
/>

<button
className="bg-green-600 text-white px-4 py-2 rounded"
>
{editId ? "Update Department" : "Create Department"}
</button>

</form>

)}








{showOfficerForm && (

<form

onSubmit={handleCreateOfficer}

className="bg-green-50 p-4 rounded-lg mb-6"

>


<h3 className="font-bold mb-3">
Create Department Officer
</h3>



<input

className="border p-2 w-full mb-2 rounded"

placeholder="Name"

value={officerData.name}

onChange={(e)=>

setOfficerData({

...officerData,

name:e.target.value

})

}

/>



<input

className="border p-2 w-full mb-2 rounded"

placeholder="Email"

value={officerData.email}

onChange={(e)=>

setOfficerData({

...officerData,

email:e.target.value

})

}

/>



<input

className="border p-2 w-full mb-2 rounded"

placeholder="Password"

type="password"

value={officerData.password}

onChange={(e)=>

setOfficerData({

...officerData,

password:e.target.value

})

}

/>



<input

className="border p-2 w-full mb-2 rounded"

placeholder="Phone"

value={officerData.phone}

onChange={(e)=>

setOfficerData({

...officerData,

phone:e.target.value

})

}

/>



<button

className="bg-green-600 text-white px-4 py-2 rounded"

>

Create Officer

</button>


</form>

)}







{loading ? (

<p className="text-center">
Loading departments...
</p>


):(


<table className="w-full border-collapse">


<thead>

<tr className="bg-slate-100">

<th className="p-3 text-left">
Department
</th>


<th className="p-3 text-left">
Department Head
</th>


<th className="p-3 text-left">
Complaints
</th>


<th className="p-3 text-center">
Actions
</th>


</tr>

</thead>




<tbody>


{departments.map((department)=>(


<tr

key={department._id}

className="border-b"

>


<td className="p-3">
{department.departmentName}</td>



<td className="p-3">

{department.headOfficer?.name || "Not Assigned"}

</td>




<td className="p-3">

{department.complaints || 0}

</td>




<td className="p-3">


<div className="flex justify-center gap-4">


<button

onClick={()=>handleEdit(department)}

className="text-blue-600"

>

<FaEdit/>

</button>




<button

onClick={()=>handleDeleteDepartment(department._id)}

className="text-red-600"

>

<FaTrash/>

</button>





<button

onClick={()=>{

setSelectedDepartment(department._id);

setShowOfficerForm(true);

}}

className="text-green-600"

>

👨‍💼

</button>




</div>


</td>



</tr>


))}



</tbody>



</table>


)}



</div>


);


};


export default ManageDepartments;