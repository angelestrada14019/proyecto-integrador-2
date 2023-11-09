import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';


interface CommentBlockProps {
    userAvatar: string; // URL de la imagen del usuario
    userName: string; // Nombre del usuario
    commentDate: string; // Fecha del comentario
    commentText: string; // Texto del comentario
}

const CommentBlock: React.FC = () => {
    const [comments, setComments] = useState<CommentBlockProps[]>([
        {
            userAvatar: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
            userName: 'Usuario 1',
            commentDate: '2023-11-07',
            commentText: 'Este es el comentario del Usuario 1.',
        },
        {
            userAvatar: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
            userName: 'Usuario 2',
            commentDate: '2023-11-08',
            commentText: 'Otro comentario del Usuario 2.',
        },
        {
            userAvatar: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
            userName: 'Usuario 3',
            commentDate: '2023-11-09',
            commentText: 'Tercer comentario del Usuario 3.',
        },
    ]);


    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Ajusta el formato de mes
        const day = String(currentDate.getDate()).padStart(2, '0'); // Ajusta el formato de día
        return `${year}-${month}-${day}`;
    };

    const [newComment, setNewComment] = useState<CommentBlockProps>({
        userAvatar: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
        userName: 'Nuevo Usuario',
        commentDate: getCurrentDate(),
        commentText: '', // Inicializa el nuevo comentario como una cadena vacía
    });


    const handleAddComment = () => {
        if (newComment.commentText) { // Verifica si el campo de texto del comentario no está vacío
            setComments([...comments, newComment]);
            setNewComment({
                userAvatar: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
                userName: 'Nuevo Usuario',
                commentDate: getCurrentDate(),
                commentText: '', // Restablece el campo de texto del nuevo comentario
            });
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Comentarios</Typography>

            <List>
                {comments.map((comment, index) => (
                    <ListItem key={index}>
                        <Paper elevation={3} style={{ padding: '20px', display: 'flex', alignItems: 'center' , width:"100%" }}>
                            <Avatar src={comment.userAvatar} alt={comment.userName} />
                            <div style={{ marginLeft: '10px' }}>
                                <Typography variant="h6">{comment.userName}</Typography>
                                <Typography variant="caption" color="textSecondary">{comment.commentDate}</Typography>
                                <Typography variant="body1">{comment.commentText}</Typography>
                            </div>
                        </Paper>
                    </ListItem>
                ))}
            </List>

            <TextField
                label="Nuevo Comentario"
                variant="outlined"
                fullWidth
                value={newComment.commentText} // Accede al campo 'commentText'
                onChange={(e) => setNewComment({ ...newComment, commentText: e.target.value })} // Actualiza solo 'commentText'
            />
            <Button variant="contained" color="primary" onClick={handleAddComment}>
                Agregar Comentario
            </Button>
        </Paper>
    );
};

export default CommentBlock;
