import React, { useState }from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotosLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from './StateProvider';
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

        db.collection('posts').add({
            message:input, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL, 
            username: user.displayName, 
            imageURL: imageUrl,
        })
        
        setInput('');
        setImageUrl('');
    };

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input  value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={`¿Qué está pasando ${user.displayName} ?`} className="messageSender_input"></input>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL de la imagen (opcional)" />
                    <button type="submit" onClick={handleSubmit}>
                    Publicar
                </button>
                </form>
                
            </div>
            <div className="messageSender_button">
                <div className="messageSender_option">
                        <VideocamIcon style={{color: 'red'}} />
                        <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                        <PhotosLibraryIcon  style={{color: 'green'}} />
                        <h3>Photo</h3>
                </div>
                <div className="messageSender_option">
                        <InsertEmoticonIcon style={{color: 'orange'}} />
                        <h3>Reaction</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
