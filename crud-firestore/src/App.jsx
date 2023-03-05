import './App.css';
import { Links } from './components/Links';
import { LinkForm } from './components/LinkForm';
function App() {
	return (
		<div className='container p-4'>
			<div className='row'>
				<Links />
				<LinkForm />
			</div>
		</div>
	);
}
export default App;
