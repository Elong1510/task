
const Bai1 = (props) => {
    const Lists = [
        { id: 1, name: 'long' },
        { id: 2, name: 'ngan' },
        { id: 3, name: 'Edward' }
    ]
    return (
        <ul>{Lists.map((list) => <li>this is a paragraph {list.id} from {list.name} </li>)}</ul>
        // <li>this is paragraph {props.Lists}</li>
    );
}
export default Bai1;