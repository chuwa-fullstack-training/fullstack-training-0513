import loadingIcon from './assets/loading.svg';

const Loading = () => {
  return (
    <div className="loading">
      <div className="backer"></div>
      <img src={loadingIcon} alt=''/>
    </div>
  );
}

export default Loading;