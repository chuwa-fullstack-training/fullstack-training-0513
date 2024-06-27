import '../css/hw2.css';

export default function ColorComponent({ value, color, idx, changeName}) {
    const updateValue = (e) => {
        changeName(idx, e.target.value);
      }

    return (
        <div className={`color-card ${color}`}>
            <p>Component name: </p>
            <input className="card-input" type='text' value={value} onChange={updateValue}></input>
        </div>
    )
}