import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Formik, FormikActions, FormikProps, Form, Field } from 'formik';
import TodoSchema from '../schema/todo_schema';

interface MyFormValues {
  title?: string;
  body?: string;
}

interface Props {
  addTodo: (
    id: number,
    title: string,
    body: string,
    check: boolean,
    deadline: string,
  ) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
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

  const addTodo = () => {
    props.addTodo(1, 'hoge', 'huga', true, '2019-12-12');
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
          initialValues={{ title: 'タイトル', body: 'ボディ' }}
          validationSchema={TodoSchema}
          onSubmit={(
            values: MyFormValues,
            actions: FormikActions<MyFormValues>,
          ) => {
            // actions.setSubmitting(false);
          }}
          render={(Props: FormikProps<MyFormValues>) => (
            <Form>
              <Field type="text" name="title" />
              {Props.errors.title && Props.touched.title && (
                <div>{Props.errors.title}</div>
              )}
              <br />
              <Field type="text" name="body" />
              {Props.errors.body && Props.touched.body && (
                <div>{Props.errors.body}</div>
              )}
              <br />
              <button type="submit">Submit</button>
            </Form>
          )}
        />
        <button type="button" onClick={closeModal}>
          close
        </button>
        <button type="button" onClick={addTodo}>
          Create
        </button>
      </Modal>
    </>
  );
};

export default TodoModal;
