const topic = "React";
const kind = "Formation";

function displayTrainingTopic() {
    console.log(topic);
}

// On peut avoir autant de name export que l'on souhaite
export {topic, kind}
// Mais on ne peut avoir qu'un seul export default
export default displayTrainingTopic
