// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hello, Aviabit</h1>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
