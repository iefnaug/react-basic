import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './02Adding-Interactivity/02Render-And-Commit/App'
// import App from './02Adding-Interactivity/03State-As-Snapshot/App'
// import App from './02Adding-Interactivity/05-Updating-Object/App'
import App from './02Adding-Interactivity/06-Update-Arrays/App'
// import {StrictMode} from "react";

const root = createRoot(document.querySelector('#root'))

root.render(
    // <StrictMode>
        <App />
    // </StrictMode>
)
