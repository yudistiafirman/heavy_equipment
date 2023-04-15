import AdminRoute from "./Route/AdminRoute";
import Routing from "./Route/Routing";

function App() {
  return (
    <div>{localStorage.getItem("user") ? <AdminRoute /> : <Routing />}</div>
  );
}

export default App;
