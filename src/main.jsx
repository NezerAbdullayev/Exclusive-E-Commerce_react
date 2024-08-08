import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//redux toolkit
import { Provider } from 'react-redux';
import { store } from './Redux/store.jsx';
import "./firebase.js"

import './index.css';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <App />

            {/* popup */}
         <Toaster
            position="top-center"
            gutter={12}
            containerClassName='bg-grey-0 text-grey-700 m-2  px-6 py-4 font-base '
            toastOptions={{
               success:{
                  duration:3000
               },
               error:{
                  duration:5000,
               },
               style:{
                  maxWidth: "500px",
               }
            }}
         />
    </Provider>
);
