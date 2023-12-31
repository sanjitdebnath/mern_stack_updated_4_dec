import React from 'react';
import Button from '@mui/material/Button';

const ShowTabledata = ({data,handleOpen,DeleteDataFromApi})=>
{

    return(
    <div className="container mt-5">
      <h1 className="mb-5">Data from API</h1>

      {(data != null && data.length > 0) ? (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  
                  <td><a href={"https://mail.google.com/mail/?view=cm&source=mailto&to="+item.email} className="email" target='blank'>{item.email}</a></td>
                  <td><Button variant="contained" color='success' onClick={() => handleOpen(item._id)}className="btn btn-success" data-eid={item._id}>Edit</Button></td>
                  <td><Button variant="contained" color='error' onClick={ () => DeleteDataFromApi(item._id)} className="btn btn-success" data-eid={item._id}>Delete</Button></td>
                </tr>
             ))}
          </tbody>
        </table>
      ) : (
        <p>No data found</p>
        )}
    </div>
    )
}

export default ShowTabledata;