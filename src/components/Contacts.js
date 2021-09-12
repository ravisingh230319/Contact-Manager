import React,{ useState, useEffect, createContext } from 'react';
import Header from './Header';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';

const DataContext=createContext();

function Contacts() {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    useEffect(() => {
        document.title="Contact Manager";
    },)

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
            <DataContext.Provider value={{ inputName, setInputName, inputEmail, setInputEmail, addContact, toggleSubmit, contact, handleEdit, onDelete }}>
                <AddContactForm />
                <ContactList />
            </DataContext.Provider>
        </div>
    )
}

export default Contacts;
export { DataContext };
