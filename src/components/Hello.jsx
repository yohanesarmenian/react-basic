const Hello = () => {
    return(
        <>
        <h1>Hello from hello component!</h1>
        </>
    )
}

// bisa gini 
// const HelloWithName = (props) => {
// const {name} = props
// atau
const HelloWithName = ({
    name,
    job }) => {
    return(
        <>
        <h1>Hello, my name is {name}, my job is {job} </h1>
        </>
    )
}

// before => export default Hello
// after =>
export {
    Hello,
    HelloWithName
}

// kalau komponent lebih dari satu tidak pake "default"
//Menggunakan Functional component