import TreeMenu from "./components/TreeMenu"
import menuList from "./data/menuList"

function App() {

  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-1/5">
        <TreeMenu menuList={menuList}/>
      </div>
      <div>
        
      </div>
    </div>
    
  )
}

export default App
