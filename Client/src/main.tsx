import { createRoot } from 'react-dom/client';

import AppRouter from './router/AppRouter';
import Layout from './components/Layout';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<Layout>
		<AppRouter />
	</Layout>
);
