/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const container = document.getElementById('root');
const root = createRoot(container!);
//const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? "";

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="231061136758-nj9oept9kuttom4a9je2ef5ujbhjm1fe.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
