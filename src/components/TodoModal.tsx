import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Formik, FormikActions, FormikProps, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import TodoSchema from '../schema/todo_schema';

interface MyFormValues {
  title: string;
  body: string;
}

interface Props {
  addTodo: (title: string, body: string, deadline: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      width: '300px',
    },
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }),
);

const TodoModal: React.FC<Props> = props => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const openModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const classes = useStyles();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '400px',
      width: '400px',
    },
  };

  return (
    <>
      <Fab
        size="small"
        color="secondary"
        aria-label="Add"
        className={classes.margin}
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Create Todo</h3>
        <Formik
          initialValues={{ title: 'タイトル', body: 'テキスト' }}
          validationSchema={TodoSchema}
          onSubmit={(
            values: MyFormValues,
            actions: FormikActions<MyFormValues>,
          ) => {
            props.addTodo(values.title, values.body, '2019-12-12');
            closeModal();
          }}
          render={(Props: FormikProps<MyFormValues>) => (
            <Form>
              <Field
                type="text"
                name="title"
                component={TextField}
                className={classes.form}
              />
              {Props.errors.title && Props.touched.title && (
                <div>{Props.errors.title}</div>
              )}
              <br />
              <Field
                type="text"
                name="body"
                component={TextField}
                margin="dense"
                rows="3"
                variant="outlined"
                multiline
                rowsMax="8"
                className={classes.form}
              />
              {Props.errors.body && Props.touched.body && (
                <div>{Props.errors.body}</div>
              )}
              <br />
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={closeModal}
              >
                Cancel
              </Button>
            </Form>
          )}
        />
      </Modal>
    </>
  );
};

export default TodoModal;
