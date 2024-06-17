const list = new Array(20).fill(0).map((_val, idx) => idx + 1);

const Hw2 = () => {

  return (
    <div className="hw2">
      <h2>Phone Screen</h2>
      <div className="phone">
        <div className="panel">
          <h3>status bar</h3>
          <ul>
            {list.map(val => (
              <li key={val}>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hw2;