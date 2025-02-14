import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent {parentId}</h1>
      <Routes>
        <Route path="/:childId" element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  let { childId } = useParams();
  return (
    <div>
      <h2>Child {childId}</h2>
      <p>Parent ID: {parentId}</p> {/* Accessing parentId from ParentRoute */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=':parentId/*' element={<ParentRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;