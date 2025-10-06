import {useState} from 'react'

export default function AppForm({items, setItems}){
   
    const [newItem, setNewItem] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(newItem);
        if(validateTitle(newItem)){
            const newId = items[items.length-1].id + 1
            setItems([...items,{id: newId, title: newItem, content: ""}])
            console.log(`L'articolo ${newItem} è stato aggiunto`);
        }else{
            alert("Il titolo è troppo corto, inserirne uno di almeno 5 caratteri")
        }
    }

    function validateTitle(title){
        return(title.length >= 5)
    }

    return (
        <>
        <div className="container my-4">
            <div className="row">
                <div className="card p-0">
                    <div className="card-header">
                        Aggiungi articolo
                    </div>
                    <div className="card-body">
                        <form action="submit" onSubmit={handleSubmit}>
                            <label htmlFor = "articleTitle" className="col-form-label pe-2">Titolo</label>
                            <input type="text" className="form-control" id = "articleTitle" onChange={(e) => setNewItem(e.target.value)} required/>
                            <button type="submit" className="btn btn-primary d-block mt-3">
                                Aggiungi
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}