import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App.tsx'

// biome-ignore lint: noUnusedVariables
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
