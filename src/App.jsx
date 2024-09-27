import { useState } from "react";
import Home from "./Home";
import UserDetails from "./components/auth/UserDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const handleSkip = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <UserDetails
          onAuthenticated={handleAuthenticated}
          onSkip={handleSkip}
        />
      ) : (
        <>
          {/* we can add more component here */}
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
