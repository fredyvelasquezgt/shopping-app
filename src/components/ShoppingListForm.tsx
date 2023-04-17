import React, {useRef} from 'react'


function ShoppingListForm(): JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        console.log('submitted')
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={inputRef} />
        <button type="submit">Add Item</button>
    </form>
}

export default ShoppingListForm;