import { Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import Form from './Form/index';
import FormSubmitted from './FormSubmitted/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      <Route path='/submitted' element={<FormSubmitted />} />
    </Routes>
  );
}

export default App;