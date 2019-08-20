import React from 'react'

interface MainProps{
    contacts : any[];
}

const Contacts : React.FunctionComponent<MainProps> = (props : any)=>{
    const { contacts }  = props;
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
    {contacts}
  </tbody>
</table>
        </div>
    );
}

export default Contacts;