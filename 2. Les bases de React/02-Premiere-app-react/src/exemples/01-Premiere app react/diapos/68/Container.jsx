function Container() {
    const dispayHour = true;
    let content;

    if (dispayHour) {
        content = <p>Il est {new Date().toLocaleTimeString()}</p>;
      } else {
        content = <p>Quelle heure est il?</p>;
      }
        return (
    <div>{content}</div>
  )
}
export default Container