import React, { useState } from 'react';

function FormExample() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert('Form berhasil ditambahkan!\nNama: ' + formData.name + '\nEmail: ' + formData.email + '\nPesan: ' + formData.message);

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h1>Form Abangkuhh🔥🚀❤️</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nama:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Pesan:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormExample;
