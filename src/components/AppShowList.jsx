export default function AppShowList({ items, setItems }) {

    function handleTrash(id) {
        const newItems = items.filter(item => item.id != id)
        setItems(newItems)
        console.log(`L'articolo con id ${id} è stato cancellato`);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2>Articles</h2>
                    <ul className="list-group ">
                        {
                            items.map(item =>
                                <li className="list-group-item" key={item.id}>
                                    <span>{item.title}</span>

                                    <button className="btn btn-danger mx-4" onClick={() => handleTrash(item.id)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}