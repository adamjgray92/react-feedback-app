import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AboutIconLink />
      </div>
    </>
  );
}
