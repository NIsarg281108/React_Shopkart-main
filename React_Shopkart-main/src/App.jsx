import {  RouterProvider } from 'react-router-dom';
import router from './Pages/router';
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./Pages/CardContext";
import ErrorFallBack from './Pages/ErrorFallBack';
import { ErrorBoundary } from 'react-error-boundary'; 

function App() {
  return (
    <>

  <ThemeProvider>
    <CartProvider>
     <ErrorBoundary FallbackComponent={ErrorFallBack}>
    <RouterProvider router={router} />
  </ErrorBoundary>
  </CartProvider>
  </ThemeProvider>
    
    </>   
  )
}
export default App
