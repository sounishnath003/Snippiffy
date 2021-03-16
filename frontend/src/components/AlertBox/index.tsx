import React from "react";
import { GlobalContext } from "../../Context/GlobalContextState";

function AlertBox() {
  const { error, success } = React.useContext(GlobalContext);

  React.useEffect(() => {
    alert(success);
  }, [error, success])

  return (
    <React.Fragment>
      {error && (
        <div className="text-red-600 p-2"> {error} </div>
      )}
      {success && <div className="text-green-600 p-2"> {success} </div>}
      {error}
    </React.Fragment>
  );
}

export default AlertBox;
