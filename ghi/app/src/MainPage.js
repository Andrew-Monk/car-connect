import mainBackgroundVideo from './assets/mainbackground.mp4';
import './index.css'

function MainPage() {
  return (
<div className="px-4 py-5 my-5 text-center position-relative">
  <video className="mainpage-background-video" autoPlay loop muted>
    <source src={mainBackgroundVideo} type="video/mp4" />
  </video>
  <div className="mainpage-content position-absolute translate-middle">
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
