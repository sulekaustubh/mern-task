/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				// target: 'http://localhost:8000',
				target: `${process.env.BACKEND || 'http://localhost:8000'}`,
			},
		},
	},
});
