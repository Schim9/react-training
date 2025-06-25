// Dans cet exemple, nous allons voir la différence entre les composants contrôlés et non contrôlés en React.

import Controlled from "./Controlled"
import UnControlled from "./Uncontrolled"
import UncontrolledWithState from "./UncontrolledWithState"

function Container() {
  return (
    <div>
      <Controlled />
      <Uncontrolled />
      <UncontrolledWithState />
    </div>
  )
}
export default Container