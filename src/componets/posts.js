import React from 'react';
import { PostsContext } from '../contexts/postsContext';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AddPost from './addpost'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Posts = () => {

    const { posts, deletePost } = React.useContext(PostsContext);

    const classes = useStyles();

    const handleDelete = (id) => {
        deletePost(id);
    }

    return (
        <div className="container">
            <h2>Pokemons List</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">Index</TableCell>
                            <TableCell align="center">Del</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell component="th" align="center" scope="row">{post.name}</TableCell>
                                <TableCell align="center">{post.type}</TableCell>
                                <TableCell align="center">{post.pokedex}</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="secondary" onClick={() => handleDelete(post.id)}>X</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddPost></AddPost>
        </div>
    );
}

export default Posts;