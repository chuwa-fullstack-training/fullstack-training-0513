const IntroContent = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-intro"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
      tabIndex="0"
    >
      <h2>What is Frontend?</h2>
      <ul>
        <li>
          Frontend is the part of the website that users can see and interact
          with.
        </li>
        <li>
          Frontend is also called <strong>client-side</strong>.
        </li>
        <li>Frontend is built with HTML, CSS, and JavaScript.</li>
      </ul>
    </div>
  );
};

export default IntroContent;
