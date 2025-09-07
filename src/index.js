import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './backup3/App'
// import App from './005组件传值/App'
import App from './006条件渲染/App'

const root = createRoot(document.querySelector('#root'))

root.render(<App />)
