import React from 'react'
import HigherOrderComponent from './HigherOrderComponent';

const ChildComponent : React.FunctionComponent = (props : any)=>{
    const { contacts } = props;
    return(
        <div>
            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        contacts.map((contact : any)=>(
            <tr>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
            </tr>
        ))
    }
  </tbody>
</table>
        </div>
    );
}

export default HigherOrderComponent(ChildComponent);