// client/src/components/UserDetails.jsx
const UserDetails = ({ user }) => {
    if (!user) {
      return <div>No user selected</div>;
    }
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        
        <div className="bg-gray-50 p-4 rounded border">
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-bold">ID:</div>
            <div className="col-span-2">{user.id}</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-bold">First Name:</div>
            <div className="col-span-2">{user.firstName}</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="font-bold">Last Name:</div>
            <div className="col-span-2">{user.lastName}</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="font-bold">Hobby:</div>
            <div className="col-span-2">{user.hobby || "Not specified"}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserDetails;