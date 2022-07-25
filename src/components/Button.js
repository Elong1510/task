const Button = (props) => {
    const noice = (a, click) => {
        alert(a);
    }
    const missed = (a, click) => {
        alert(a);
    }
    const hitted = (a, click) => {
        alert(a);
    }
    return (
        <>
            <button onClick={(event) => missed("ha deez nuts !!!", event)}>hit or miss</button>
            <button onClick={(event) => noice("click con cac !!!", event)}>click me pls!!!</button>
            <button onClick={(event) => hitted("ittai !!!", event)}>hit or miss</button>
        </>
    );
}
export default Button;