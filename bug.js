In React Router Dom v6, a common issue arises when working with nested routes and the `useParams` hook.  If a parent route has a parameter and a child route also has parameters, extracting the child parameters might not work as expected.  For example:

```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent {parentId}</h1>
      <Routes>
        <Route path=':childId' element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  let { childId } = useParams();
  return (
    <div>
      <h2>Child {childId}</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=':parentId' element={<ParentRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
```

In this case, accessing `childId` in `ChildRoute` will always return `undefined` because the parent route already consumes the `:parentId` parameter.  The issue is in how React Router resolves parameters in the nested routes' paths.