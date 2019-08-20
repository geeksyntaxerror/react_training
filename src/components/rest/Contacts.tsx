import React from 'react'

interface MainProps{
    contacts : any[];
}

const Contacts : React.FunctionComponent<MainProps> = (contacts : any)=>{
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
        contacts.map((contact : any)=>{
            <tr>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
            </tr>
        })
    }
  </tbody>
</table>
        </div>
    );
}

export default Contacts;