import React from 'react';

const Contact = () => {
    return (
        <div style={containerStyle}>
            <h1>Contact Us</h1>
            <p style={paragraphStyle}>If you have any questions or concerns, please feel free to contact us.</p>

            <form style={formStyle}>
                <label htmlFor="name" style={labelStyle}>Name:</label>
                <input type="text" id="name" name="name" style={inputStyle} required />

                <label htmlFor="email" style={labelStyle}>Email:</label>
                <input type="email" id="email" name="email" style={inputStyle} required />

                <label htmlFor="message" style={labelStyle}>Message:</label>
                <textarea id="message" name="message" rows="4" style={inputStyle} required></textarea>

                <button type="submit" style={buttonStyle}>Submit</button>
            </form>

            <div className="mapdownContainer">
            <div style={infoContainerStyle}>
                <h2>Contact Information</h2>
                <p>Email: soubhagyasdr@gmail.com</p>
                <p>Phone: +91 7978117619</p>
                <p>Address: Marathahali,Banglore</p>
            </div>
            <div style={mapContainerStyle}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700031661704!5m2!1sen!2sin" width="220" height="220" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        </div>
    );
}


const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
};

const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    marginBottom: '8px',
    fontSize: '14px',
};

const inputStyle = {
    padding: '10px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: 'none'
};

const buttonStyle = {
    padding: '10px',
    backgroundColor: 'rgb(0, 106, 255)',
    borderRadius: '4px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
};

const infoContainerStyle = {
    marginTop: '20px',
};

const mapContainerStyle = {
    marginTop: '40px',
};

export default Contact;
