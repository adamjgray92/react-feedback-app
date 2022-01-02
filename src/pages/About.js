import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/shared/Card';

export default function About() {
  return (
    <>
      <Header />
      <div className='container'>
        <Card>
          <div className='about'>
            <h1>About This Project</h1>
            <p>
              This is a React app to leave feedback for a product or service
            </p>
            <p>Version: 1.0.0</p>
            <p>
              <Link to='/'>Home</Link>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
