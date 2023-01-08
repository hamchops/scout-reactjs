// import React from "react";
// import { useForm } from 'react-hook-form';

// export default function AddSkatePark() {
//     const {
//         register,
//         handleSubmit,
//     } = useForm();

//     const onSubmit = (data) => {
//         console.log(data)
//     }
// return (
//     <div className="AddSkatePark">
//     <form onSubmite={handleSubmit(onSubmit)}>
//     <div className="form-control">
//         <label>Park Name</label>
//         <input type="text" name="Park Name" {...register("Park Name")} />
//         </div>
//         <div className="form-control">
//         <label>Address</label>
//         <input type="password" name="address" {...register("address")} />
//         </div>
//         <div className="form-control">
//         <label></label>
//         <button type="submit">Add</button>
//         </div>
//     </form>
//     </div>
// );
// }

import React from "react";
import { useForm } from "react-hook-form";
// import "./styles.css";

export default function AddSkateParks() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}