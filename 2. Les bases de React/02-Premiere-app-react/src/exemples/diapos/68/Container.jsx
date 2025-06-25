// Dans cette exemple, nous allons tester le rendu conditionnel dans un composant React.

function Container() {
    const dispayHour = true;
    let content;

    if (displayHour) {
        content = <p>Il est {new Date().toLocaleTimeString()}</p>;
      } else {
        content = <p>Quelle heure est il?</p>;
      }
        return (
    <div>{content}</div>
  )
}
export default Container