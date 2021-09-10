import React,{ useState } from 'react'
import Header from './Header'
import AddContactForm from './AddContactForm'
import ContactList from './ContactList';

function Contacts() {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const [contact, setContact] = useState([
        {
            id: 1,
            name: "Ravi",
            email: "ravi@gmail.com",
        },
        {
            id: 2,
            name: "Satyam",
            email: "satz@gmail.com",
        },
        {
            id: 3,
            name: "Rahul",
            email: "rahul@gmail.com",
        },
    ]);

    const addContact = (e) => {
        e.preventDefault();
        if (!inputName || !inputEmail) {
            alert("Name and Email should not be blank");
            return;
        } else if (inputName && inputEmail && !toggleSubmit) {
            setContact(
                contact.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputName, email: inputEmail };
                    }
                    return elem;
                })
            );
            setToggleSubmit(true);
        } else {
            let id =
                contact.length !== 0 ? contact[contact.length - 1].id + 1 : 1;
            const add = {
                id: id,
                name: inputName,
                email: inputEmail,
            };
            setContact([...contact, add]);
        }
        setInputName("");
        setInputEmail("");
    };

    const onDelete = (id) => {
        setContact(
            contact.filter((c) => {
                return c.id !== id;
            })
        );
    };

    const handleEdit = (obj) => {
        setToggleSubmit(false);
        setInputName(obj.name);
        setInputEmail(obj.email);
        setIsEditItem(obj.id);
    };

    return (
        <div>
            <Header />
            <AddContactForm
                inputName={inputName}
                setInputName={setInputName}
                inputEmail={inputEmail}
                setInputEmail={setInputEmail}
                addContact={addContact}
                toggleSubmit={toggleSubmit}
            />
            <ContactList contacts={contact} onDelete={onDelete} onEdit={handleEdit} />
        </div>
    )
}

export default Contacts
