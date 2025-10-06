export default function AppShowList({ items }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h2>Articles</h2>
                    <ul className="list-group ">
                        {
                            items.map(item =>
                                <li className="list-group-item" key = {item.id}>{item.title}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}