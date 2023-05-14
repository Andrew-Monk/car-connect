import mainBackgroundVideo from './assets/mainbackground.mp4';
import steeringwheelvideo from './assets/steeringwheelvideo.mp4';
import './index.css';

function MainPage() {
  return (
    <div className="position-relative">
      <div className='overlay'></div>
      <video className="mainpage-background-video" autoPlay loop muted>
        <source src={steeringwheelvideo} type="video/mp4" />
      </video>
      <div className="mainpage-content">
        <h1 className="display-5 fw-bold">Welcome to Car Connect!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership management!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
