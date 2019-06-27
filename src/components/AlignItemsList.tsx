import React from 'react';

import styled from 'styled-components';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Todo from './Todo';

import { Todo as ITodo } from '../reducer';

interface Props {
  todos: ITodo[];
  onclickHo: (todo: ITodo) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      margin: '0 auto',
    },
    inline: {
      display: 'inline',
    },
    checkbox: {
      width: '40px',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const AlignItemsList: React.FC<Props> = ({ todos, onclickHo }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {todos.map(todo => (
        <>
          <ListItem alignItems="flex-start">
            <Checkbox
              // checked={state.checkedA}
              // onChange={handleChange('checkedA')}
              value="checkedA"
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
              className={classes.checkbox}
            />
            <ListItemText
              primary={todo.title}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {todo.body}
                </>
              }
            />
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
              onClick={() => {
                onclickHo(todo);
              }}
            >
              Edit
            </Button>
            <IconButton aria-label="Delete" className={classes.margin}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};

export default AlignItemsList;
