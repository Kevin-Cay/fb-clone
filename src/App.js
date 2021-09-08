import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    
    //BEM namin convention 
    <div className="app"> 
    {/*Render User config */}
    {!user ? (
      <Login />
    ) : (
      <>
      <Header />
     
      {/*App body */}
       <div className="app_body">
       {/*Sidebar */}
         <Sidebar />
       {/*Feed*/}
         <Feed />
       {/*Widgets*/}
         <Widgets />
       </div>
      </> 
    )}
     {/*Header */}
     
    </div>
  );
}

export default App;
