import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './02Adding-Interactivity/02Render-And-Commit/App'
// import App from './02Adding-Interactivity/03State-As-Snapshot/App'
// import App from './02Adding-Interactivity/05-Updating-Object/App'
// import App from './02Adding-Interactivity/06-Update-Arrays/App'
// import App from './03Manage-State/01Reacting-To-Input-With-State/App'
// import App from './03Manage-State/03Sharing-State-Between-Components/App'
// import App from './03Manage-State/04Preserving-And-Resetting-State/App'
// import App from './03Manage-State/05Extracting-State-Logic-Into-A-Reducer/App'
import App from './03Manage-State/06Passing-Data-Deeply-With-Context/App'
// import {StrictMode} from "react";

const root = createRoot(document.querySelector('#root'))

root.render(
    // <StrictMode>
        <App />
    // </StrictMode>
)
