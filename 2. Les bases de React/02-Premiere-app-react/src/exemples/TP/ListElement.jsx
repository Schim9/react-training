export default function ListElement({elementName, onTriggerRemove}) {
  return (
    <div className="d-flex align-items-center border border-secondary rounded-3 p-1 mb-1">
      <p className="mb-0 flex-grow-1  text-start">{elementName}</p>
      <button className="text-danger ms-auto" onClick={onTriggerRemove}>
        X
      </button>
    </div>
  );
}
